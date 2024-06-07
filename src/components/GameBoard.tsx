import React from 'react';
import styles from '../pages/index.module.css';
interface Minos {
  S: {
    direction: {
      0: number[][];
      1: number[][];
      2: number[][];
      3: number[][];
    };
    color: string;
  };
  Z: {
    direction: {
      0: number[][];
      1: number[][];
      2: number[][];
      3: number[][];
    };
    color: string;
  };
  O: {
    direction: {
      0: number[][];
      1: number[][];
      2: number[][];
      3: number[][];
    };
    color: string;
  };
  L: {
    direction: {
      0: number[][];
      1: number[][];
      2: number[][];
      3: number[][];
    };
    color: string;
  };
  J: {
    direction: {
      0: number[][];
      1: number[][];
      2: number[][];
      3: number[][];
    };
    color: string;
  };
  T: {
    direction: {
      0: number[][];
      1: number[][];
      2: number[][];
      3: number[][];
    };
    color: string;
  };
  I: {
    direction: {
      0: number[][];
      1: number[][];
      2: number[][];
      3: number[][];
    };
    color: string;
  };
}
interface Props {
  minoMap: number[][];
  isPlay: boolean;
  minos: Minos;
  board: number[][];
}
const GameBoard: React.FC<Props> = (props) => {
  const { minoMap, isPlay, minos, board } = props;
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
  console.log(board);
  makeFrame();

  return (
    <div className={styles.fullBoard}>
      <div className={styles.sideFrame}>
        {blockFrame.side.map((row, p) =>
          row.map((color, q) => <div className={styles.blockstyle} key={`${p}-${q}`} />),
        )}
      </div>
      <div className={styles.boardPlus}>
        <div className={styles.topBottomFrame}>
          {blockFrame.topBottom.map(() => (
            <div className={styles.blockstyle} key="" />
          ))}
        </div>
        <div className={styles.gameBoard}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div className={styles.cellstyle} key={`${x}-${y}`}>
                {color === 1 && <div style={{ background: 'green', width: 30, height: 30 }} />}
                {color === 2 && <div style={{ background: 'red', width: 30, height: 30 }} />}
                {color === 3 && <div style={{ background: 'yellow', width: 30, height: 30 }} />}
                {color === 4 && <div style={{ background: 'orange', width: 30, height: 30 }} />}
                {color === 5 && <div style={{ background: 'blue', width: 30, height: 30 }} />}
                {color === 6 && <div style={{ background: 'purple', width: 30, height: 30 }} />}
                {color === 7 && <div style={{ background: 'skyblue', width: 30, height: 30 }} />}
              </div>
            )),
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
