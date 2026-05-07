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

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        faqs: 'faqs.html',
        contact: 'contact.html',
        shop: 'shop.html',
        cart: 'cart.html',
        checkout: 'checkout.html',
        login: 'login.html',
        signup: 'signup.html',
        'privacy-policy': 'privacy-policy.html',
        'terms-conditions': 'terms-conditions.html',
        'refund-policy': 'refund-policy.html',
        'shipping-policy': 'shipping-policy.html',
        'cookie-policy': 'cookie-policy.html',
        disclaimer: 'disclaimer.html',
        'do-not-sell': 'do-not-sell.html',
        accessibility: 'accessibility.html',
        'buying-guide': 'buying-guide.html',
        resources: 'resources.html',
        'return-exchange': 'return-exchange.html',
        'home-printers': 'home-printers.html',
        'office-printers': 'office-printers.html',
        'laser-printers': 'laser-printers.html',
        'inkjet-printers': 'inkjet-printers.html',
        'ink-toner': 'ink-toner.html',
      }
    }
  }
});
