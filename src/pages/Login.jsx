import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Mail, Lock, AlertCircle, Shield } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdminLogin, setIsAdminLogin] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect to where the user came from, or home
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const user = await login(email, password, isAdminLogin);

            if (isAdminLogin) {
                if (user.isAdmin) {
                    navigate('/admin/dashboard', { replace: true });
                } else {
                    setError('Access Denied: This account does not have admin privileges.');
                    setLoading(false); // Make sure to stop loading if we don't navigate away
                    // Ideally we should logout here so they aren't stuck in a 'logged in but denied' state for this specific flow check
                    // but for now showing the error is the primary requirement.
                }
            } else {
                navigate(from, { replace: true });
            }
        } catch (err) {
            setError(err.message || 'Failed to login');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center bg-gray-50 font-sans">
            <div className={`w-full max-w-md bg-white p-8 rounded-lg shadow-md border ${isAdminLogin ? 'border-blue-200 shadow-blue-100' : 'border-gray-100'}`}>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account to continue</p>
                </div>

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
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary-orange focus:ring-primary-orange border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary-orange hover:text-orange-600">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {/* Admin Toggle */}
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <input
                            id="admin-login"
                            type="checkbox"
                            checked={isAdminLogin}
                            onChange={(e) => setIsAdminLogin(e.target.checked)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="admin-login" className="ml-2 flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer select-none">
                            <Shield size={16} className={isAdminLogin ? "text-blue-600" : "text-gray-400"} />
                            Login as Administrator
                        </label>
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

            {/* Demo Credentials Hint */}
            <div className="mt-8 max-w-md w-full bg-blue-50 p-4 rounded-md border border-blue-100 text-sm text-blue-800">
                <p className="font-bold mb-1">Demo Mode:</p>
                <p>Since this is a demo, you can sign up with any email/password, or use these credentials if you've already created them.</p>
                <p className="mt-2 text-xs opacity-75">Admin Default: admin@example.com / admin123</p>
            </div>
        </div>
    );
};

export default Login;
