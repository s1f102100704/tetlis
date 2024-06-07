import { use, useState } from 'react';
import { useEffect } from 'react';
import { useInfo } from './useInfo';

export const useGame = () => {
  const { isPlay, setIsPlay, level, setLevel, minos, count, setCount, createSevenMinos } =
    useInfo();
  const [minoMap, setMinoMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [nextMinos, setNextMinos] = useState([
    minos.S,
    minos.L,
    minos.J,
    minos.Z,
    minos.T,
    minos.I,
  ]);
  type MinoType = {
    direction: { 0: number[][]; 1: number[][]; 2: number[][]; 3: number[][] };
    color: string;
  };
  const [currentMino, setCurrentMino] = useState<MinoType>(minos.S);

  let cloneNextMinos = { ...nextMinos };
  const startPlay = () => {
    setIsPlay(true);
    outPutMino();
  };
  const cloneMinoMap = structuredClone(minoMap);
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const outPutMino = () => {
    cloneNextMinos = createSevenMinos();
    console.log(minos.S);
    for (let i = 0; i < 4; i++) {
      for (let k = 3; k < 7; k++) {
        cloneMinoMap[i][k] = cloneNextMinos[0].direction[0][i][k - 3];
      }
    }
    setMinoMap(cloneMinoMap);
    setNextMinos(cloneNextMinos);
    const cMino = cloneNextMinos.shift();
    if (cMino !== undefined) {
      setCurrentMino(cMino);
    }
  };

  useEffect(() => {
    const dropMino = () => {
      for (let i = 0; i < 4; i++) {
        for (let k = 3; k < 7; k++) {
          if (i + count + 1 !== 20) {
            cloneMinoMap[i + count + 1][k] = nextMinos[0].direction[0][i][k - 3];
            cloneMinoMap[count][k] = 0;
          }
        }
      }
      setCount((prevCount) => prevCount + 1);
      setMinoMap(cloneMinoMap);
    };
    if (isPlay) {
      const interval = setInterval(dropMino, 1000);

      return () => {
        clearInterval(interval); // 間隔のクリア
      };
    }
  }, [cloneMinoMap, cloneNextMinos, count, setCount, isPlay, nextMinos]);
  return { minoMap, board, startPlay };
};
