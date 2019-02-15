import * as React from 'react';

interface IWeather {
    day : string;
    highTemp : number;
    lowTemp : number;
}

const Weather = (input : IWeather) =>{
    const css = {
        width : '18rem'
    }
    return (
        <div className='card text-center' style={css}>
            <div className='card-body'>
                <h1 className='card-title'>{input.day}</h1>
                <h1 className='card-title'>&#x26C5;</h1>
                <h3 className='card-text'>{input.lowTemp}&#8451; - {input.highTemp}&#8451;</h3>
            </div>
        </div>
    )
}

export default Weather;