import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Printers from './components/Printers';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import TrackOrder from './pages/TrackOrder';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import DoNotSell from './pages/DoNotSell';
import Accessibility from './pages/Accessibility';
import BuyingGuide from './pages/BuyingGuide';
import Resources from './pages/Resources';
import ReturnExchange from './pages/ReturnExchange';
// Admin Components
import AdminLayout from './components/admin/Layout/AdminLayout';
import AdminDashboard from './components/admin/Pages/AdminDashboard';
import AdminCategories from './components/admin/Pages/AdminCategories';
import AdminProducts from './components/admin/Pages/AdminProducts';
import AdminCustomers from './components/admin/Pages/AdminCustomers';
import AdminOrders from './components/admin/Pages/AdminOrders';
import AdminChat from './components/admin/Pages/AdminChat';
import AdminAnalytics from './components/admin/Pages/AdminAnalytics';
import AdminSettings from './components/admin/Pages/AdminSettings';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow">
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
                <Route path="/admin" element={<AdminLayout />}>
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
            </main>
            <Footer />
          </div>
        </Router>
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;
