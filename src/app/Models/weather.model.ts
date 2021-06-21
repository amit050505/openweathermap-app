

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

