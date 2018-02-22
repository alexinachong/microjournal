import React from 'react';


class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          Password:<input type="password" name="" value=""></input>
          <input type="submit" name="" value="Submit"></input>
        </form>
      </div>
    );
  }

}
