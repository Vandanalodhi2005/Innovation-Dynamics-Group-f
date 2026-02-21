import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutAction } from '../redux/actions/userActions';
import { listMyOrders } from '../redux/actions/orderActions';
import { User, Package, LogOut, MapPin, CreditCard, ChevronDown, ChevronUp, Plus, X, Save, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo: user } = userLogin;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    // State for Features
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [address, setAddress] = useState({
        street: user?.address || '123 Innovation Drive',
        city: 'Tech City',
        zip: '90210',
        country: 'United States'
    });

    // Edit Address Form State
    const [editAddressForm, setEditAddressForm] = useState(address);

    const [showAllOrders, setShowAllOrders] = useState(false);

    const [isAddingCard, setIsAddingCard] = useState(false);
    const [cards, setCards] = useState([
        { id: 1, last4: '4242', expiry: '12/28' }
    ]);
    const [newCard, setNewCard] = useState({ number: '', expiry: '', cvv: '' });

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(listMyOrders());
        }
    }, [user, navigate, dispatch]);

    if (!user) return null;

    const handleLogout = () => {
        logout(); // AuthContext logout
        dispatch(logoutAction()); // Redux logout
        navigate('/');
    };

    // Address Handlers
    const handleEditAddress = () => {
        setEditAddressForm(address);
        setIsEditingAddress(true);
    };

    const handleSaveAddress = () => {
        setAddress(editAddressForm);
        setIsEditingAddress(false);
    };

    const handleCancelAddress = () => {
        setIsEditingAddress(false);
    };

    // Card Handlers
    const handleAddCard = () => {
        if (newCard.number && newCard.expiry) {
            setCards([...cards, {
                id: Date.now(),
                last4: newCard.number.slice(-4) || '0000',
                expiry: newCard.expiry
            }]);
            setNewCard({ number: '', expiry: '', cvv: '' });
            setIsAddingCard(false);
        }
    };

    const displayedOrders = showAllOrders ? orders : orders?.slice(0, 2);

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12 font-sans text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">My Profile</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Sidebar / User Info Card */}
                        <div className="col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-primary-orange text-3xl font-bold mb-4">
                                    {user.name?.charAt(0) || <User size={40} />}
                                </div>
                                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                                <p className="text-gray-500 text-sm mb-6">{user.email}</p>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                                >
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>

                            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400">
                                        <MapPin size={18} /> Default Address
                                    </h3>
                                    {!isEditingAddress && (
                                        <button onClick={handleEditAddress} className="text-primary-orange text-sm font-bold hover:underline">Edit</button>
                                    )}
                                </div>

                                {isEditingAddress ? (
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            value={editAddressForm.street}
                                            onChange={e => setEditAddressForm({ ...editAddressForm, street: e.target.value })}
                                            className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="Street"
                                        />
                                        <input
                                            type="text"
                                            value={editAddressForm.city}
                                            onChange={e => setEditAddressForm({ ...editAddressForm, city: e.target.value })}
                                            className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="City"
                                        />
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={editAddressForm.zip}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, zip: e.target.value })}
                                                className="w-1/2 border border-gray-300 rounded p-2 text-sm" placeholder="ZIP"
                                            />
                                            <input
                                                type="text"
                                                value={editAddressForm.country}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, country: e.target.value })}
                                                className="w-1/2 border border-gray-300 rounded p-2 text-sm" placeholder="Country"
                                            />
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <button onClick={handleSaveAddress} className="flex-1 bg-black text-white py-1.5 rounded text-sm font-bold flex items-center justify-center gap-1"><Save size={14} /> Save</button>
                                            <button onClick={handleCancelAddress} className="flex-1 bg-gray-100 text-gray-700 py-1.5 rounded text-sm font-bold">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-600 text-sm">
                                        {address.street}<br />
                                        {address.city}, {address.zip}<br />
                                        {address.country}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400 mb-4">
                                    <Shield size={18} /> Account Security
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500">Security Level: <span className="text-green-600 font-bold">High</span></p>
                                    <p className="text-xs text-gray-500">Two-Factor: <span className="text-gray-800 font-bold">Active</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="col-span-1 md:col-span-2 space-y-6">

                            {/* Order History */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                    <h3 className="font-bold flex items-center gap-2">
                                        <Package size={18} className="text-gray-400" /> Recent Orders
                                    </h3>
                                    {orders && orders.length > 2 && (
                                        <button
                                            onClick={() => setShowAllOrders(!showAllOrders)}
                                            className="text-primary-orange text-sm font-bold hover:underline flex items-center gap-1"
                                        >
                                            {showAllOrders ? <>Show Less <ChevronUp size={14} /></> : <>View All <ChevronDown size={14} /></>}
                                        </button>
                                    )}
                                </div>

                                <div className="divide-y divide-gray-100">
                                    {loadingOrders ? (
                                        <div className="p-12 text-center text-gray-500">Loading orders...</div>
                                    ) : errorOrders ? (
                                        <div className="p-12 text-center text-red-500">{errorOrders}</div>
                                    ) : orders && orders.length === 0 ? (
                                        <div className="p-12 text-center">
                                            <p className="text-gray-500 mb-4">No orders found.</p>
                                            <Link to="/shop" className="text-primary-orange font-bold hover:underline">Start Shopping</Link>
                                        </div>
                                    ) : (
                                        displayedOrders.map(order => (
                                            <div key={order._id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                                <div>
                                                    <p className="font-bold text-sm block mb-1">#{order._id.slice(-8).toUpperCase()}</p>
                                                    <span className="text-xs text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</span>
                                                </div>
                                                <div className="text-center">
                                                    <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold uppercase ${order.isDelivered ? 'bg-green-100 text-green-800' :
                                                        order.isPaid ? 'bg-blue-100 text-blue-800' :
                                                            'bg-gray-100 text-gray-800'
                                                        }`}>
                                                        {order.isDelivered ? 'Delivered' : order.isPaid ? 'Processing' : 'Pending'}
                                                    </span>
                                                </div>
                                                <div className="text-right flex items-center gap-4">
                                                    <div className="hidden sm:block">
                                                        <p className="font-bold text-sm">${order.totalPrice.toFixed(2)}</p>
                                                        <p className="text-[10px] text-gray-500">{order.orderItems.length} items</p>
                                                    </div>
                                                    <Link to={`/order/${order._id}`} className="p-2 text-gray-400 hover:text-primary-orange transition-colors">
                                                        <Plus size={18} />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <h3 className="font-bold flex items-center gap-2">
                                        <CreditCard size={18} className="text-gray-400" /> Payment Methods
                                    </h3>
                                </div>
                                <div className="p-6 space-y-3">
                                    {cards.map(card => (
                                        <div key={card.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-md">
                                            <div className="w-10 h-6 bg-gray-200 rounded relative overflow-hidden">
                                                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gray-400"></div>
                                            </div>
                                            <span className="font-medium text-sm">•••• •••• •••• {card.last4}</span>
                                            <span className="text-xs text-gray-500 ml-auto">Expires {card.expiry}</span>
                                        </div>
                                    ))}

                                    {isAddingCard ? (
                                        <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                                            <div className="flex justify-between items-center mb-3">
                                                <h4 className="text-sm font-bold">Add New Card</h4>
                                                <button onClick={() => setIsAddingCard(false)} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
                                            </div>
                                            <div className="space-y-3">
                                                <input
                                                    type="text"
                                                    placeholder="Card Number"
                                                    className="w-full border border-gray-300 rounded p-2 text-sm"
                                                    value={newCard.number}
                                                    onChange={e => setNewCard({ ...newCard, number: e.target.value })}
                                                    maxLength="16"
                                                />
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        className="w-1/2 border border-gray-300 rounded p-2 text-sm"
                                                        value={newCard.expiry}
                                                        onChange={e => setNewCard({ ...newCard, expiry: e.target.value })}
                                                        maxLength="5"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="CVV"
                                                        className="w-1/2 border border-gray-300 rounded p-2 text-sm"
                                                        value={newCard.cvv}
                                                        onChange={e => setNewCard({ ...newCard, cvv: e.target.value })}
                                                        maxLength="3"
                                                    />
                                                </div>
                                                <button onClick={handleAddCard} className="w-full bg-black text-white py-2 rounded text-sm font-bold mt-2 hover:bg-gray-800">
                                                    Save Card
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setIsAddingCard(true)}
                                            className="mt-2 text-primary-orange text-sm font-bold hover:underline flex items-center gap-1"
                                        >
                                            <Plus size={16} /> Add New Card
                                        </button>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
