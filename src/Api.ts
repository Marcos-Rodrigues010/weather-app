const BaseUrl = 'https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid={appid}&q=' 

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