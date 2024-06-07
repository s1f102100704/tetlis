import { useState } from 'react';
import styles from '../pages/index.module.css';

export const useInfo = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [level, setLevel] = useState(0);
  const [count, setCount] = useState(0);

  //minoの形
  const minos = {
    S: {
      direction: {
        // 0,1,2,3で時計回り（0が初期状態）
        0: [
          [1, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 0, 1, 0],
          [0, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [1, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'green',
    },
    Z: {
      direction: {
        0: [
          [0, 2, 2, 0],
          [2, 2, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 2, 0, 0],
          [0, 2, 2, 0],
          [0, 0, 2, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 2, 2, 0],
          [2, 2, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [2, 0, 0, 0],
          [2, 2, 0, 0],
          [0, 2, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'red',
    },
    O: {
      direction: {
        0: [
          [3, 3, 0, 0],
          [3, 3, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [3, 3, 0, 0],
          [3, 3, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [3, 3, 0, 0],
          [3, 3, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [3, 3, 0, 0],
          [3, 3, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'yellow',
    },
    L: {
      direction: {
        0: [
          [0, 0, 4, 0],
          [4, 4, 4, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 4, 0, 0],
          [0, 4, 0, 0],
          [0, 4, 4, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 0, 0, 0],
          [4, 4, 4, 0],
          [4, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [4, 4, 0, 0],
          [0, 4, 0, 0],
          [0, 4, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'oranage',
    },
    J: {
      direction: {
        0: [
          [5, 0, 0, 0],
          [5, 5, 5, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 5, 5, 0],
          [0, 5, 0, 0],
          [0, 5, 0, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 0, 0, 0],
          [5, 5, 5, 0],
          [0, 0, 5, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [0, 5, 0, 0],
          [0, 5, 0, 0],
          [5, 5, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'blue',
    },
    T: {
      direction: {
        0: [
          [0, 6, 0, 0],
          [6, 6, 6, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 6, 0, 0],
          [0, 6, 6, 0],
          [0, 6, 0, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 0, 0, 0],
          [6, 6, 6, 0],
          [0, 6, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [0, 6, 0, 0],
          [6, 6, 0, 0],
          [0, 6, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'purple',
    },
    I: {
      direction: {
        0: [
          [7, 7, 7, 7],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 0, 0, 7],
          [0, 0, 0, 7],
          [0, 0, 0, 7],
          [0, 0, 0, 7],
        ],
        2: [
          [7, 7, 7, 7],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [0, 0, 0, 7],
          [0, 0, 0, 7],
          [0, 0, 0, 7],
          [0, 0, 0, 7],
        ],
      },
      color: 'skyblue',
    },
  };
  const [nextMinos, setNextMinos] = useState([
    minos.S,
    minos.L,
    minos.J,
    minos.Z,
    minos.T,
    minos.I,
  ]);
  let cloneNextMino = { ...nextMinos };

  const getRandomIntegers = () => {
    const S = minos.S,
      Z = minos.Z,
      O = minos.L,
      J = minos.J,
      T = minos.T,
      I = minos.I;
    const integers = [S, Z, O, J, T, I];
    const result: (typeof minos.S)[] = [];
    while (integers.length > 0) {
      const randomIndex = Math.floor(Math.random() * integers.length);
      const randomMino = integers.splice(randomIndex, 1)[0];
      result.push(randomMino);
    }

    return result;
  };

  const createSevenMinos = () => {
    cloneNextMino = getRandomIntegers();
    if (cloneNextMino.length <= 7) {
      for (let i = 0; i < 7; i++) {
        cloneNextMino.push(getRandomIntegers()[i]);
      }
    }
    setNextMinos(cloneNextMino);
    return cloneNextMino;
  };

  return {
    isPlay,
    setIsPlay,
    level,
    setLevel,
    minos,
    createSevenMinos,
    count,
    setCount,
    nextMinos,
    setNextMinos,
  };
};
