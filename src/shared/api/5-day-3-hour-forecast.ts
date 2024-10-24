export async function getForecast() {
  const response = await fetch(
    `
      https://api.openweathermap.org/data/2.5/forecast?lat=55.604460&lon=12.353180&appid=26bf168e04ac75fbd553ac60fb8723ee&lang=da&units=metric
      `,
    { next: { revalidate: 180 * 60 } }
  );
  return response.json();
}

export async function getForecastForNext9Hours() {
  const response = await getForecast();
  return response.list.slice(0, 3);
}
