import Timer from './components/Timer/Timer';
import { useState } from 'react';
//import { useEffect } from '.react';
import Button from './components/Button/Button';
import styles from './App.module.scss';

function App() {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
   setTimer(setInterval(() => {
     setTime(prevValue => prevValue + 1);
   }, 1))
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  };

  return (
    <div className={styles.container}>
      <Timer time={ time } />
      <Button onClick={ start }>Start</Button>
      <Button onClick={ stop }>Stop</Button>
      <Button onClick={ reset }>Reset</Button>
    </div>
  );
}

export default App;
