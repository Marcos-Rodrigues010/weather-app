const BaseUrl = 'https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=2f6b4e93612f1f23d26034d8f5a049d4&q=' 

const apiFetchGet = async (BaseUrl: string, endpoint: string) => {
    try{
        let response = await fetch(`${BaseUrl}${endpoint}`);
        let json = await response.json();
        return json;
    } catch(e){
        return e;
    }
}

export const api = {
    getWeatherByNameCity: async (city: string) => {
        let slug = city.replaceAll(' ', '&');
        let weatherData = await apiFetchGet(BaseUrl, slug);
        return weatherData;
    }
};