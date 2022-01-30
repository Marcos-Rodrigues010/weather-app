import {useContext} from 'react';
import {Context} from '../../contexts/context';
import { WeatherDataArea } from './styled';
import {BsCloudDrizzle} from 'react-icons/bs';
import {IoThunderstormOutline} from 'react-icons/io5';
import {BsCloudRainHeavy} from 'react-icons/bs';
import {BsSnow} from 'react-icons/bs';
import {BsCloudHaze} from 'react-icons/bs';
import {BsSun} from 'react-icons/bs';
import {BsClouds} from 'react-icons/bs';
import React from 'react';


const WeatherData = () => {

    const {weatherData} = useContext(Context);

    function getIcon() {
        if(weatherData.name !== ''){
            if(weatherData.weather[0].id >= 200 && weatherData.weather[0].id <= 299 ){
                return <IoThunderstormOutline className="mainInfos__icon" />;
            }else if(weatherData.weather[0].id >= 300 && weatherData.weather[0].id <= 399){
                return <BsCloudDrizzle className="mainInfos__icon" />
            }else if (weatherData.weather[0].id >= 500 && weatherData.weather[0].id <= 599){
                return <BsCloudRainHeavy className="mainInfos__icon" />
            }else if(weatherData.weather[0].id >= 600 && weatherData.weather[0].id <= 699){
                return <BsSnow className="mainInfos__icon" />
            }else if(weatherData.weather[0].id >= 700 && weatherData.weather[0].id <= 799){
                return <BsCloudHaze className="mainInfos__icon" />;
            }else if(weatherData.weather[0].id === 800){
                return <BsSun className="mainInfos__icon" />;
            }else if(weatherData.weather[0].id > 800 && weatherData.weather[0].id <= 899){
                return <BsClouds className="mainInfos__icon" />;
            };
        };
    };


    return (
        weatherData.name !== '' ? 
        <WeatherDataArea>
            <div className="mainInfos">
                <div className="cityName"><h2>{weatherData.name}</h2></div>
                <div className="iconTemp">
                    {getIcon()}
                </div>
                <div className='temp'>{`${Math.trunc(weatherData.main.temp)}ºC`}</div>
                <div className='desc'>{weatherData.weather[0].description}</div>
            </div>
            <div className='supplementaryInfosArea'>
                <div className="supplementaryInfo">
                    <div className="supplementaryInfo__title">Max/Min</div>
                    <span className='supplementaryInfo__data'>{`${Math.trunc(weatherData.main.temp_max)}º/${Math.trunc(weatherData.main.temp_min)}º`}</span>
                </div>
                <div className="supplementaryInfo">
                <div className="supplementaryInfo__title">Sensção</div>
                    <span className="supplementaryInfo__data">{`${Math.trunc(weatherData.main.feels_like)}ºC`}</span>
                </div>
                <div className='supplementaryInfo'>
                <div className="supplementaryInfo__title">Umidade</div>
                    <span className='supplementaryInfo__data'>{`${Math.trunc(weatherData.main.humidity)}%`}</span>
                </div>
                <div className='supplementaryInfo'>
                <div className="supplementaryInfo__title">Pressão</div>
                    <span className='supplementaryInfo__data'>{`${Math.trunc(weatherData.main.pressure)}hPa`}</span>
                </div>
                <div className='supplementaryInfo'>
                <div className="supplementaryInfo__title">Velocidade do Vento</div>
                    <span className='supplementaryInfo__data'>{`${weatherData.wind.speed}m/s`}</span>
                </div>
            </div>
        </WeatherDataArea> 
        : <div></div>
    );
};


export default WeatherData;