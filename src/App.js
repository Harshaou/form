import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';
import Thankyou from './pages/Thankyou';


class App extends Component {

state = {
  radio: null,
  cssVh: ''
}



handleIntrest = (val) => {
  this.setState({radio: val})
  console.log(this.state.radio)
}


  render() {
    return (
    <div className="app">
       <Route exact path="/" component={Home}/>
       <Route path='/form' component={Form} />
       <Route path='/thankyou' component={Thankyou} /> 
     

      </div>
    );
  }
}

export default App;
