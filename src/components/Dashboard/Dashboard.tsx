import { useSystem } from "../../contexts/SystemContext/useSystem";
import Graph from "../Graph/Graph";
import { useEffect } from "react";
import { makeAxiosRequest } from "../../services/makeRequest";
import { APIResponseType, PromiseErrorType } from "../../interface";
import ConditionCard from "../ConditionCard/ConditionCard";

export default function Dashboard() {
  const { setApiResponse, setError } = useSystem();
  useEffect(() => {
    makeAxiosRequest({
      getRespose: (res: APIResponseType) => {
        setApiResponse(res);
      },
      getError: (error: PromiseErrorType) => {
        setError(error);
      },
      finished: () => {
        console.log("finished");
      },
    });
  }, []);

  return (
    <div
      className="mx-auto w-full bg-white px-4 sm:px-6 lg:px-8"
      data-testid="dashboard-component"
    >
      
      <div className="container mx-auto">
      <div className="min-w-0 flex-1 my-6">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ">
          Dashboard
        </h2>
      </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="overflow-hidden rounded-lg bg-white shadow w-full lg:w-1/5 mb-5 lg:mb-0">
            <ConditionCard />
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow w-full lg:w-4/5">
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}
