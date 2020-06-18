import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
    <div className="app">
      <div class="container">
      <h2>Looking for cofounder </h2>
      <p className='p'>Your life has been an inspiration to me. I tried to follow you. I tried to copy you. To summarize,
        I was a fan of you. And I'm still. I've never seen someone as smart as you in my life. I think it
        would be a mistake if I didn't ask you this in the first place before searching for anyone. <br/> <br/>
        I know building a product is not an easy thing. Especially a product like this. I only have 1% of hope.
         But let’s give a hard try.  If you think the same and you excited to be involved to solving this problem.
        Please fill this form. 

</p>
        <div class="row">
  
          <div className="formname">
          <form name="contact" method="POST" data-netlify="true">
          <label for="male">Male</label>
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
