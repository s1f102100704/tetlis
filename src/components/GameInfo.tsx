import React from 'react';
import styles from '../pages/index.module.css';

interface Props {
  startPlay: () => void;
}
const GameInfo: React.FC<Props> = (props) => {
  const { startPlay } = props;
  return (
    <div className={styles.gameInfo}>
      <div className={styles.startPlay} onClick={startPlay}>
        Play
      </div>
    </div>
  );
};
export default GameInfo;
