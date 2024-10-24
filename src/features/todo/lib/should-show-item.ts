import { getForecastForNext9Hours } from "@/shared/api/5-day-3-hour-forecast";
import { Item, WeatherEntry } from "@/shared/lib/types";

export async function shouldShowItem(item: Item) {
  for (const conditional of item.conditionals) {
    if (conditional === "Date") {
      if (!shouldShowItemBasedOnDate(item)) {
        return false;
      }
    } else if (conditional === "Temperature") {
      const weatherEntries: WeatherEntry[] = await getForecastForNext9Hours();
      if (!shouldShowItemBasedOnTemperature(item, weatherEntries)) {
        return false;
      }
    } else if (conditional === "Weather") {
      const weatherEntries: WeatherEntry[] = await getForecastForNext9Hours();
      if (!shouldShowItemBasedOnWeather(item, weatherEntries)) {
        return false;
      }
    }
  }

  return true;
}

function shouldShowItemBasedOnDate(item: Item) {
  if (!item.fromDate || !item.toDate) {
    throw new Error("Missing fromDate or toDate");
  }
  const currentDate = new Date();
  const fromDate = new Date(item.fromDate);
  const toDate = new Date(item.toDate);
  return currentDate >= fromDate && currentDate <= toDate;
}

function shouldShowItemBasedOnTemperature(
  item: Item,
  weatherEntries: WeatherEntry[]
) {
  for (const weatherEntry of weatherEntries) {
    if (isTemperatureInRange(item, weatherEntry)) {
      return true;
    }
  }
  return false;
}

function shouldShowItemBasedOnWeather(
  item: Item,
  weatherEntries: WeatherEntry[]
) {
  for (const weatherEntry of weatherEntries) {
    if (isWeatherInList(item, weatherEntry)) {
      return true;
    }
  }
  return false;
}

function isWeatherInList(item: Item, weatherEntry: WeatherEntry) {
  if (!item.weather) {
    throw new Error("Missing weather");
  }
  return item.weather.some((weatherType) =>
    weatherEntry.weather.some((entry) => entry.main === weatherType)
  );
}

function isTemperatureInRange(item: Item, weatherEntry: WeatherEntry) {
  if (!item.temperature) {
    throw new Error("Missing temperature");
  }
  return (
    (!item.temperature.min ||
      weatherEntry.main.feels_like >= item.temperature.min) &&
    (!item.temperature.max ||
      weatherEntry.main.feels_like <= item.temperature.max)
  );
}
