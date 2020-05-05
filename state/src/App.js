import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    clickCount: 0,
    liked: false
  }

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
    })
  }

  likeHandler = () => {
    this.setState({
      liked: !this.state.liked
    })
    console.log(this.state.liked);
  }

  render() {
    // this.props.name = 'Bob';
    // console.log(this.props.name);
    let buttonText = '';
    if (this.state.liked) {
      buttonText = 'Unlike';
    } else {
      buttonText = 'Like';
    }

    return (
      <>
        <h1>Counter: {this.state.clickCount}</h1>
        <button onClick={this.clickHandler}>Click me</button>
        <h1>{this.state.liked ? 'I like it' : 'I don\'t like it'}</h1>
        <button onClick={this.likeHandler}>{this.state.liked ? 'Unlike' : 'Like'}</button>
        {/* <button onClick={this.likeHandler}>{buttonText}</button> */}
      </>
    )
  }
}
export default App;
