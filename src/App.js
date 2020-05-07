import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import Home from './Components/Home';
import './App.css';


class App extends Component {
  render() { 
    return ( 
      <BrowserRouter>
        <div className='container'>

          <div className='row'>

            <div className='col'>
              <Route exact path='/' component={Home}/>
              <Route path='/Weather' component={Weather} />
            </div>

            <div className='col-xs-1 mr'>
              <Navbar />
            </div>
          </div>
        </div>
          
      </BrowserRouter>
     
     );
  }
}
 
export default App;


