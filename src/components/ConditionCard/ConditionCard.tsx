import { ChangeEvent, useEffect, useState } from "react";
import { useSystem } from "../../contexts/SystemContext/useSystem";
import SelectField from "../Elements/SelectField/SelectField";
import { WeatherData } from "../../interface";

export default function ConditionCard() {
  const { condition,weather,city,setCondition  } = useSystem();
  const populateCardData = (e: ChangeEvent<HTMLSelectElement>) => {
    setCondition(
      weather.filter(
        (data: WeatherData) => data.location.city === e.target.value
      )
    );
  };
  return (
    <div
      className="mx-auto w-full max-w-7xl  bg-white  px-4  sm:px-6 lg:px-8"
      data-testid="dashborad-component"
    >
      <h4 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight text-center py-2">
        Current Conditon
      </h4>
      <SelectField
        name="City"
        options={city}
        label="City"
        onChange={populateCardData}
        value={city[0]}
      />
      {condition?.map((data: WeatherData) => (
        
        <div className="gap-x-3 mt-5 pb-3" key={data.id}>
          <p className="mt-3 text-sm font-semibold leading-6 text-gray-900">Temeperature: {data.current_weather.temperature} &deg;C</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-gray-900">Humidity: {data.current_weather.humidity} grams/m3</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-gray-900">Condition: {data.current_weather.weather_condition}</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-gray-900">Wind Speed: {data.current_weather.wind_speed} mph</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-gray-900">Air Quality Index: {data.air_quality.index}</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-gray-900">Air Quality: {data.air_quality.category}</p>
        </div>
        
      ))}
    </div>
  );
}
