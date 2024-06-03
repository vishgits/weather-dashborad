export function convertToCelicus(fahrenheit:number){
    return Math.round(((fahrenheit - 32) * 5/9) * 100) / 100
  }