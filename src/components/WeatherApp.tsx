import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherApi from "./WeatherApi";
export default function WeatherApp() {
  const [value, setValue] = useState("karachi");
  const searchValue = (value: string) => {
    setValue(value);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-700 p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-6xl font-bold text-white text-center mb-8">
          Weather App
        </h1>
        <SearchBar searchValue={searchValue} />
        <WeatherApi searchValue={value} />
      </div>
    </div>
  );
}
