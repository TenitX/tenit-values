import axios from 'axios';

var valuesMap : Map<string, string> = new Map();

const ASYNC_STORAGE_KEY = "tenit-values-map";

export function init(apiToken: string, coordinates: string, values : string[]): void {
    valuesMap = new Map(Object.entries(JSON.parse(localStorage.getItem(ASYNC_STORAGE_KEY) || "{}")));
    axios.post(`https://api.tenitx.com/values/v1/values/fetch/${coordinates}`, 
    {values: values},
    {headers: {token: apiToken}})
    .then(resp => {valuesMap = new Map(Object.entries(resp.data.valuesMap)); localStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(valuesMap)); console.log(resp.data.valuesMap)} ).catch((err) => console.error("Failed values fetch...", err));
}

export function getString(value: string, defaultValue: string): string {
    return valuesMap.get(value) || defaultValue;
}

export function getNumber(value: string, defaultValue: number): number {
    return valuesMap.has(value) ? parseFloat(valuesMap.get(value) || "") : defaultValue;
}

export function getBoolean(value: string, defaultValue: boolean): boolean {
    return valuesMap.has(value) ? (valuesMap.get(value) || "") === "true" : defaultValue;
}