import { useEffect, useState } from "react";
import { forecastType, seriesTypes } from "../../interface";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { generateGraphOption } from "../../utlis/graph";
import { useSystem } from "../../contexts/SystemContext/useSystem";

export default function Graph() {
  const [forecastData, setforecastData] = useState<seriesTypes[]>([]);
  const { apiResponse, condition, setCategory, category } = useSystem();

  useEffect(() => {
    if (apiResponse && apiResponse?.weathers.length > 0) {
      const x = generateforecastData();
      setforecastData(x);
    }
  }, [apiResponse, condition]);

  const generateforecastData = () => {
    const max_temp: number[] = [];
    const min_temp: number[] = [];
    const category: string[] = [];
    const series: seriesTypes | {} = {};
    let city: string = "";
    condition &&
      condition.length > 0 &&
      condition[0].forecast?.map((element: forecastType) => {
        city = condition[0].location.city;
        max_temp.push(element.max_temp);
        min_temp.push(element.min_temp);
        category.push(
          new Date(element.date).toLocaleDateString("en-GB", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })
        );
      });
    setCategory(category);
    console.log([
      { ...series, data: max_temp, name: "Maximum Temperature" },
      { ...series, data: min_temp, name: "Minimum Temperature" },
    ])
    return [
      { ...series, data: max_temp, name: "Maximum Temperature" },
      { ...series, data: min_temp, name: "Minimum Temperature" },
    ];
    
  };

  return (
    <div data-testid="home-component">
      <HighchartsReact
        highcharts={Highcharts}
        options={generateGraphOption(category, forecastData)}
      />
    </div>
  );
}
