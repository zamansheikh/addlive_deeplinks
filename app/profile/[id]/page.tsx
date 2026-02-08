'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProfilePage() {
    const params = useParams();
    const userId = params.id as string;
    const [status, setStatus] = useState('Redirecting...');

    useEffect(() => {
        if (userId) {
            // 1. Try to open the app
            window.location.href = `https://zigoliveapp.xyz/profile/${userId}`;

            // 2. Fallback to store if app doesn't open (simplified check)
            const timer = setTimeout(() => {
                setStatus('App not installed? Redirecting to store...');
                // Replace with your actual store links
                // window.location.href = 'https://play.google.com/store/apps/details?id=com.adda.adda'; 
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [userId]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4 text-blue-600">Adda App</h1>
                <p className="text-gray-700 mb-6">
                    Opening profile for user ID: <span className="font-mono font-bold">{userId}</span>
                </p>
                <p className="text-sm text-gray-500">{status}</p>

                <div className="mt-8">
                    <a
                        href={`https://play.google.com/store/apps/details?id=com.adda.adda`}
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                        Download Adda App
                    </a>
                </div>
            </div>
        </div>
    );
}
