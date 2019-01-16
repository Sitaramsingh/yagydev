import React from "react";
import InputBox from "./input.js";

export default class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    salary: "10"
  };

  handleChange(name, value) {
    this.setState({ [name]: value });
    this.props.onChange({ [name]: value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <InputBox
            key="01"
            name="firstName"
            value={this.state.firstName}
            handleChange={this.handleChange}
          />
          <br />
          <InputBox
            key="012"
            name="lastName"
            value={this.state.lastName}
            handleChange={this.handleChange}
          />
          <br />
          <InputBox
            key="013"
            name="username"
            value={this.state.username}
            handleChange={this.handleChange}
          />
          <br />
          <InputBox
            key="014"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <br />
          <InputBox
            key="015"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <br />
          <InputBox
            key="016"
            name="salary"
            value={this.state.salary}
            handleChange={this.handleChange}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
