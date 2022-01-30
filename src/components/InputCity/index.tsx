import React, {useState, useContext} from 'react';
import {api} from '../../Api'; 
import {InputCityArea} from './styled';
import {BsSearch} from 'react-icons/bs';
import {Context, initialState} from '../../contexts/context';




const InputCity = () => {

    const [cityName, setCityName] = useState<string>('');
    const {setWeatherData} = useContext(Context);
    

    const checkKey = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            handleClick();
        }
    }

    const handleClick = async () => {
        let data = await api.getWeatherByNameCity(cityName);
        if(!data.name){
            alert(`Erro: ${data.message}`)
            setWeatherData(initialState.weatherData);
        }else{
            setWeatherData(data);
            setCityName('');
        }
    }

    return(
        <InputCityArea>
            <div className="searchArea">
                <input 
                    type='text'
                    placeholder='Digite uma cidade...'
                    value={cityName}
                    onChange={(e)=>setCityName(e.target.value)}
                    onKeyDown={checkKey}
                />
                <div className="searchButton">
                    <BsSearch className="searchArea__icon" onClick={handleClick}/>
                </div>
            </div>
        </InputCityArea>
    );
};

export default InputCity;