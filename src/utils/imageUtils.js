/**
 * Build image URL with Cloudinary optimization
 * @param {string|string[]} images - Image paths or URLs from product
 * @param {number} width - Desired width for Cloudinary resizing
 * @returns {string} Optimized image URL
 */
export const getImageUrl = (images, width = 440) => {
    if (!images || (Array.isArray(images) && images.length === 0)) {
        return 'https://placehold.co/600x600?text=No+Image';
    }
    
    let img = Array.isArray(images) ? images[0] : images;
    
    // Cloudinary optimization: auto-format, auto-quality, responsive width
    if (img.includes('res.cloudinary.com')) {
        // Inject transformations before /upload/
        if (img.includes('/upload/')) {
            // f_auto: automatic format selection (WebP/AVIF)
            // q_auto: automatic quality compression
            // w_XXX: specific width for the viewport
            // c_limit: resize but don't upscale
            img = img.replace('/upload/', `/upload/f_auto,q_auto,w_${width},c_limit/`);
        }
        return img;
    }
    
    if (img.startsWith('http')) return img;
    
    // Fallback for local backend images
    const baseUrl = import.meta.env.VITE_API_URL.replace('/api', '');
    const path = img.startsWith('/') ? img : `/${img}`;
    return `${baseUrl}${path}`;
};
