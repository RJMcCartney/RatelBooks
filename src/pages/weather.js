import { useState, useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import Head from 'next/head';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchWeatherData();
  }, []);

  return (
    <>
      <Head>
        <title>Weather Forecast - Framework Flow</title>
      </Head>
      <MainLayout>
        <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
        {loading ? (
          <p>Loading weather data...</p>
        ) : weatherData ? (
          <ul>
            {weatherData.map((forecast, index) => (
              <li key={index} className="mb-2">
                <p>Date: {new Date(forecast.date).toLocaleDateString()}</p>
                <p>Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
                <p>Summary: {forecast.summary}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Failed to load weather data.</p>
        )}
      </MainLayout>
    </>
  );
}