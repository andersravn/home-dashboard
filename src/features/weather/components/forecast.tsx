import { getForecast } from "@/shared/api/5-day-3-hour-forecast";
import { WeatherData, WeatherEntry } from "@/shared/lib/types";
import { weatherIcons } from "@/shared/utils/icons";
import React from "react";

const Forecast: React.FC = async () => {
  const forecast: WeatherData = await getForecast();
  const getHours = (date: string) =>
    new Date(date).toLocaleTimeString("da-DK", {
      hour: "2-digit",
    });

  const getIcon = (hour: string) => {
    if (hour === "09") {
      return "🚸";
    }
    if (hour === "12") {
      return "🛝";
    }
    if (hour === "15") {
      return "🏠";
    }
    return "";
  };

  const getFeelsLikeIcon = (feelsLike: number) => {
    if (feelsLike <= 5) {
      return "🥶";
    }
    if (feelsLike > 20) {
      return "🥵";
    }
    return "🌡️";
  };
  return (
    <div>
      <ul className="flex gap-4 overflow-auto pb-4">
        {forecast.list.slice(0, 3).map((day: WeatherEntry) => (
          <li key={day.dt} className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                {weatherIcons[day.weather[0]?.icon]}
              </div>
              <div className="text-4xl">{getIcon(getHours(day.dt_txt))}</div>
            </div>
            <div>
              <p className="text-sm">
                Kl. {getHours(day.dt_txt)}{" "}
                <span className="capitalize text-sm whitespace-nowrap">
                  {day.weather[0]?.description}
                </span>
              </p>
              <p className="whitespace-nowrap">
                {getFeelsLikeIcon(day.main.feels_like)}{" "}
                {Math.round(day.main.temp)} ({Math.round(day.main.feels_like)}
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
