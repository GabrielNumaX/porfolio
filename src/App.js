import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './Containers/Main/Main';
import './App.css';

class App extends Component {

  render() {
    return (

      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <div className="App">

           <Route exact path="/" component={Main}>

           </Route>
        
        </div>
      </BrowserRouter>
     
    );//end return
  } //end render
} //end class

export default App;
