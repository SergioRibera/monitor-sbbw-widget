import './style.css'
import { getCpu, getMemory, getAllDisks } from '@sbbw/api/sysinfo'
import { getWidgetInfo } from '@sbbw/api/widget'

const themeToggle = document.getElementById('theme-toggle')

const cpuSlider = document.getElementById('cpu-slider')
const cpuSpan = document.getElementById('cpu-percentage')
const memorySlider = document.getElementById('memory-slider')
const memorySpan = document.getElementById('memory-percentage')
const diskContainer = document.getElementById('disks')

//
// Helper functions
//
const niceBytes = (x) => {
    const units = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
        n = n / 1024;
    }
    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

const renderDisk = (disk) => {
    let name = disk.mount_point || disk.name
    let used = niceBytes(disk.total_space - disk.free_space)
    let total = niceBytes(disk.total_space)
    let value = ((disk.total_space - disk.free_space) * 100) / disk.total_space
    console.log(`disk ${name} percentage`, value)
    let style = `linear-gradient(to right, #3264fe ${value}%, #d5d5d5 ${value}%)`
    let element = `<tr>
                        <td><span>${name}</span></td>
                        <td><input class="range-slider_range" style="background: ${style}" disabled type="range" value="${used}" min="0" max="${total}" /></td>
                        <!--<td>${used} / ${total}</td>-->
                    </tr>`

    diskContainer.innerHTML += element
}

//
//
// Initialize function
//
//

const init = () => {
    const setThemeFromStorage = () => {
        let themeSaved = localStorage.getItem("theme")
        document.body.classList.add(themeSaved || "light")
    }
    getWidgetInfo()
        .then(info => {
            let params = info.widget_args.split(';')[0].split('=')
            if (params.length == 2) {
                document.body.classList.add(params[1] || "light")
            } else {
                setThemeFromStorage()
            }
        })
        .catch(_ => setThemeFromStorage())

    const refresh = () => {
        getCpu().then(updateCpu)
        getMemory().then(updateMemory)
    }
    getAllDisks().then(updateDisks)

    setInterval(refresh, 5000)
}

//
//
// Management of data
//
//

const toggleThemeCallback = () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light")
        document.body.classList.add("night")
        themeToggle.value = "Light"
        localStorage.setItem("theme", "night")
    } else {
        document.body.classList.remove("night")
        document.body.classList.add("light")
        themeToggle.value = "Night"
        localStorage.setItem("theme", "light")
    }
}

const updateCpu = (cpus) => {
    let sum = cpus.reduce((a, b) => a + b.cpu_usage, 0)
    let percentage = Math.floor(sum / cpus.length)
    cpuSpan.innerText = `${percentage} %`
    cpuSlider.value = percentage
}

const updateMemory = (memory) => {
    let used = memory.used
    let total = memory.total
    let percentage = Math.floor((used * 100) / total)
    memorySpan.innerText = `${percentage} %`
    memorySlider.value = used
    memorySlider.max = total
}

const updateDisks = (raw_disks) => {
    let disks = [...new Map(raw_disks.reverse().map(d => [d["name"], d])).values()]
    disks.reverse().forEach(renderDisk)
}

themeToggle.onclick = toggleThemeCallback
window.onload = init
