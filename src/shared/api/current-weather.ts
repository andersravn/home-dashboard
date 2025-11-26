export async function getCurrentWeather() {
  const response = await fetch(
    `
      https://api.openweathermap.org/data/2.5/weather?lat=55.604460&lon=12.353180&appid=${process.env.WEATHER_API_KEY}&lang=da&units=metric
      `,
    { next: { revalidate: 180 * 60 } }
  );
  return response.json();
}
