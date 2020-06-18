import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
    <div className="app">
      <div class="container">
      <h2>Looking for cofounder </h2>
        <div class="row">
  
          <div className="formname">
          <form name="contact" method="POST" data-netlify="true">
            <p className="form-group">
              <input placeholder="Your name" className="form-control" type="text" name="name" />
            </p>
            <p className="form-group">
              <input placeholder="Your email" className="form-control" type="email" name="email" />
            </p>

            <p className="form-group">
              <input placeholder="Equity shares" className="form-control" type="email" name="email" />
            </p>

            <p className="form-group">
              <input placeholder="Subject" className="form-control" type="text" name="subject" />
            </p>
            
            <p className="form-group">
              <textarea placeholder="Message" cols="30" rows="7" className="form-control" name="message"></textarea>
            </p>
            <p className="form-group">
              <button className="btn btn-primary py-3 px-5" type="submit">Send</button>
            </p>
          </form>
          </div>
          
        
       
        </div>
      </div>




















   
      </div>
    );
  }
}

export default App;
