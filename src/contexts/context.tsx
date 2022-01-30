import React, {useState, createContext, SetStateAction} from 'react';

type FragWeatherDataType = {
    description: string,
    icon: string,
    id: number,
    main: string,
}
type WeatherDataType = {
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },
    name: string,
    weather: FragWeatherDataType[],
    wind: {
        speed: number,
    }
};

type ContextData = {
    weatherData: WeatherDataType,
    setWeatherData: React.Dispatch<SetStateAction<WeatherDataType>>
}

export const initialState = {
    weatherData: {main: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        },
        name: '',
        weather: [{
            description: '',
            icon: '',
            id: 0,
            main: ''
        }],
        wind: {
            speed: 0
        }
    },
    setWeatherData: () => null
}

export const Context = createContext<ContextData>(initialState);

export const ContextProvider: React.FC = ({children}) => {

    const [weatherData, setWeatherData] = useState<WeatherDataType>(initialState.weatherData);

    return(
        <Context.Provider value={{weatherData, setWeatherData}}>
            {children}
        </Context.Provider>
    )
}