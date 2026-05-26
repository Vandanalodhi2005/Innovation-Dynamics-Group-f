import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// Custom plugin to inline CSS directly into all generated HTML files at build time.
function inlineCssPlugin() {
    return {
        name: 'inline-css-plugin',
        enforce: 'post',
        generateBundle(options, bundle) {
            let cssContent = '';
            const cssFileKey = Object.keys(bundle).find(key => key.endsWith('.css'));
            
            if (cssFileKey) {
                cssContent = bundle[cssFileKey].source;
                // Optionally remove the external CSS file from the bundle if desired.
                // delete bundle[cssFileKey]; 
            }

            // Apply to ALL HTML files in the bundle
            Object.keys(bundle).forEach(key => {
                if (key.endsWith('.html')) {
                    const htmlFile = bundle[key];
                    // Remove existing <link> tags for CSS
                    htmlFile.source = htmlFile.source.replace(/<link[^>]*rel="stylesheet"[^>]*>/i, '');
                    // Inject CSS directly into <style> tag in <head>
                    htmlFile.source = htmlFile.source.replace(
                        '</head>',
                        `<style>${cssContent}</style>\n  </head>`
                    );
                }
            });
        }
    };
}
// Custom plugin to prevent FOUC (Flash of Unstyled Content) for SEO text inside #root
function preventFoucPlugin() {
    return {
        name: 'prevent-fouc-plugin',
        transformIndexHtml(html) {
            return html.replace(
                '</head>',
                `<style>
    /* Hide pre-rendered SEO content to prevent flashing before React hydration */
    #root > :not(.min-h-screen) { display: none !important; }
    </style>\n  </head>`
            );
        }
    };
}

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    inlineCssPlugin(),
    preventFoucPlugin(),
    preventFoucPlugin()
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about/index.html',
        faqs: 'faqs/index.html',
        contact: 'contact/index.html',
        shop: 'shop/index.html',
        cart: 'cart/index.html',
        checkout: 'checkout/index.html',
        login: 'login/index.html',
        signup: 'signup/index.html',
        'privacy-policy': 'privacy-policy/index.html',
        'terms-conditions': 'terms-conditions/index.html',
        'refund-policy': 'refund-policy/index.html',
        'shipping-policy': 'shipping-policy/index.html',
        'cookie-policy': 'cookie-policy/index.html',
        disclaimer: 'disclaimer/index.html',
        'do-not-sell': 'do-not-sell/index.html',
        accessibility: 'accessibility/index.html',
        'buying-guide': 'buying-guide/index.html',
        resources: 'resources/index.html',
        'return-exchange': 'return-exchange/index.html',
        'home-printers': 'home-printers/index.html',
        'office-printers': 'office-printers/index.html',
        'laser-printers': 'laser-printers/index.html',
        'inkjet-printers': 'inkjet-printers/index.html',
        'ink-toner': 'ink-toner/index.html',
      }
    }
  }
});
