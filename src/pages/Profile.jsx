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
        <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-24 font-sans text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-end gap-6 mb-12">
                        <h1 className="text-5xl font-extrabold uppercase tracking-tight">Profile</h1>
                        <div className="h-1 flex-1 bg-black mb-2 opacity-5"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Sidebar / User Info Card */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-10 rounded-sm shadow-2xl border-t-8 border-[#024ad8] flex flex-col items-center text-center">
                                <div className="w-28 h-28 bg-[#F8F9FA] rounded-sm border-2 border-gray-50 flex items-center justify-center text-[#024ad8] text-4xl font-extrabold mb-6 shadow-inner uppercase">
                                    {user.name?.charAt(0) || <User size={48} />}
                                </div>
                                <h2 className="text-2xl font-extrabold mb-2 uppercase tracking-tight leading-tight">{user.name}</h2>
                                <p className="text-gray-400 text-[11px] font-bold mb-8 uppercase tracking-[0.2em]">{user.email}</p>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-red-50 text-red-600 rounded-sm font-extrabold uppercase tracking-[0.3em] text-[10px] hover:bg-red-50 transition-all"
                                >
                                    <LogOut size={16} /> Terminate Session
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-50">
                                <div className="flex justify-between items-start mb-8">
                                    <h3 className="font-extrabold flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-400">
                                        <MapPin size={18} className="text-[#024ad8]" /> Physical Coordinates
                                    </h3>
                                    {!isEditingAddress && (
                                        <button onClick={handleEditAddress} className="text-[#024ad8] text-[10px] font-extrabold uppercase tracking-widest hover:underline">Revise</button>
                                    )}
                                </div>

                                {isEditingAddress ? (
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            value={editAddressForm.street}
                                            onChange={e => setEditAddressForm({ ...editAddressForm, street: e.target.value })}
                                            className="w-full border-2 border-gray-50 rounded-sm p-3 text-[11px] font-bold uppercase tracking-widest focus:border-[#024ad8] outline-none transition-all" placeholder="STREET ADDRESS"
                                        />
                                        <input
                                            type="text"
                                            value={editAddressForm.city}
                                            onChange={e => setEditAddressForm({ ...editAddressForm, city: e.target.value })}
                                            className="w-full border-2 border-gray-50 rounded-sm p-3 text-[11px] font-bold uppercase tracking-widest focus:border-[#024ad8] outline-none transition-all" placeholder="CITY"
                                        />
                                        <div className="flex gap-4">
                                            <input
                                                type="text"
                                                value={editAddressForm.zip}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, zip: e.target.value })}
                                                className="w-1/2 border-2 border-gray-50 rounded-sm p-3 text-[11px] font-bold uppercase tracking-widest focus:border-[#024ad8] outline-none transition-all" placeholder="ZIP"
                                            />
                                            <input
                                                type="text"
                                                value={editAddressForm.country}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, country: e.target.value })}
                                                className="w-1/2 border-2 border-gray-50 rounded-sm p-3 text-[11px] font-bold uppercase tracking-widest focus:border-[#024ad8] outline-none transition-all" placeholder="COUNTRY"
                                            />
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <button onClick={handleSaveAddress} className="flex-1 bg-black text-white py-3 rounded-sm text-[10px] font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#024ad8] transition-all"><Save size={14} /> Commit</button>
                                            <button onClick={handleCancelAddress} className="flex-1 bg-gray-100 text-gray-500 py-3 rounded-sm text-[10px] font-extrabold uppercase tracking-widest hover:bg-gray-200 transition-all">Abort</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-gray-600 text-[11px] font-bold uppercase tracking-widest leading-loose">
                                        <p>{address.street}</p>
                                        <p>{address.city}, {address.zip}</p>
                                        <p>{address.country}</p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-black text-white p-8 rounded-sm shadow-xl border-l-8 border-[#024ad8]">
                                <h3 className="font-extrabold flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6">
                                    <Shield size={18} className="text-[#024ad8]" /> Security Protocol
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Level</span>
                                        <span className="text-green-500 text-[10px] font-extrabold uppercase tracking-[0.2em]">High Fidelity</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">2FA Status</span>
                                        <span className="text-[#024ad8] text-[10px] font-extrabold uppercase tracking-[0.2em]">Operational</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Order History */}
                            <div className="bg-white rounded-sm shadow-2xl border border-gray-50 overflow-hidden">
                                <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-[#F8F9FA]/50">
                                    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.4em] flex items-center gap-4">
                                        <Package size={20} className="text-[#024ad8]" /> Logistical Activity
                                    </h3>
                                    {orders && orders.length > 2 && (
                                        <button
                                            onClick={() => setShowAllOrders(!showAllOrders)}
                                            className="text-[#024ad8] text-[10px] font-extrabold uppercase tracking-[0.3em] hover:underline flex items-center gap-2"
                                        >
                                            {showAllOrders ? <>Contract <ChevronUp size={16} /></> : <>Expand Logs <ChevronDown size={16} /></>}
                                        </button>
                                    )}
                                </div>

                                <div className="divide-y divide-gray-50">
                                    {loadingOrders ? (
                                        <div className="p-20 text-center text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">Retrieving Metadata...</div>
                                    ) : errorOrders ? (
                                        <div className="p-20 text-center text-red-500 font-bold uppercase tracking-[0.3em] text-[10px]">{errorOrders}</div>
                                    ) : orders && orders.length === 0 ? (
                                        <div className="p-20 text-center">
                                            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Zero Records Found</p>
                                            <Link to="/shop" className="inline-block bg-black text-white px-8 py-4 rounded-sm font-extrabold uppercase tracking-[0.3em] text-[10px] hover:bg-[#024ad8] transition-all">Initialize Procurement</Link>
                                        </div>
                                    ) : (
                                        displayedOrders.map(order => (
                                            <div key={order._id} className="p-8 flex items-center justify-between hover:bg-[#F8F9FA] transition-all group">
                                                <div className="space-y-2">
                                                    <p className="font-extrabold text-sm block uppercase tracking-tight group-hover:text-[#024ad8] transition-colors">ID: {order._id.slice(-8).toUpperCase()}</p>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{new Date(order.createdAt).toLocaleDateString()}</p>
                                                </div>
                                                <div className="text-center">
                                                    <span className={`inline-block px-4 py-1.5 rounded-sm text-[9px] font-extrabold uppercase tracking-[0.2em] border-2 ${order.isDelivered ? 'bg-green-50 text-green-700 border-green-100' :
                                                        order.isPaid ? 'bg-blue-50 text-[#024ad8] border-blue-100' :
                                                            'bg-gray-50 text-gray-500 border-gray-100'
                                                        }`}>
                                                        {order.isDelivered ? 'Fulfilled' : order.isPaid ? 'Processing' : 'Pending'}
                                                    </span>
                                                </div>
                                                <div className="text-right flex items-center gap-8">
                                                    <div className="hidden sm:block space-y-1">
                                                        <p className="font-extrabold text-sm uppercase tracking-tight">${order.totalPrice.toFixed(2)}</p>
                                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{order.orderItems.length} Assets</p>
                                                    </div>
                                                    <Link to={`/order/${order._id}`} className="bg-gray-50 p-3 rounded-sm text-gray-400 hover:bg-[#024ad8] hover:text-white transition-all">
                                                        <Plus size={18} />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white rounded-sm shadow-xl border border-gray-50 overflow-hidden">
                                <div className="px-8 py-6 border-b border-gray-100 bg-[#F8F9FA]/50">
                                    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.4em] flex items-center gap-4">
                                        <CreditCard size={20} className="text-[#024ad8]" /> Fiscal Infrastructure
                                    </h3>
                                </div>
                                <div className="p-8 space-y-6">
                                    {cards.map(card => (
                                        <div key={card.id} className="flex items-center gap-6 p-5 border-2 border-gray-50 rounded-sm group hover:border-[#024ad8]/20 transition-all">
                                            <div className="w-14 h-9 bg-black rounded-sm relative overflow-hidden flex items-center justify-center">
                                                <div className="w-4 h-4 bg-[#024ad8] rounded-full opacity-50 -ml-2"></div>
                                                <div className="w-4 h-4 bg-white/20 rounded-full -mr-2"></div>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="font-extrabold text-[11px] uppercase tracking-[0.3em] block">Ending in {card.last4}</span>
                                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Expiration: {card.expiry}</span>
                                            </div>
                                            <div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                    ))}

                                    {isAddingCard ? (
                                        <div className="mt-8 p-8 bg-[#F8F9FA] rounded-sm border-2 border-gray-100 animate-fadeIn">
                                            <div className="flex justify-between items-center mb-8">
                                                <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em]">Integrate New Asset</h4>
                                                <button onClick={() => setIsAddingCard(false)} className="text-gray-400 hover:text-red-500 transition-colors"><X size={20} /></button>
                                            </div>
                                            <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    placeholder="CARD NUMBER"
                                                    className="w-full border-2 border-white rounded-sm p-4 text-[11px] font-bold uppercase tracking-widest focus:border-[#024ad8] outline-none transition-all shadow-sm"
                                                    value={newCard.number}
                                                    onChange={e => setNewCard({ ...newCard, number: e.target.value })}
                                                    maxLength="16"
                                                />
                                                <div className="flex gap-4">
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        className="w-1/2 border-2 border-white rounded-sm p-4 text-[11px] font-bold uppercase tracking-widest focus:border-[#024ad8] outline-none transition-all shadow-sm"
                                                        value={newCard.expiry}
                                                        onChange={e => setNewCard({ ...newCard, expiry: e.target.value })}
                                                        maxLength="5"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="CVV"
                                                        className="w-1/2 border-2 border-white rounded-sm p-4 text-[11px] font-bold uppercase tracking-widest focus:border-[#024ad8] outline-none transition-all shadow-sm"
                                                        value={newCard.cvv}
                                                        onChange={e => setNewCard({ ...newCard, cvv: e.target.value })}
                                                        maxLength="3"
                                                    />
                                                </div>
                                                <button onClick={handleAddCard} className="w-full bg-black text-white py-5 rounded-sm text-[10px] font-extrabold uppercase tracking-[0.4em] mt-4 hover:bg-[#024ad8] transition-all shadow-xl shadow-black/10">
                                                    Finalize Integration
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setIsAddingCard(true)}
                                            className="mt-4 text-[#024ad8] text-[10px] font-extrabold uppercase tracking-[0.3em] hover:underline flex items-center gap-3 transition-all"
                                        >
                                            <div className="bg-blue-50 p-2 rounded-sm"><Plus size={16} /></div> Register New Asset
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
