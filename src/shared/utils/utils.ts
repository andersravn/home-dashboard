import { WeatherEntry, CurrentWeatherEntry } from "@/shared/lib/types";

function hasPop(forecast: WeatherEntry[]) {
  if (forecast.length > 0) {
    const nextHours = forecast.slice(0, 3);
    return nextHours.some((entry) => entry.pop > 0);
  } else {
    return null;
  }
}

export function mightItRain(
  currentWeather: CurrentWeatherEntry,
  forecast: WeatherEntry[]
) {
  return hasPop(forecast) || !!currentWeather.rain;
}
