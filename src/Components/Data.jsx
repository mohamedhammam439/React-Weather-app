import React from 'react';
import './Data.css';

const Data = (props) => {
    return ( 
        <div>
        {
            props.City && <h2 className='marg'>{props.City} , {props.Country}</h2>
        }
        {
            props.icon && <img src='http://openweathermap.org/img/wn/01d@2x.png'/>
        }
       
        {
            props.pressure && <h2 className='marg'>{props.pressure}</h2> 
        }
         {
            props.Tempreature && <h2 className='marg'>{props.Tempreature}</h2> 
        }
        {
            props.humidity && <h2 className='marg'>{props.humidity}</h2>
        }
        {
            props.description && <h5 className='marg'>{props.description}</h5>
        }
        {
            props.error && <h2 className='marg'>Error : {props.error}</h2>
        }   
        </div>
     );
}
 
export default Data;