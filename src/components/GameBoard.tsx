import React from 'react';
import styles from '../pages/index.module.css';
interface Props {
  gameMap: number[][];
}
const GameBoard: React.FC<Props> = (props) => {
  const { gameMap } = props;
  interface blockFrame {
    side: number[][];
    topBottom: number[];
  }
  const blockFrame: blockFrame = {
    side: [],
    topBottom: [],
  };
  const makeFrame = () => {
    for (let i = 0; i < 22; i++) {
      blockFrame.side.push([0]);
    }
    for (let i = 0; i < 10; i++) {
      blockFrame.topBottom.push(0);
    }
  };
  makeFrame();
  return (
    <div className={styles.fullBoard}>
      <div className={styles.sideFrame}>
        {blockFrame.side.map((row, y) =>
          row.map((color, x) => <div className={styles.blockstyle} key={`${x}-${y}`} />),
        )}
      </div>
      <div className={styles.boardPlus}>
        <div className={styles.topBottomFrame}>
          {blockFrame.topBottom.map(() => (
            <div className={styles.blockstyle} key="" />
          ))}
        </div>
        <div className={styles.gameBoard}>
          {gameMap.map((row, y) =>
            row.map((color, x) => <div className={styles.cellstyle} key={`${x}-${y}`} />),
          )}
        </div>
        <div className={styles.topBottomFrame}>
          {blockFrame.topBottom.map(() => (
            <div className={styles.blockstyle} key="" />
          ))}
        </div>
      </div>

      <div className={styles.sideFrame}>
        {blockFrame.side.map((row, y) =>
          row.map((color, x) => <div className={styles.blockstyle} key={`${x}-${y}`} />),
        )}
      </div>
    </div>
  );
};
export default GameBoard;
