import { useEffect, useState } from "react";
import { SystemContext } from "./SystemContext";
import { PromiseErrorType,APIResponseType, WeatherData } from "../../interface";

export const SystemProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<PromiseErrorType | null>(null);
  const [apiResponse, setApiResponse] = useState<APIResponseType| null>(null);
  const [city, setCity] = useState<string[]>([]);
  const [condition, setCondition] = useState<WeatherData[]>();
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  useEffect(()=>{
    const cityArr: string[] = [];
    const weatherArr: WeatherData[] = [];
    const initalWeather: WeatherData[] = [];
    if (apiResponse && apiResponse?.weathers.length > 0) {
      apiResponse?.weathers.map((data: WeatherData) => {
        cityArr.push(data.location.city);
      });
      setCity(cityArr);
      apiResponse?.weathers.map((data: WeatherData) => {
        if (initalWeather.length == 0) {
          initalWeather.push(data)
        }
        weatherArr.push(data);
      });
      setWeather(weatherArr);
    }
    setCondition(initalWeather);
  },[apiResponse])

  return (
    <SystemContext.Provider
      value={{
        error,
        setError,
        apiResponse,
        setApiResponse,
        city,
        condition,
        weather,
        setCondition,
        setCategory,
        category
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
