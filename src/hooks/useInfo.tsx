import { useState } from 'react';
import styles from '../pages/index.module.css';

export const useInfo = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [level, setLevel] = useState(0);

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
          [0, 1, 1, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 1, 1, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [1, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'red',
    },
    O: {
      direction: {
        0: [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'yellow',
    },
    L: {
      direction: {
        0: [
          [0, 0, 1, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'oranage',
    },
    J: {
      direction: {
        0: [
          [1, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'blue',
    },
    T: {
      direction: {
        0: [
          [0, 1, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
        2: [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      color: 'purple',
    },
    I: {
      direction: {
        0: [
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        1: [
          [0, 0, 0, 1],
          [0, 0, 0, 1],
          [0, 0, 0, 1],
          [0, 0, 0, 1],
        ],
        2: [
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        3: [
          [0, 0, 0, 1],
          [0, 0, 0, 1],
          [0, 0, 0, 1],
          [0, 0, 0, 1],
        ],
      },
      color: 'skyblue',
    },
  };
  const getRandomIntegers =() =>{
    const S = minos.S,Z = minos.Z,O = minos.L,J =minos.J,T =minos.T,I =minos.I
    const integers = [S, Z, O, J, T, I]
    const result:typeof minos.S[] =[];
    while (integers.length > 0) {
        const randomIndex = Math.floor(Math.random() * integers.length);
        const randomMino = integers.splice(randomIndex, 1)[0];
        result.push(randomMino);
    }

    return result;
  }
  const nextMino = getRandomIntegers();
  const createSevenMinos =()=>{
    
    if(nextMino.length  <= 7){
      for(let i =0;i<7;i++){
        nextMino.push(getRandomIntegers()[i]) 
      }
    }
    
  }
  createSevenMinos();
  const startPlay = () => {
    setIsPlay(true);
  };
  return { isPlay, setIsPlay, level, setLevel, minos, startPlay,nextMino};
};
