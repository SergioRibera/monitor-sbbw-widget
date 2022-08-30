import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: './ui',
        emptyOutDir: true,
    },
    server: {
        watch: {
            usePolling: true,
        },
        cors: {
            origin: '*',
            allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
        },
    },
    base: '/monitor/ui/',
    plugins: [],
})
