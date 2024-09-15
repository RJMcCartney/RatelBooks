import { useState, useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import Head from 'next/head';

export default function HealthCheck() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHealthData() {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        setHealthData(data);
      } catch (error) {
        console.error('Failed to fetch health data:', error);
        setHealthData({ status: 'error', message: 'Failed to fetch health data' });
      } finally {
        setLoading(false);
      }
    }
    fetchHealthData();
  }, []);

  return (
    <>
      <Head>
        <title>API Health Check - Framework Flow</title>
      </Head>
      <MainLayout>
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-6 text-green-800">API Health Check</h1>
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg text-green-800"></span>
            </div>
          ) : healthData ? (
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 rounded-full mr-2 ${healthData.status === 'error' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <h2 className="text-xl font-semibold">Status: {healthData.status === 'error' ? 'Error' : 'Healthy'}</h2>
              </div>
              {healthData.status === 'error' ? (
                <p className="text-red-600">{healthData.message}</p>
              ) : (
                <div>
                  <p className="mb-2">API is responding correctly.</p>
                  <p className="text-sm text-gray-600">Last checked: {new Date().toLocaleString()}</p>
                </div>
              )}
            </div>
          ) : (
            <p className="text-red-600">Failed to load health data.</p>
          )}
        </div>
      </MainLayout>
    </>
  );
}