import type { NasaMarsWeather } from "./types";

async function getData(sol_num = 0): Promise<NasaMarsWeather> {
    const response = await fetch(
        'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
    );
    const json = await response.json();
    const sol = Number(json.sol_keys[0]);
    const solData = json[sol];
    console.log(solData);
    
    return solData;
}

export default getData;