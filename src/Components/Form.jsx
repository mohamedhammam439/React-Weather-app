import React from 'react';

const Form = (props) => {
    return ( 
        <form onSubmit={props.getWeather}>
            <div className='row row-form'>
                <div className='col-md-9'>
                    <input type='text' className='input-group' placeholder='city' name='city' />
                </div>
                <div className='col-md-3'>
                    <button className='btn btn-primary btn-block'>find</button>
                </div>
            </div>
        </form>
     );
}
 
export default Form;