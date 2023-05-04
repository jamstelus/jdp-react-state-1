import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'white' }; // initial state
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount (initialState): ', this.state.color);
    this.setState({ color: 'green' });
    console.log('-- change initial state to green before mounting');
  }

  componentDidMount() {
    console.log('componentDidMount (currentState): ', this.state.color);
    this.setState({ color: 'red' });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate (currentState, nextState): ', this.state.color, nextState.color);
    if (nextState.color !== this.state.color) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate (currentState, prevState): ', this.state.color, prevState.color);
    if (prevState.color !== this.state.color) {
      console.log(`-- Button color changed from ${prevState.color} to ${this.state.color}`);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount (currentState): ', this.state.color);
    this.setState({ color: 'blue' });
  }

  handleClick() {
    this.setState((prevState) => {
      const newColor = prevState.color === 'green' ? 'yellow' : 'green';
      return { color: newColor };
    });
  }

  render() {
    return (
      <button
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      >
        Click me!
      </button>
    );
  }
}
