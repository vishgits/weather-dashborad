import { seriesTypes } from "../interface"; 

export function generateGraphOption(catgeory:string[],forecastData:seriesTypes[]){
    const options = {
        chart: {
          type: "spline",
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "Weather Forecast",
        },
    
        xAxis: {
          categories: catgeory,
          accessibility: {
            description: "Forecast of next 1 week",
          },
        },
        yAxis: {
          title: {
            text: "Temperature",
          },
          labels: {
            format: "{value}°",
          },
        },
        tooltip: {
          crosshairs: true,
          shared: true,
        },
        plotOptions: {
          spline: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: false,
                },
              },
            },
          },
        },
        series: forecastData,
      };
      return options;
}

