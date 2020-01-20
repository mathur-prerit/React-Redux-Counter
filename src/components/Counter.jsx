import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  decrement=(e)=>{
    //   console.log('decremeent')
      this.setState({
          count:this.state.count-1})
  }

  increment=(e)=>{
    //   console.log('increment')
    this.setState({
        count:this.state.count+1})

  }

  render() {
    return (
      <div>
        <h1>My Counter</h1>
        <div className='my-counter'>
          <button onClick={this.decrement}>-</button>
          <div> {this.state.count} </div>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

