import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

// Custom plugin to inline CSS directly into index.html at build time.
// This perfectly avoids both "Render Blocking Requests" (network) AND "Forced Reflows" (DOM mutation)
function inlineCssPlugin() {
    return {
        name: 'inline-css-plugin',
        enforce: 'post',
        generateBundle(options, bundle) {
            let cssContent = '';
            const cssFileKey = Object.keys(bundle).find(key => key.endsWith('.css'));
            
            if (cssFileKey) {
                // Extract CSS
                cssContent = bundle[cssFileKey].source;
                // Delete the separate CSS file so it doesn't get emitted
                delete bundle[cssFileKey];
            }

            const htmlFileKey = Object.keys(bundle).find(key => key.endsWith('.html'));
            if (htmlFileKey && cssContent) {
                const htmlFile = bundle[htmlFileKey];
                // Strip out the Vite-injected <link rel="stylesheet">
                htmlFile.source = htmlFile.source.replace(/<link[^>]*rel="stylesheet"[^>]*>/i, '');
                // Inline the CSS
                htmlFile.source = htmlFile.source.replace(
                    '</head>',
                    `<style>${cssContent}</style>\n  </head>`
                );
            }
        }
    };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
  build: {
    rollupOptions: {
      output: {
      }
    }
  }
});
