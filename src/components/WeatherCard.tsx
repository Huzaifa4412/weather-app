export default function WeatherCard({
  weatherInformation,
}: {
  weatherInformation: {
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
    clouds: string;
    sea_level: number;
  };
}) {
  const {
    name,
    temperature,
    feelsLike,
    humidity,
    maxTemperature,
    minTemperature,
    weatherMood,
    windSpeed,
    country,
    sunrise,
    clouds,
    sunset,
    sea_level,
  } = weatherInformation;

  const temperatureRound = Math.round(temperature);
  const min_temperature = Math.round(minTemperature);
  const max_temperature = Math.round(maxTemperature);
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {name}, {country}
        </h2>
        <p className="text-gray-500">Today</p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {/* <Sun className="w-20 h-20 text-yellow-400 mr-4" /> */}
          {weatherMood === "Clouds" ? (
            <i
              className={`text-[80px] ${"wi wi-cloud"} text-yellow-400 mr-4`}
            ></i>
          ) : weatherMood === "Haze" ? (
            <i
              className={`text-[80px] ${"wi wi-day-haze"} text-yellow-400 mr-4`}
            ></i>
          ) : weatherMood === "Rain" ? (
            <i
              className={`text-[80px] ${"wi wi-rain"} text-yellow-400 mr-4`}
            ></i>
          ) : weatherMood === "Foggy " ? (
            <i
              className={`text-[80px] ${"wi wi-fog"} text-yellow-400 mr-4`}
            ></i>
          ) : weatherMood == "Clear" ? (
            <i
              className={`text-[80px] ${"wi wi-day-sunny"} text-yellow-400 mr-4`}
            ></i>
          ) : weatherMood == "Mist" ? (
            <i
              className={`text-[80px] ${"wi wi-day-fog"} text-yellow-400 mr-4`}
            ></i>
          ) : (
            <i className="text-[80px] wi wi-cloudy text-yellow-400 mr-4"></i>
          )}

          <div>
            <p className="text-6xl font-bold">
              {temperatureRound}
              °C
            </p>
            <p className="text-xl text-gray-500">{weatherMood}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <WeatherDetail
          icon={"wi wi-thermometer"}
          label="Feels Like"
          value={feelsLike.toString()}
        />
        <WeatherDetail
          icon={"wi wi-thermometer-exterior"}
          label="High / Low"
          value={min_temperature + " / " + max_temperature}
        />
        <WeatherDetail
          icon={"wi wi-humidity"}
          label="Humidity"
          value={humidity.toString()}
        />
        <WeatherDetail
          icon={"wi wi-sunrise"}
          label="Sun Rise"
          value={new Date(sunrise * 1000).toLocaleTimeString()}
        />
        <WeatherDetail
          icon={"wi wi-strong-wind"}
          label="Wind Speed"
          value={windSpeed.toString()}
        />
        <WeatherDetail
          icon={"wi wi-sunset"}
          label="Sun Set"
          value={new Date(sunset * 1000).toLocaleTimeString()}
        />
        <WeatherDetail
          icon={"wi wi-cloud"}
          label="clouds"
          value={clouds.toString() + " %"}
        />
        <WeatherDetail
          icon={"wi wi-barometer"}
          label="Sea Level"
          value={(sea_level / 100).toString() + " m"}
        />
      </div>
    </div>
  );
}

function WeatherDetail({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center">
      <i className={`bg-blue-100 p-2 rounded-full mr-3 ${icon}`}></i>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
