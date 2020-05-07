import React, { Component } from 'react';
import Form from './Form';
import Data from './Data';
import './Weather.css';


class Weather extends Component {
    state = { 
        City:'',
        Country:'',
        icon:'',
        Tempreature:'',
        pressure:'',
        humidity:'',
        description:'',
        error:''
     }

    getWeather = async(e) =>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=487862f576f796db554187c8715d2b90`)
        const data=await api.json();
        if(city){
            this.setState({
                City:data.name,
                Country:data.sys.country,
                icon:data.weather[0].icon,
                Tempreature:data.main.temp,
                pressure:data.weather[0].main,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:''
            })
        }else{
            this.setState({
                City:'',
                Country:'',
                icon:'',
                Tempreature:'',
                pressure:'',
                humidity:'',
                description:'',
                error:'Please Insert Data'
            })
        }
    }

    render() { 
        return ( 
            <div className='App'>
                <div className='container'>
                    
                        <h2 className='marg xs-h2'>Just type the city name</h2>
                        <h6>you must spilling correctly</h6>
                       
                        <Form getWeather={this.getWeather} />
                        <Data 
                           City={this.state.City}
                           Country={this.state.Country}
                           icon={this.state.icon}
                           Tempreature={this.state.Tempreature}
                           pressure={this.state.pressure}
                           humidity={this.state.humidity}
                           description={this.state.description}
                           error={this.state.error}
                        />
                    
                </div>
               
            </div>
         );
    }
}
 
export default Weather;

