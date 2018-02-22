import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(){

  }

  handleSubmit(e){
    e.preventDefault();
    // execute some action
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Email:<input type="text"></input>
          Password:<input type="password"></input>
          <br/>
          <input type="submit" name="" value="Submit"></input>
        </form>
      </div>
    );
  }

}

export default Login;
