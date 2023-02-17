import React from 'react';
import Time from './Clock.style';

interface IProps {
  time: string;
}
interface IState {
  time: string;
}

class Clock extends React.Component<Partial<IProps>, IState> {
  interval: number;

  constructor(props: IProps) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.interval = window.setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <Time>{time}</Time>
      </div>
    );
  }
}

export default Clock;
