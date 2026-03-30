import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import CookieConsent from './components/common/CookieConsent';

// Utility to scroll to top on route change (including query param changes)
const ScrollToTopOnNavigation = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
};

import Home from './pages/Home';
import Printers from './components/Printers';

// ── Lazy-loaded pages (code-split into separate chunks) ──────────────────────
const About          = lazy(() => import('./pages/About'));
const FAQs           = lazy(() => import('./pages/FAQs'));
const Contact        = lazy(() => import('./pages/Contact'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart           = lazy(() => import('./pages/Cart'));
const Wishlist       = lazy(() => import('./pages/Wishlist'));
const Checkout       = lazy(() => import('./pages/Checkout'));
const Login          = lazy(() => import('./pages/Login'));
const Signup         = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword  = lazy(() => import('./pages/ResetPassword'));
const TrackOrder     = lazy(() => import('./pages/TrackOrder'));
const MyOrders       = lazy(() => import('./pages/MyOrders'));
const OrderDetails   = lazy(() => import('./pages/OrderDetails'));
const Profile        = lazy(() => import('./pages/Profile'));
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const RefundPolicy   = lazy(() => import('./pages/RefundPolicy'));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy'));
const CookiePolicy   = lazy(() => import('./pages/CookiePolicy'));
const Disclaimer     = lazy(() => import('./pages/Disclaimer'));
const DoNotSell      = lazy(() => import('./pages/DoNotSell'));
const Accessibility  = lazy(() => import('./pages/Accessibility'));
const BuyingGuide    = lazy(() => import('./pages/BuyingGuide'));
const Resources      = lazy(() => import('./pages/Resources'));
const ReturnExchange = lazy(() => import('./pages/ReturnExchange'));

// ── Admin (lazily loaded — never downloaded by regular users) ────────────────
const AdminLogin     = lazy(() => import('./components/admin/Auth/AdminLogin'));
const AdminLayout    = lazy(() => import('./components/admin/Layout/AdminLayout'));
const AdminDashboard = lazy(() => import('./components/admin/Pages/AdminDashboard'));
const AdminCategories = lazy(() => import('./components/admin/Pages/AdminCategories'));
const AdminProducts  = lazy(() => import('./components/admin/Pages/AdminProducts'));
const AdminCustomers = lazy(() => import('./components/admin/Pages/AdminCustomers'));
const AdminOrders    = lazy(() => import('./components/admin/Pages/AdminOrders'));
const AdminChat      = lazy(() => import('./components/admin/Pages/AdminChat'));
const AdminAnalytics = lazy(() => import('./components/admin/Pages/AdminAnalytics'));
const AdminSettings  = lazy(() => import('./components/admin/Pages/AdminSettings'));

// ── Loading fallback ─────────────────────────────────────────────────────────
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#024ad8] border-t-transparent" />
  </div>
);

import './App.css';

function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTopOnNavigation />
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/shop" element={<Printers />} />
                  <Route path="/shop/:category" element={<Printers />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/track-order" element={<TrackOrder />} />
                  <Route path="/orders" element={<MyOrders />} />
                  <Route path="/order/:id" element={<OrderDetails />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/return-refund" element={<RefundPolicy />} />
                  <Route path="/shipping-policy" element={<ShippingPolicy />} />
                  <Route path="/cookies-policy" element={<CookiePolicy />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/do-not-sell" element={<DoNotSell />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                  <Route path="/buying-guide" element={<BuyingGuide />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/return-exchange" element={<ReturnExchange />} />

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="categories" element={<AdminCategories />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="customers" element={<AdminCustomers />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path="chat" element={<AdminChat />} />
                    <Route path="analytics" element={<AdminAnalytics />} />
                    <Route path="settings" element={<AdminSettings />} />
                  </Route>
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ScrollToTop />
            <CookieConsent />
          </div>
        </Router>
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;

