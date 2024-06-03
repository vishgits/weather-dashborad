import { createContext, Dispatch, SetStateAction } from "react";

import { PromiseErrorType,APIResponseType, WeatherData } from "../../interface";

interface SystemContextValue {
  setError: Dispatch<SetStateAction<PromiseErrorType | null>>;
  error: PromiseErrorType | null;
  setApiResponse: Dispatch<SetStateAction<APIResponseType|null>>;
  apiResponse: APIResponseType | null;
  city:string[],
  condition:WeatherData[] | undefined,
  weather:WeatherData[],
  setCondition: Dispatch<SetStateAction<WeatherData[] | undefined>>;
  category:string[],
  setCategory: Dispatch<SetStateAction<string[]>>;
}

export const SystemContext = createContext<SystemContextValue>({
  setError: () => {},
  error: null,
  setApiResponse: () => {},
  apiResponse: null,
  city:[],
  condition:[],
  weather:[],
  setCondition: () => {},
  category:[],
  setCategory: () => {}
});
