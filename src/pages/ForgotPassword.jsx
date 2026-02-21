import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { forgotPassword } from '../redux/actions/userActions';
import { Mail, ArrowRight, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userForgotPassword = useSelector((state) => state.userForgotPassword);
    const { loading, error, success } = userForgotPassword;

    useEffect(() => {
        if (success) {
            navigate('/reset-password', { state: { email } });
        }
    }, [success, navigate, email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            dispatch(forgotPassword(email));
        }
    };

    return (
        <div className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center bg-gray-50 font-sans">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
                    <p className="text-gray-600">Enter your email address and we'll send you an OTP to reset your password.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-2">
                        <AlertCircle size={20} />
                        <span>{error}</span>
                    </div>
                )}

                {success && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 flex items-center gap-2">
                        <CheckCircle size={20} />
                        <span>OTP sent successfully! Redirecting...</span>
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

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-primary-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending OTP...' : 'Send Reset Link'}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm">
                    <Link to="/login" className="font-medium text-gray-600 hover:text-primary-orange flex items-center justify-center gap-2 transition-colors">
                        <ArrowLeft size={16} /> Back to Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
