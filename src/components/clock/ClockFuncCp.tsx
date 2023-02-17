import React, { useEffect, useState } from 'react';
import Time from './Clock.style';

const ClockFuncCp = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div>
      <Time>{time}</Time>
    </div>
  );
};

export default ClockFuncCp;
