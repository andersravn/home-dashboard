export type WeatherData = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<WeatherEntry>;
  city: City;
};

export type WeatherEntry = {
  dt: number;
  main: MainWeatherInfo;
  weather: Array<WeatherDescription>;
  clouds: CloudsInfo;
  wind: WindInfo;
  visibility: number;
  pop: number;
  rain?: RainInfo;
  sys: SysInfo;
  dt_txt: string;
};

export type CurrentWeatherEntry = Omit<WeatherEntry, "pop" | "dt_txt"> & {
  coord?: {
    lon: number;
    lat: number;
  };
  base: string;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type MainWeatherInfo = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf?: number;
};

export type WeatherType =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Mist"
  | "Smoke"
  | "Haze"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Dust"
  | "Ash"
  | "Squall"
  | "Tornado"
  | "Clear"
  | "Clouds";

export type TemperatureCondition = {
  min?: number;
  max?: number;
};

export type Item = {
  name: string;
  icon: string;
  conditionals: Conditional[];
  temperature?: TemperatureCondition | null;
  weather?: WeatherType[];
  fromDate?: string;
  toDate?: string;
  image?: Image;
};

export type Page = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Conditional = "Date" | "Temperature" | "Weather";

export type WeatherDescription = {
  id: number;
  main: WeatherType;
  description: string;
  icon: string;
};

export type CloudsInfo = {
  all: number;
};

export type WindInfo = {
  speed: number;
  deg: number;
  gust?: number;
};

export type RainInfo = {
  "3h": number;
};

export type SysInfo = {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
};

export type City = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};
