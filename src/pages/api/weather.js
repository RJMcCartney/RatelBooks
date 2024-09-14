export default async function handler(req, res) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://your-azure-app-name.azurewebsites.net';
    try {
      const response = await fetch(`${apiUrl}/WeatherForecast`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
