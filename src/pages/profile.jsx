import { useState } from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import Head from "next/head";
import { RiHeartFill, RiSettings4Line } from "react-icons/ri";

export default function Profile() {
    const [activeTab, setActiveTab] = useState('wishlist');

    const tabs = [
        { id: 'wishlist', label: 'Wishlist', icon: <RiHeartFill /> },
        { id: 'settings', label: 'Settings', icon: <RiSettings4Line /> },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'wishlist':
                return <WishlistSection />;
            case 'settings':
                return <SettingsSection />;
            default:
                return null;
        }
    };

    return (
        <>
            <Head>
                <title>User Profile - Ratel Books</title>
            </Head>
            <MainLayout>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">User Profile</h1>
                    <div className="flex mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`flex items-center px-4 py-2 mr-2 rounded-lg ${
                                    activeTab === tab.id ? 'bg-green-800 text-white' : 'bg-gray-200'
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon}
                                <span className="ml-2">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                    {renderTabContent()}
                </div>
            </MainLayout>
        </>
    );
}

function WishlistSection() {
    const wishlist = [
        { id: 1, title: "The Boer War", category: "Anglo-Boer Wars" },
        { id: 2, title: "Zulu Rising", category: "Anglo-Zulu Wars" },
        { id: 3, title: "The Border War", category: "Border War" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlist.map((book) => (
                    <div key={book.id} className="border p-4 rounded-lg">
                        <h3 className="font-semibold">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.category}</p>
                        <button className="mt-2 bg-green-800 text-white px-4 py-2 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SettingsSection() {
    // Keep the existing SettingsSection code here
}
