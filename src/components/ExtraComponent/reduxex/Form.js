import React from 'react';
import {Field, reduxForm}  from 'redux-form';
import {Segment} from 'semantic-ui-react';

let InputForm = props => {
    const {handleSubmit}= props
    return (
      <form onSubmit ={handleSubmit}>
        <Segment>
          <div>
            <h4>Question 1</h4>
            <Field name = 'Name'
              component='input'
              type='text'
              placeholder='enter answer'
            />
          </div>
          <br/>
          <div>
            <h4>Question 2</h4>
            <Field
              name='question2'
              component='input'
              type='test'
              placeholder='enter answer'
            />
        </div>
        <br/>
        <div>
          <h4>Question 3</h4>
          </div>
          <div>
            <Field
              name = 'question3'
              component='input'
              type='text'
              placeholder='enter answer'
            />
          </div>
          <br/>
          <div>
           <h4>Question 4</h4>
            <Field
              name = 'question4'
              component='input'
              type='text'
              placeholder='enter answer'
            />
          </div>
        <br/>
        <div>
          <button type="submit" >Submit</button>
        </div>
        </Segment>
      </form>
    )
}
InputForm = reduxForm({
    form: 'inputform'
})(InputForm)
export default InputForm;