const fs = require('fs');
const path = require('path');

const directoryPath = 'd:\\TechnoSky_Official\\InnovationDynamicsGroup\\frontend';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== 'dist' && file !== 'node_modules' && file !== 'public' && file !== 'src') {
        processDirectory(fullPath);
      }
    } else if (file === 'index.html' && directory !== directoryPath) {
      // It's an index.html inside a subdirectory
      updateFile(fullPath, path.basename(directory));
    }
  }
}

function updateFile(filePath, folderName) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has Additional SEO Meta Tags
  if (content.includes('<!-- Additional SEO Meta Tags -->')) {
    console.log(`Skipping ${filePath} (already updated)`);
    return;
  }

  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const title = titleMatch ? titleMatch[1] : `Innovation Dynamics Group`;
  const description = descMatch ? descMatch[1] : `Shop home and office printers at Innovation Dynamics Group.`;

  const keywords = `innovation dynamics group, ${folderName.replace(/-/g, ' ')}, printers, office supplies, printer retailer`;

  // Fix canonical link if it doesn't have trailing slash
  content = content.replace(
    /<link\s+rel=["']canonical["']\s+href=["'](.*?)(?<!\/)["']\s*\/?>/i,
    `<link rel="canonical" href="$1/" />`
  );

  const seoBlock = `
    <!-- Additional SEO Meta Tags -->
    <meta name="keywords" content="${keywords}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="author" content="Innovation Dynamics Group LLC" />
    <meta name="language" content="en-US" />
    <meta name="geo.region" content="US-MN" />
    <meta name="geo.placename" content="Blaine, Minnesota" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Innovation Dynamics Group" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="https://innovationdynamicsgroup.com/${folderName}/" />
    <meta property="og:image" content="https://innovationdynamicsgroup.com/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${title}" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter / X Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="https://innovationdynamicsgroup.com/og-image.png" />

    <!-- Business / Local SEO structured data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Innovation Dynamics Group LLC",
      "description": "Independent U.S. online retailer specializing in home printers, office printers, laser printers, inkjet printers, and ink & toner supplies.",
      "url": "https://innovationdynamicsgroup.com",
      "logo": "https://innovationdynamicsgroup.com/vite.png",
      "image": "https://innovationdynamicsgroup.com/hero/hero-right.png",
      "telephone": "+1-651-815-4630",
      "email": "support@innovationdynamicsgroup.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11397 Quincy St NE",
        "addressLocality": "Blaine",
        "addressRegion": "MN",
        "postalCode": "55434",
        "addressCountry": "US"
      },
      "areaServed": ["US", "CA"],
      "currenciesAccepted": "USD",
      "paymentAccepted": "Credit Card, Debit Card",
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Printers & Supplies",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Home Printers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Office Printers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Laser Printers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Inkjet Printers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Ink & Toner" } }
        ]
      }
    }
    </script>
  </head>`;

  content = content.replace('</head>', seoBlock);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

processDirectory(directoryPath);
console.log('All files processed.');
