import React from 'react';
import './FormValidation.css';

class FormValidation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                fname:'',
                visible:false
        }
        this.onHandleChange=this.onHandleChange.bind(this);
    }

    onHandleChange= (e) =>{
        this.setState({[e.target.name]: e.target.value});
        
    }
    render(){
      return(
        <div className='App'>
            <h1>Welcome to Home</h1>
            <input type="text" 
                name="fname"
                value={this.state.fname}
                onChange={this.onHandleChange}
            />
            {this.state.fname.length > 10 ? 
            <span className="alert">must be 10  character</span>
            : null
            }

        </div>
      )
    }
}

export default FormValidation;