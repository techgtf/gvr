import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
 
export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ], resolve: {
        alias: {
          frontend: path.resolve(__dirname, 'resources/js/frontend'),
          admin: path.resolve(__dirname, 'resources/js/admin'),
          common: path.resolve(__dirname, 'resources/js/common'),
          root: path.resolve(__dirname, 'resources/js'),

        },
      },
    
});