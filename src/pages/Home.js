import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
             <div class="container">
      <h1>Looking for Co-founder for a Startup related to music industry </h1>
      <p className='asim'>Hi, Asim Usman </p>
      <p className='p'>
        Your life has been an inspiration to me. I tried to follow you. I tried to copy you. To summarize,
        I was a fan of you. And I'm still. I've never seen someone as smart as you in my life. I think it
        would be a mistake if I didn't ask you this in the first place before searching for anyone. <br/> <br/>
        I know building a product is not an easy thing. Especially a product like this. I only have 1% of hope.
         But let’s give a hard try.  If you think the same and you excited to be involved to solving this problem.
        Please fill this form.
        <br/>
        <br/>
        </p>
        <div className="row justify-content-center">
          <Link to='/form'>
          <button style={{margin: 20}} type="button" value={true} className="btn btn-primary py-3 px-4" >Yes, I'm Intrested</button>
          </Link>
          <Link to='thankyou'>
          <button style={{margin: 20}} type="button" value={false} className="btn btn-warning py-3 px-4">Not Intrested</button>
          </Link>
          </div>
        
      </div>
        </div>
    );
}

export default Home;
