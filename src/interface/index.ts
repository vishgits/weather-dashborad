interface PromiseErrorType {
  message?: string;
  code?: number;
}
interface fallbackMessageType {
  heading?: string;
  description?: string;
}

interface APIResponseType {
  weathers:WeatherData[];
}

interface ApiResponse {
  type?: string;
 
  originalResponse?: Response;
  
  status?: number;
}

interface ApiRequest {
  perPage: number;
  data: string;
  pageCounter: number;
}

interface axiosRequestType {
  getRespose: (arg0: APIResponseType) => void;
  finished: () => void;
  getError: (arg0: PromiseErrorType) => void;
}

interface forecastType {
  condition: string;
  date: string;
  icon: string;
  max_temp: number;
  min_temp: number;
}


interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Weather {
  humidity: number;
  icon: string;
  temperature: number;
  weather_condition: string;
  wind_speed: number;
}



interface AirQuality {
  category: string;
  index: number;
}

interface Location {
  city: string;
  coordinates: Coordinates;
  country: string;
}

interface WeatherData {
  id: number;
  location: Location;
  current_weather: Weather;
  air_quality: AirQuality;
  forecast: forecastType[];
}

interface seriesTypes {
  data: number[];
  name: string;

}

 

export type {
  
  fallbackMessageType,
  PromiseErrorType,
  APIResponseType,
  ApiResponse,
  ApiRequest,
  axiosRequestType,
  forecastType,
  WeatherData,
  Location,
  seriesTypes
};
