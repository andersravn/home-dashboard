import { mightItRain } from "@/shared/lib/utils/utils";
import { WeatherEntry, CurrentWeatherEntry } from "@/shared/lib/types";
import { test, expect } from "vitest";

test("should return true if forecast has precipitation probability or current weather has rain", () => {
  const currentWeather: CurrentWeatherEntry = {} as CurrentWeatherEntry;
  const forecast: WeatherEntry[] = [
    { pop: 0 },
    { pop: 0.5 },
    { pop: 0 },
  ] as WeatherEntry[];
  const result = mightItRain(currentWeather, forecast);
  expect(result).toBe(true);
});

test("should return false if forecast has no precipitation probability and current weather has no rain", () => {
  const currentWeather: CurrentWeatherEntry = {} as CurrentWeatherEntry;
  const forecast: WeatherEntry[] = [
    { pop: 0 },
    { pop: 0 },
    { pop: 0 },
  ] as WeatherEntry[];
  const result = mightItRain(currentWeather, forecast);
  expect(result).toBe(false);
});

test("should return true if forecast has precipitation probability and current weather has rain", () => {
  const currentWeather: CurrentWeatherEntry = {
    rain: { "3h": 0.5 },
  } as CurrentWeatherEntry;
  const forecast: WeatherEntry[] = [
    { pop: 0 },
    { pop: 0.5 },
    { pop: 0 },
  ] as WeatherEntry[];
  const result = mightItRain(currentWeather, forecast);
  expect(result).toBe(true);
});

test("should return true if forecast has no precipitation probability and current weather has rain", () => {
  const currentWeather: CurrentWeatherEntry = {
    rain: { "3h": 0.5 },
  } as CurrentWeatherEntry;
  const forecast: WeatherEntry[] = [
    { pop: 0 },
    { pop: 0 },
    { pop: 0 },
  ] as WeatherEntry[];
  const result = mightItRain(currentWeather, forecast);
  expect(result).toBe(true);
});

test("should return true if forecast has precipitation probability or current weather has rain", () => {
  const currentWeather: CurrentWeatherEntry = {} as CurrentWeatherEntry;
  const forecast: WeatherEntry[] = [
    { pop: 0 },
    { pop: 0.5 },
    { pop: 0 },
  ] as WeatherEntry[];
  const result = mightItRain(currentWeather, forecast);
  expect(result).toBe(true);
});
