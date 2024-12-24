import { createContext } from "react";

interface WeatherInformation {
  name: string;

  temperature: number;

  feelsLike: number;

  humidity: number;

  maxTemperature: number;

  minTemperature: number;

  weatherMood: string;

  windSpeed: number;

  country: string;

  sunrise: number;

  clouds: string;

  sunset: number;

  sea_level: number;
}

const ApiFetching = createContext<{
  weatherInformation: WeatherInformation | null;
}>({ weatherInformation: null });

export default ApiFetching;
