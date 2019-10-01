import React from 'react';
import { OnePropComponentMemoized, OnePropComponent } from './Memoized';

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
      <>
      <p>setInterval() is updating state.date once per second</p>
        state.date === {date.toLocaleString('en-US',
          { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
          
        <div>
          <OnePropComponent frequency={1} />
          <OnePropComponentMemoized frequency={1} />
        </div>

      </>
    )
  }
}

export { MemoDemo }