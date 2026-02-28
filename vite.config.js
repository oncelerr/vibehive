import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    server: {
        host: true,
        port: 5173,
        hmr: {
            host: 'localhost',
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
        svgr(),
    ],
});