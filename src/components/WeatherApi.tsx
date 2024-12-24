import { useCallback, useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { PropagateLoader } from "react-spinners";
import ApiFetching from "../context/apiFetching";

const WeatherApi = ({ searchValue }: { searchValue: string }) => {
  const [loading, setLoading] = useState<boolean>(true);

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

  const getData = useCallback(async () => {
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
      await setLoading(false);
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
  }, [searchValue]);
  useEffect(() => {
    getData();
  }, [searchValue, getData]);

  return (
    <>
      {!weatherInformation || loading ? (
        <div className="absolute top-[60%] left-0 w-full  flex items-center justify-center ">
          <PropagateLoader
            color="#F7f7f7f7"
            cssOverride={{}}
            size={18}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <ApiFetching.Provider value={{ weatherInformation }}>
          <WeatherCard />
        </ApiFetching.Provider>
      )}
    </>
  );
};

export default WeatherApi;
