import { CurrentWeatherEntry, WeatherData } from "@/shared/lib/types";

export const currentWeatherDummyData: CurrentWeatherEntry = {
  coord: {
    lon: 12.3532,
    lat: 55.6045,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "få skyer",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 15.56,
    feels_like: 15.57,
    temp_min: 13.94,
    temp_max: 16.25,
    pressure: 994,
    humidity: 92,
    sea_level: 994,
    grnd_level: 992,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 180,
  },
  clouds: {
    all: 20,
  },
  dt: 1728468255,
  sys: {
    type: 1,
    id: 1588,
    country: "DK",
    sunrise: 1728451766,
    sunset: 1728491149,
  },
  timezone: 7200,
  id: 2619377,
  name: "Ishøj",
  cod: 200,
};

export const forecastDummyData: WeatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1728475200,
      main: {
        temp: 15.63,
        feels_like: 15.52,
        temp_min: 15.63,
        temp_max: 15.77,
        pressure: 994,
        sea_level: 994,
        grnd_level: 991,
        humidity: 87,
        temp_kf: -0.14,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "let regn",
          icon: "10d",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 6.1,
        deg: 209,
        gust: 9.54,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.72,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-09 12:00:00",
    },
    {
      dt: 1728486000,
      main: {
        temp: 14.99,
        feels_like: 14.74,
        temp_min: 14.7,
        temp_max: 14.99,
        pressure: 993,
        sea_level: 993,
        grnd_level: 990,
        humidity: 84,
        temp_kf: 0.29,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "let regn",
          icon: "10d",
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 5.23,
        deg: 201,
        gust: 9.08,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.57,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-09 15:00:00",
    },
    {
      dt: 1728496800,
      main: {
        temp: 13.37,
        feels_like: 13.14,
        temp_min: 13.37,
        temp_max: 13.37,
        pressure: 991,
        sea_level: 991,
        grnd_level: 990,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.18,
        deg: 182,
        gust: 8.45,
      },
      visibility: 10000,
      pop: 0.49,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-09 18:00:00",
    },
    {
      dt: 1728507600,
      main: {
        temp: 13,
        feels_like: 12.84,
        temp_min: 13,
        temp_max: 13,
        pressure: 989,
        sea_level: 989,
        grnd_level: 988,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "let regn",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.9,
        deg: 166,
        gust: 6.61,
      },
      visibility: 10000,
      pop: 0.72,
      rain: {
        "3h": 0.64,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-09 21:00:00",
    },
    {
      dt: 1728518400,
      main: {
        temp: 13.23,
        feels_like: 13.12,
        temp_min: 13.23,
        temp_max: 13.23,
        pressure: 988,
        sea_level: 988,
        grnd_level: 986,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "regn",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.83,
        deg: 162,
        gust: 8.53,
      },
      visibility: 6375,
      pop: 1,
      rain: {
        "3h": 5.22,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-10 00:00:00",
    },
    {
      dt: 1728529200,
      main: {
        temp: 13.19,
        feels_like: 13.12,
        temp_min: 13.19,
        temp_max: 13.19,
        pressure: 986,
        sea_level: 986,
        grnd_level: 984,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "let regn",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.33,
        deg: 178,
        gust: 6.43,
      },
      visibility: 5502,
      pop: 1,
      rain: {
        "3h": 2.63,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-10 03:00:00",
    },
    {
      dt: 1728540000,
      main: {
        temp: 13.27,
        feels_like: 13.24,
        temp_min: 13.27,
        temp_max: 13.27,
        pressure: 984,
        sea_level: 984,
        grnd_level: 982,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "regn",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.72,
        deg: 153,
        gust: 6.29,
      },
      visibility: 1181,
      pop: 1,
      rain: {
        "3h": 5.2,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-10 06:00:00",
    },
    {
      dt: 1728550800,
      main: {
        temp: 13.43,
        feels_like: 13.39,
        temp_min: 13.43,
        temp_max: 13.43,
        pressure: 983,
        sea_level: 983,
        grnd_level: 982,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "regn",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.07,
        deg: 259,
        gust: 2.13,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 4.47,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-10 09:00:00",
    },
    {
      dt: 1728561600,
      main: {
        temp: 13.23,
        feels_like: 13.14,
        temp_min: 13.23,
        temp_max: 13.23,
        pressure: 983,
        sea_level: 983,
        grnd_level: 982,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "regn",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.86,
        deg: 323,
        gust: 8.03,
      },
      visibility: 5597,
      pop: 1,
      rain: {
        "3h": 3.6,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-10 12:00:00",
    },
    {
      dt: 1728572400,
      main: {
        temp: 12.83,
        feels_like: 12.54,
        temp_min: 12.83,
        temp_max: 12.83,
        pressure: 987,
        sea_level: 987,
        grnd_level: 986,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "regn",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.05,
        deg: 292,
        gust: 13.22,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 3.7,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-10 15:00:00",
    },
    {
      dt: 1728583200,
      main: {
        temp: 10.48,
        feels_like: 9.52,
        temp_min: 10.48,
        temp_max: 10.48,
        pressure: 991,
        sea_level: 991,
        grnd_level: 990,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "let regn",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 10.38,
        deg: 278,
        gust: 14.81,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-10 18:00:00",
    },
    {
      dt: 1728594000,
      main: {
        temp: 9.56,
        feels_like: 5.44,
        temp_min: 9.56,
        temp_max: 9.56,
        pressure: 995,
        sea_level: 995,
        grnd_level: 993,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "spredte skyer",
          icon: "03n",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 10.91,
        deg: 270,
        gust: 16.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-10 21:00:00",
    },
    {
      dt: 1728604800,
      main: {
        temp: 9.99,
        feels_like: 5.97,
        temp_min: 9.99,
        temp_max: 9.99,
        pressure: 997,
        sea_level: 997,
        grnd_level: 996,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "spredte skyer",
          icon: "03n",
        },
      ],
      clouds: {
        all: 46,
      },
      wind: {
        speed: 11.15,
        deg: 270,
        gust: 16.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-11 00:00:00",
    },
    {
      dt: 1728615600,
      main: {
        temp: 9.83,
        feels_like: 5.75,
        temp_min: 9.83,
        temp_max: 9.83,
        pressure: 999,
        sea_level: 999,
        grnd_level: 998,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04n",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 11.18,
        deg: 268,
        gust: 16.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-11 03:00:00",
    },
    {
      dt: 1728626400,
      main: {
        temp: 9.84,
        feels_like: 5.92,
        temp_min: 9.84,
        temp_max: 9.84,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1001,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 10.4,
        deg: 272,
        gust: 15.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-11 06:00:00",
    },
    {
      dt: 1728637200,
      main: {
        temp: 10.73,
        feels_like: 9.29,
        temp_min: 10.73,
        temp_max: 10.73,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 9.8,
        deg: 275,
        gust: 14.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-11 09:00:00",
    },
    {
      dt: 1728648000,
      main: {
        temp: 11.3,
        feels_like: 9.95,
        temp_min: 11.3,
        temp_max: 11.3,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "spredt skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 62,
      },
      wind: {
        speed: 9.52,
        deg: 275,
        gust: 12.73,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-11 12:00:00",
    },
    {
      dt: 1728658800,
      main: {
        temp: 11.17,
        feels_like: 9.86,
        temp_min: 11.17,
        temp_max: 11.17,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "spredte skyer",
          icon: "03d",
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 6.84,
        deg: 272,
        gust: 10.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-11 15:00:00",
    },
    {
      dt: 1728669600,
      main: {
        temp: 9.48,
        feels_like: 6.64,
        temp_min: 9.48,
        temp_max: 9.48,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1012,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "spredte skyer",
          icon: "03n",
        },
      ],
      clouds: {
        all: 31,
      },
      wind: {
        speed: 5.82,
        deg: 246,
        gust: 10.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-11 18:00:00",
    },
    {
      dt: 1728680400,
      main: {
        temp: 8.76,
        feels_like: 5.84,
        temp_min: 8.76,
        temp_max: 8.76,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "spredt skydække",
          icon: "04n",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 5.51,
        deg: 242,
        gust: 10.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-11 21:00:00",
    },
    {
      dt: 1728691200,
      main: {
        temp: 8.4,
        feels_like: 5.54,
        temp_min: 8.4,
        temp_max: 8.4,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "spredte skyer",
          icon: "03n",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 5.11,
        deg: 231,
        gust: 10.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-12 00:00:00",
    },
    {
      dt: 1728702000,
      main: {
        temp: 8.44,
        feels_like: 5.66,
        temp_min: 8.44,
        temp_max: 8.44,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1016,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "klar himmel",
          icon: "01n",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 4.95,
        deg: 230,
        gust: 10.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-12 03:00:00",
    },
    {
      dt: 1728712800,
      main: {
        temp: 8.36,
        feels_like: 5.67,
        temp_min: 8.36,
        temp_max: 8.36,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "få skyer",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 4.68,
        deg: 216,
        gust: 8.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-12 06:00:00",
    },
    {
      dt: 1728723600,
      main: {
        temp: 11.23,
        feels_like: 10.18,
        temp_min: 11.23,
        temp_max: 11.23,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "spredt skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 76,
      },
      wind: {
        speed: 5.99,
        deg: 220,
        gust: 7.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-12 09:00:00",
    },
    {
      dt: 1728734400,
      main: {
        temp: 11.8,
        feels_like: 10.55,
        temp_min: 11.8,
        temp_max: 11.8,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "spredt skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 5.76,
        deg: 215,
        gust: 7.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-12 12:00:00",
    },
    {
      dt: 1728745200,
      main: {
        temp: 11.44,
        feels_like: 10.31,
        temp_min: 11.44,
        temp_max: 11.44,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "spredt skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 5.86,
        deg: 179,
        gust: 7.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-12 15:00:00",
    },
    {
      dt: 1728756000,
      main: {
        temp: 10.36,
        feels_like: 9.2,
        temp_min: 10.36,
        temp_max: 10.36,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1016,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "spredt skydække",
          icon: "04n",
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 4.88,
        deg: 175,
        gust: 8.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-12 18:00:00",
    },
    {
      dt: 1728766800,
      main: {
        temp: 11.01,
        feels_like: 9.97,
        temp_min: 11.01,
        temp_max: 11.01,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "få skyer",
          icon: "02n",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 6.65,
        deg: 164,
        gust: 10.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-12 21:00:00",
    },
    {
      dt: 1728777600,
      main: {
        temp: 10.82,
        feels_like: 9.79,
        temp_min: 10.82,
        temp_max: 10.82,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "let regn",
          icon: "10n",
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 7.15,
        deg: 165,
        gust: 11.28,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.11,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-13 00:00:00",
    },
    {
      dt: 1728788400,
      main: {
        temp: 10.46,
        feels_like: 9.39,
        temp_min: 10.46,
        temp_max: 10.46,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "klar himmel",
          icon: "01n",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 6.81,
        deg: 155,
        gust: 10.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-13 03:00:00",
    },
    {
      dt: 1728799200,
      main: {
        temp: 10.32,
        feels_like: 9.31,
        temp_min: 10.32,
        temp_max: 10.32,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "let regn",
          icon: "10d",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 7.18,
        deg: 154,
        gust: 10.33,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-13 06:00:00",
    },
    {
      dt: 1728810000,
      main: {
        temp: 11.61,
        feels_like: 10.58,
        temp_min: 11.61,
        temp_max: 11.61,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 6.65,
        deg: 164,
        gust: 8.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-13 09:00:00",
    },
    {
      dt: 1728820800,
      main: {
        temp: 11.83,
        feels_like: 10.77,
        temp_min: 11.83,
        temp_max: 11.83,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 4.74,
        deg: 152,
        gust: 5.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-13 12:00:00",
    },
    {
      dt: 1728831600,
      main: {
        temp: 11.45,
        feels_like: 10.45,
        temp_min: 11.45,
        temp_max: 11.45,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.4,
        deg: 144,
        gust: 4.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-13 15:00:00",
    },
    {
      dt: 1728842400,
      main: {
        temp: 10.9,
        feels_like: 9.9,
        temp_min: 10.9,
        temp_max: 10.9,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 0.84,
        deg: 227,
        gust: 0.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-13 18:00:00",
    },
    {
      dt: 1728853200,
      main: {
        temp: 9.31,
        feels_like: 7.76,
        temp_min: 9.31,
        temp_max: 9.31,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "få skyer",
          icon: "02n",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 2.87,
        deg: 294,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-13 21:00:00",
    },
    {
      dt: 1728864000,
      main: {
        temp: 8.62,
        feels_like: 6.85,
        temp_min: 8.62,
        temp_max: 8.62,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "få skyer",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 3.01,
        deg: 287,
        gust: 3.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-14 00:00:00",
    },
    {
      dt: 1728874800,
      main: {
        temp: 8.4,
        feels_like: 6.73,
        temp_min: 8.4,
        temp_max: 8.4,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "klar himmel",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 2.78,
        deg: 280,
        gust: 3.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-10-14 03:00:00",
    },
    {
      dt: 1728885600,
      main: {
        temp: 8.32,
        feels_like: 6.18,
        temp_min: 8.32,
        temp_max: 8.32,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "spredte skyer",
          icon: "03d",
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 3.54,
        deg: 279,
        gust: 4.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-14 06:00:00",
    },
    {
      dt: 1728896400,
      main: {
        temp: 10.77,
        feels_like: 9.94,
        temp_min: 10.77,
        temp_max: 10.77,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "skydække",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.69,
        deg: 276,
        gust: 5.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-10-14 09:00:00",
    },
  ],
  city: {
    id: 2619377,
    name: "Ishøj",
    coord: {
      lat: 55.6045,
      lon: 12.3532,
    },
    country: "DK",
    population: 19453,
    timezone: 7200,
    sunrise: 1728451766,
    sunset: 1728491149,
  },
};
