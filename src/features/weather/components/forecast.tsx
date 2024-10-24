import { getForecast } from "@/shared/api/5-day-3-hour-forecast";
import { WeatherData, WeatherEntry } from "@/shared/lib/types";
import { weatherIcons } from "@/shared/utils/icons";
import React from "react";

const Forecast: React.FC = async () => {
  const forecast: WeatherData = await getForecast();
  return (
    <div>
      <h2 className="text-4xl mb-4">Vejr</h2>
      <ul className="flex gap-4 overflow-auto">
        {forecast.list.slice(0, 3).map((day: WeatherEntry) => (
          <li key={day.dt} className="flex gap-2">
            <span className="text-6xl">
              {weatherIcons[day.weather[0]?.icon]}
            </span>
            <div>
              <p className="text-sm">
                Kl.{" "}
                {new Date(day.dt_txt).toLocaleTimeString("da-DK", {
                  hour: "2-digit",
                })}{" "}
                <span className="capitalize text-sm whitespace-nowrap">
                  {day.weather[0]?.description}
                </span>
              </p>
              <p className="whitespace-nowrap">
                🌡️ {Math.round(day.main.temp)} (
                {Math.round(day.main.feels_like)}
                )°C
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
