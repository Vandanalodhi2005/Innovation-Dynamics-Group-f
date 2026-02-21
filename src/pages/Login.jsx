import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Mail, Lock, AlertCircle, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdminLogin, setIsAdminLogin] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { setUser } = useAuth();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const [successMessage, setSuccessMessage] = useState('');

    // Parse query params safely
    const queryParams = new URLSearchParams(location.search);
    const redirect = queryParams.get('redirect');
    const messageParam = queryParams.get('message');

    useEffect(() => {
        if (messageParam) {
            setSuccessMessage(messageParam);
        }
    }, [messageParam]);

    useEffect(() => {
        if (userInfo) {
            setUser(userInfo); // Sync AuthContext with Redux
            setSuccessMessage('Logged In Successfully');
            const timer = setTimeout(() => {
                if (redirect) {
                    navigate(`/${redirect}`, { replace: true });
                } else if (userInfo.isAdmin && isAdminLogin) {
                    navigate('/admin/dashboard', { replace: true });
                } else {
                    const from = location.state?.from?.pathname || '/';
                    navigate(from, { replace: true });
                }
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [userInfo, navigate, redirect, isAdminLogin, location.state, setUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        dispatch(login(email, password, isAdminLogin));
    };

    return (
        <div className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center bg-gray-50 font-sans">
            <div className={`w-full max-w-md bg-white p-8 rounded-lg shadow-md border ${isAdminLogin ? 'border-primary-orange shadow-orange-50' : 'border-gray-100'}`}>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {isAdminLogin ? 'Admin Portal' : 'Welcome Back'}
                    </h1>
                    <p className="text-gray-600">
                        {isAdminLogin ? 'Please enter admin credentials' : 'Sign in to your account to continue'}
                    </p>
                </div>

                {successMessage && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 flex items-center gap-2">
                        <Shield size={20} className="text-green-500" />
                        <span>{successMessage}</span>
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-2">
                        <AlertCircle size={20} />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="admin-login"
                                type="checkbox"
                                checked={isAdminLogin}
                                onChange={(e) => setIsAdminLogin(e.target.checked)}
                                className="h-4 w-4 text-primary-orange focus:ring-primary-orange border-gray-300 rounded"
                            />
                            <label htmlFor="admin-login" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                                Login as Admin
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to="/forgot-password" title="Forgot Password" className="font-medium text-primary-orange hover:text-orange-600">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                            ${isAdminLogin
                                ? 'bg-slate-900 hover:bg-slate-800 focus:ring-slate-900'
                                : 'bg-black hover:bg-primary-orange focus:ring-primary-orange'
                            }
                        `}
                    >
                        {loading ? 'Signing in...' : (isAdminLogin ? 'Admin Sign In' : 'Sign In')}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-primary-orange hover:text-orange-600">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
