import { useEffect, useState } from 'react';
import { Search, Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Loader2 } from 'lucide-react';

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: { main: string; description: string }[];
}

const weatherIcons: Record<string, typeof Sun> = {
  Clear: Sun,
  Clouds: Cloud,
  Rain: CloudRain,
  Snow: CloudSnow,
  Drizzle: CloudRain,
  Mist: Wind,
};

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (searchCity?: string) => {
    const target = searchCity ?? city;
    if (!target.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://wttr.in/${encodeURIComponent(target)}?format=j1`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      const current = data.current_condition?.[0];
      if (!current) throw new Error('No data');
      setWeather({
        name: data.nearest_area?.[0]?.areaName?.[0]?.value ?? target,
        main: {
          temp: parseInt(current.temp_C, 10),
          humidity: parseInt(current.humidity, 10),
        },
        wind: { speed: parseInt(current.windspeedKmph, 10) },
        weather: [
          {
            main: current.weatherDesc?.[0]?.value ?? 'Clear',
            description: current.weatherDesc?.[0]?.value ?? '',
          },
        ],
      });
    } catch {
      setError('Could not fetch weather for that city. Try another one.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather('Nairobi');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Icon = weather ? weatherIcons[weather.weather[0].main] ?? Sun : Sun;

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-400">
        Search any city to see current weather conditions using the wttr.in weather service.
      </p>

      {/* Search */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500" />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
            placeholder="Enter city name..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ink-800/60 border border-black/10 text-ink-100 placeholder-ink-500 text-sm focus:outline-none focus:border-accent-500/40 transition-all"
          />
        </div>
        <button
          onClick={() => fetchWeather()}
          disabled={loading}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all disabled:opacity-50"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 text-accent-400 animate-spin" />
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-sm text-red-400">{error}</div>
      )}

      {/* Weather card */}
      {weather && !loading && (
        <div className="rounded-2xl bg-gradient-to-br from-ink-800/80 to-ink-900/80 border border-black/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-display text-xl font-semibold text-ink-100">
                {weather.name}
              </h4>
              <p className="text-sm text-ink-400 capitalize">
                {weather.weather[0].description}
              </p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center">
              <Icon className="w-8 h-8 text-accent-400" />
            </div>
          </div>

          <div className="text-5xl font-display font-bold text-ink-100 mb-4">
            {weather.main.temp}°C
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-ink-800/60 px-4 py-3">
              <Droplets className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-xs text-ink-500">Humidity</div>
                <div className="text-sm font-medium text-ink-200">
                  {weather.main.humidity}%
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-ink-800/60 px-4 py-3">
              <Wind className="w-4 h-4 text-accent-400" />
              <div>
                <div className="text-xs text-ink-500">Wind</div>
                <div className="text-sm font-medium text-ink-200">
                  {weather.wind.speed} km/h
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
