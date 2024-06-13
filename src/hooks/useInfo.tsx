import { useState } from 'react';

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
          [1, 1, 0],
          [0, 1, 1],
        ],
        1: [
          [0, 1],
          [1, 1],
          [1, 0],
        ],
        2: [
          [1, 1, 0],
          [0, 1, 1],
        ],
        3: [
          [0, 1],
          [1, 1],
          [1, 0],
        ],
      },
      color: 'green',
    },
    Z: {
      direction: {
        0: [
          [0, 2, 2],
          [2, 2, 0],
        ],
        1: [
          [2, 0],
          [2, 2],
          [0, 2],
        ],
        2: [
          [0, 2, 2],
          [2, 2, 0],
        ],
        3: [
          [2, 0],
          [2, 2],
          [0, 2],
        ],
      },
      color: 'red',
    },
    O: {
      direction: {
        0: [
          [3, 3],
          [3, 3],
        ],
        1: [
          [3, 3],
          [3, 3],
        ],
        2: [
          [3, 3],
          [3, 3],
        ],
        3: [
          [3, 3],
          [3, 3],
        ],
      },
      color: 'yellow',
    },
    L: {
      direction: {
        0: [
          [0, 0, 4],
          [4, 4, 4],
        ],
        1: [
          [4, 0],
          [4, 0],
          [4, 4],
        ],
        2: [
          [4, 4, 4],
          [4, 0, 0],
        ],
        3: [
          [4, 4],
          [0, 4],
          [0, 4],
        ],
      },
      color: 'oranage',
    },
    J: {
      direction: {
        0: [
          [5, 0, 0],
          [5, 5, 5],
        ],
        1: [
          [5, 5],
          [5, 0],
          [5, 0],
        ],
        2: [
          [5, 5, 5],
          [0, 0, 5],
        ],
        3: [
          [0, 5],
          [0, 5],
          [5, 5],
        ],
      },
      color: 'blue',
    },
    T: {
      direction: {
        0: [
          [0, 6, 0],
          [6, 6, 6],
        ],
        1: [
          [6, 0],
          [6, 6],
          [6, 0],
        ],
        2: [
          [6, 6, 6],
          [0, 6, 0],
        ],
        3: [
          [0, 6],
          [6, 6],
          [0, 6],
        ],
      },
      color: 'purple',
    },
    I: {
      direction: {
        0: [[7, 7, 7, 7]],
        1: [[7], [7], [7], [7]],
        2: [[7, 7, 7, 7]],
        3: [[7], [7], [7], [7]],
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
      L = minos.L,
      J = minos.J,
      T = minos.T,
      I = minos.I,
      O = minos.O;
    const integers = [S, Z, O, J, T, I, L];
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
