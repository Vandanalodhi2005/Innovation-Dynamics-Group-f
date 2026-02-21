import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegistrationOTP, verifyRegistrationOTP } from '../redux/actions/userActions';
import { User, Mail, Lock, AlertCircle, KeyRound, CheckCircle2 } from 'lucide-react';

const Signup = () => {
    const [step, setStep] = useState(1); // 1: Details, 2: OTP
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userSendOTP = useSelector((state) => state.userSendOTP);
    const { loading: loadingSendOTP, error: errorSendOTP, success: successSendOTP } = userSendOTP;

    const userVerifyOTP = useSelector((state) => state.userVerifyOTP);
    const { loading: loadingVerifyOTP, error: errorVerifyOTP, success: successVerifyOTP } = userVerifyOTP;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo: userLoginInfo } = userLogin;

    useEffect(() => {
        if (userLoginInfo) {
            navigate('/');
        }
    }, [navigate, userLoginInfo]);

    useEffect(() => {
        if (successSendOTP) {
            setStep(2);
        }
    }, [successSendOTP]);

    useEffect(() => {
        if (successVerifyOTP) {
            navigate('/login?message=Successfully Verified. Please Login.');
        }
    }, [successVerifyOTP, navigate]);

    const handleSendOTP = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        dispatch(sendRegistrationOTP(firstName, lastName, email, password));
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        dispatch(verifyRegistrationOTP(email, otp));
    };

    return (
        <div className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center bg-gray-50 font-sans">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-100">
                {step === 1 ? (
                    <>
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                            <p className="text-gray-600">Join us to access exclusive features</p>
                        </div>

                        {errorSendOTP && (
                            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-2">
                                <AlertCircle size={20} />
                                <span>{errorSendOTP}</span>
                            </div>
                        )}

                        <form onSubmit={handleSendOTP} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User size={20} className="text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm"
                                            placeholder="John"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User size={20} className="text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                            </div>

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
                                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm"
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
                                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock size={20} className="text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loadingSendOTP}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-primary-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange transition-colors disabled:opacity-50"
                            >
                                {loadingSendOTP ? 'Sending OTP...' : 'Next: Verify Email'}
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail size={32} className="text-primary-orange" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Email</h1>
                            <p className="text-gray-600">Enter the 6-digit code sent to <strong>{email}</strong></p>
                        </div>

                        {errorVerifyOTP && (
                            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-2">
                                <AlertCircle size={20} />
                                <span>{errorVerifyOTP}</span>
                            </div>
                        )}

                        <form onSubmit={handleVerifyOTP} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider text-center">Verification Code</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <KeyRound size={20} className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        maxLength="6"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange text-2xl tracking-[0.5em] font-bold text-center transition-all"
                                        placeholder="000000"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loadingVerifyOTP || otp.length < 6}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-primary-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange transition-colors disabled:opacity-50"
                            >
                                {loadingVerifyOTP ? 'Verifying...' : 'Verify & Create Account'}
                            </button>

                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-sm text-gray-500 hover:text-primary-orange transition-colors"
                                >
                                    Change email or details?
                                </button>
                            </div>
                        </form>
                    </>
                )}

                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-primary-orange hover:text-orange-600">
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
