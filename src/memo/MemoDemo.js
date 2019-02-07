import React from 'react';
import {OnePropComponentMemoized} from './Memoized';

class MemoDemo extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timer = setInterval(() =>
      this.setState({ date: new Date() }), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <OnePropComponentMemoized frequency={1} />
        It is {date.toLocaleString('en-US', 
          { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
      </div>
    )
  }
}

export {MemoDemo}