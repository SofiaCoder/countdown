'use client';

import { useEffect, useState } from 'react';
import { getCountdown } from '../lib/getCountdown';

export default function Countdown({ target }: { target: string }) {
  const [timeLeft, setTimeLeft] = useState(() => getCountdown(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (timeLeft.finished) {
    return <p>Countdown finished!</p>;
  }

  return (
    <div className='bg-sky-950 p-10 rounded-lg'>
      <p>{timeLeft.weeks} weeks</p>
      <p>{timeLeft.days} days</p>
      <p>{timeLeft.hours} hours</p>
      <p>{timeLeft.minutes} minutes</p>
      <p>{timeLeft.seconds} seconds</p>
    </div>
  );
}
