import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherApi = ({ searchValue }: { searchValue: string }) => {
  const [weatherInformation, setWeatherInformation] = useState<
    | {
        name: string;
        temperature: number;
        feelsLike: number;
        humidity: number;
        minTemperature: number;
        maxTemperature: number;
        weatherMood: string;
        windSpeed: number;
        country: string;
        sunrise: number;
        sunset: number;
        sea_level: number;
        clouds: string;
      }
    | undefined
  >(undefined);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${searchValue.toLowerCase()}&appid=4190189464944ecf9995818b0d3e3854`
      );
      if (response.status !== 200) {
        throw new Error(
          `Data not found ${response.status}--${response.statusText}`
        );
      }
      const weatherData = await response.json();
      const { name } = weatherData;
      const { temp, feels_like, humidity, temp_min, temp_max, sea_level } =
        weatherData.main;
      const { main: weatherMood } = weatherData.weather[0];
      const { speed } = weatherData.wind;
      const { country, sunrise, sunset } = weatherData.sys;
      const { all: clouds } = weatherData.clouds;

      const weatherInfo = {
        name,
        temperature: temp,
        feelsLike: feels_like,
        humidity,
        minTemperature: temp_min,
        maxTemperature: temp_max,
        weatherMood,
        windSpeed: speed,
        country,
        sunrise,
        sunset,
        sea_level,
        clouds,
      };

      setWeatherInformation(weatherInfo);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      {weatherInformation ? (
        <WeatherCard weatherInformation={weatherInformation} />
      ) : (
        <h2 className="text-3xl text-center font-bold text-white">
          No <span className="text-yellow-400 text-4xl ">Data</span> Fond 🤷‍♂️ try
          again
        </h2>
      )}
    </>
  );
};

export default WeatherApi;
