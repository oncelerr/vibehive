import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    server: {
        host: true,
        port: 5173,
        hmr: {
            host: '192.168.100.27',
        },
    },

    optimizeDeps: {
        include: ['@tinymce/tinymce-react']
    },

    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.jsx'],
            refresh: true,
        }),
        tailwindcss(),
    ],
});