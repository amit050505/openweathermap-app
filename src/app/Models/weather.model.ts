

    export interface Coord {
        Lon: number;
        Lat: number;
    }

    export interface Main {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
    }

    export interface Clouds {
        today: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface List {
        id: number;
        dt: number;
        name: string;
        coord: Coord;
        main: Main;
        visibility: number;
        wind: Wind;
        rain?: any;
        snow?: any;
        clouds: Clouds;
        weather: Weather[];
    }

    export interface WeatherForCitiesresponse {
        cod: number;
        calctime: number;
        cnt: number;
        list: List[];
    }

    //weather deatils

    export interface Coord {
        lon: number;
        lat: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    // export interface Main {
    //     temp: number;
    //     feels_like: number;
    //     temp_min: number;
    //     temp_max: number;
    //     pressure: number;
    //     humidity: number;
    //     sea_level: number;
    //     grnd_level: number;
    // }

    export interface Wind {
        speed: number;
        deg: number;
        gust: number;
    }

    export interface Clouds {
        all: number;
    }

    export interface Sys {
        country: string;
        sunrise: number;
        sunset: number;
    }

    export interface WeatherDetailsResponse {
        coord: Coord;
        weather: Weather[];
        base: string;
        main: Main;
        visibility: number;
        wind: Wind;
        clouds: Clouds;
        dt: number;
        sys: Sys;
        timezone: number;
        id: number;
        name: string;
        cod: number;
    }


    
    // export interface Main {
    //     temp: number;
    //     feels_like: number;
    //     temp_min: number;
    //     temp_max: number;
    //     pressure: number;
    //     sea_level: number;
    //     grnd_level: number;
    //     humidity: number;
    //     temp_kf: number;
    // }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface Clouds {
        all: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
        gust: number;
    }

    export interface Sys {
        pod: string;
    }

    export interface Rain {
        "3h": number;
    }

    export interface ForecastList {
        dt: number;
        main: Main;
        weather: Weather[];
        clouds: Clouds;
        wind: Wind;
        visibility: number;
        pop: number;
        sys: Sys;
        dt_txt: string;
        rain: Rain;
    }

    export interface Coord {
        lat: number;
        lon: number;
    }

    export interface City {
        id: number;
        name: string;
        coord: Coord;
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    }

    export interface ForecastResponse {
        cod: string;
        message: number;
        cnt: number;
        list: ForecastList[];
        city: City;
    }



