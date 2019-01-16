import React from 'react';
import '../App.css';
import FormValidation from './FormValidation/FormValidation'; 
class Home extends React.Component{
    render(){
      return(
        <div className='App'>
            <h1>Welcome to Home</h1>
            <FormValidation/>

        </div>
      )
    }
}

export default Home;