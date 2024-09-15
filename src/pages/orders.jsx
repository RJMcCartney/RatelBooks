import { useState, useEffect } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('orders');

    useEffect(() => {
        // Simulating API call to fetch orders
        setTimeout(() => {
            setOrders([
                { id: 1, date: "2023-07-15", total: 89.99, status: "Delivered" },
                { id: 2, date: "2023-06-22", total: 129.99, status: "Shipped" },
                { id: 3, date: "2023-05-30", total: 59.99, status: "Delivered" },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const renderProfile = () => (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" defaultValue="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" defaultValue="john.doe@example.com" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Update Profile</button>
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Settings</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Notification Preferences</label>
                    <div className="mt-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-600" />
                            <span className="ml-2 text-gray-700">Email notifications</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Language</label>
                    <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Save Settings</button>
            </div>
        </div>
    );

    return (
        <>
            <Head>
                <title>Order History - Ratel Books</title>
            </Head>
            <MainLayout>
                <Breadcrumbs />
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-gray-900">My Account</h1>
                    <div className="mb-6">
                        <nav className="flex space-x-4">
                            {['orders', 'profile', 'settings'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-2 rounded-md ${
                                        activeTab === tab
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>
                    {activeTab === 'orders' && (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 text-left">Order ID</th>
                                    <th className="p-2 text-left">Date</th>
                                    <th className="p-2 text-left">Total</th>
                                    <th className="p-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="border-b">
                                        <td className="p-2">{order.id}</td>
                                        <td className="p-2">{order.date}</td>
                                        <td className="p-2">${order.total.toFixed(2)}</td>
                                        <td className="p-2">{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {activeTab === 'profile' && renderProfile()}
                    {activeTab === 'settings' && renderSettings()}
                </div>
            </MainLayout>
        </>
    );
}
