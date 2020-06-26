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

       <form name="contact" method="post">
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
     

      </div>
    );
  }
}

export default App;
