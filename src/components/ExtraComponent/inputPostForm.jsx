import React from 'react';

class InputPostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            name : '',
            address : ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
        title : this.state.title,
        name : this.state.name,
        address : this.state.address

        };
        console.log(post);
    }

    render(){
      return(
        <div>
          <h1>Input post form</h1>
          <form onSubmit={this.onSubmit}>
               <label>Title: </label>
               <input
                 type = 'text'
                 placeholder='title'
                 name='title'
                 value={this.state.title}
                 onChange={this.onChange}
               />
               <br/>
               <br/>
                <label>Name : </label>
                <input type='text'
                  placeholder='name'
                  name='name'
                  onChange={this.onChange}
                  value={this.state.name}
                />
               <br/>
               <br/>
               <label>Address :  </label>
               <input type='text'
                 placeholder='address'
                 name='address'
                 onChange={this.onChange}
                 value={this.state.address}
               />
               <br/>
               <br/>
               <button>Submit</button>
          </form>
        </div>
      );
    }
}

export default InputPostForm;