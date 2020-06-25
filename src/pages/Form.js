import React from 'react';

const Form = () => {
    return (
        <div>
            <div class="row">
          <div className="formname">
          <form name="contact" method="POST" data-netlify="true">

          <div className='fullform'>
          <div class="form-group">
              <h4 style={{color: 'white'}}>In which role you belive you can do somthing great ?</h4>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>CEO</option>
                <option>CTO</option>
                <option>CPO</option>
                <option>CMO</option>
                <option>Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <h4 style={{color: 'white'}} >What is your expected equity sharing percentage ?</h4>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
                <option>40%</option>
                <option>50%</option>
              </select>
            </div>

            <div class="form-group">
              <h4 style={{color: 'white'}} >How much time you would be able to contribute ?</h4>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Part time time (10h/week)</option>
                <option>Half time time (20h/week)</option>
                <option>Full time (40h/week)</option>
                <option>Over time ({">"}40h/week)</option>
              </select>
            </div>

            <p className="form-group">
            <h4 style={{color: 'white'}} >How do you view failure ?</h4>
              <input placeholder="Answer " className="form-control" type="email" name="email" />
            </p>

            <p className="form-group">
            <h4 style={{color: 'white'}} >62% of startup failure is due to co-founder conflict. What is your view about this fact ?</h4>
              <input placeholder="Answer" className="form-control" type="email" name="email" />
            </p>
            
            <p className="form-group">
            <h4 style={{color: 'white'}}>Do you really belive you want to do this ? What motivates you ?</h4>
              <textarea placeholder="Answer" cols="30" rows="7" className="form-control" name="message"></textarea>
            </p>
            <p className="form-group">
              <button className="btn btn-primary py-3 px-5" type="submit">Send</button>
            </p>
            </div>

          </form>
          </div>
        </div>
        </div>
    );
}

export default Form;
