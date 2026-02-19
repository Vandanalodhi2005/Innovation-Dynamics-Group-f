import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ShopContext = createContext();

export const useShop = () => {
    return useContext(ShopContext);
};

export const ShopProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    // Cart State
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Wishlist State
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Shipping State
    const [shippingInfo, setShippingInfo] = useState(() => {
        const savedShipping = localStorage.getItem('shippingInfo');
        return savedShipping ? JSON.parse(savedShipping) : {
            fullName: '',
            address: '',
            city: '',
            postalCode: '',
            country: ''
        };
    });

    // Persist to LocalStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
    }, [shippingInfo]);

    // Cart Actions
    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item._id === product._id);
            if (existingItem) {
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item._id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(prevCart =>
            prevCart.map(item =>
                item._id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    // Wishlist Actions
    const addToWishlist = (product) => {
        if (!isAuthenticated) return false; // Return false to indicate failure (handled in UI)

        setWishlist(prevWishlist => {
            if (prevWishlist.some(item => item._id === product._id)) return prevWishlist;
            return [...prevWishlist, product];
        });
        return true; // Return true to indicate success
    };

    const removeFromWishlist = (productId) => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item._id !== productId));
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item => item._id === productId);
    };

    const moveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product._id);
    };

    // Shipping Actions
    const saveShippingInfo = (info) => {
        setShippingInfo(info);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlist.length;
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const value = {
        cart,
        wishlist,
        shippingInfo,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        moveToCart,
        saveShippingInfo,
        cartCount,
        wishlistCount,
        cartTotal
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
