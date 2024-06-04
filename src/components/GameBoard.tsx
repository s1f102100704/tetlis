import React from 'react';
import styles from '../pages/index.module.css';
interface Props {
  gameMap: number[][];
}
const GameBoard: React.FC<Props> = (props) => {
  const { gameMap } = props;
  return (
    <div className={styles.gameBoard}>
      {gameMap.map((row, y) =>
        row.map((color, x) => (
          <div className={styles.cellstyle} key={`${x}-${y}`} id={`${x}-${y}`} />
        )),
      )}
    </div>
  );
};
export default GameBoard;
