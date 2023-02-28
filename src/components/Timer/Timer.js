import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  let miliseconds = Math.floor(time % 1000);
   const formatTime = time => {
      let seconds = Math.floor((time / 1000) % 60);
      let minutes = Math.floor((time / 1000 / 60) % 60);
      let hours = Math.floor((time / 1000 / 60 / 60) % 24);

      return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
      ].join(":");
    };
  const formattedTime = formatTime(time);
  console.log(formattedTime);

  return (
    <div className={styles.timer}>
      {formattedTime}.{miliseconds.toString().padStart(2, "0")}
    </div>
  )
}
export default Timer;