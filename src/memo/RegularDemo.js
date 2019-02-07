import React from 'react';
import {OnePropComponent} from './Memoized';

class RegularDemo extends React.Component {
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
        {/* Even though the frequency prop is hard coded, the component will rerenders */}
        <OnePropComponent frequency={1} />
        It is {date.toLocaleString('en-US', 
          { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
      </div>
    )
  }
}

export {RegularDemo}