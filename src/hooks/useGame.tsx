import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useInfo } from './useInfo';

export const useGame = () => {
  const {
    isPlay,
    setIsPlay,
    level,
    setLevel,
    minos,
    count,
    setCount,
    createSevenMinos,
    nextMinos,
    setNextMinos,
  } = useInfo();
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

  type MinoType = {
    direction: { 0: number[][]; 1: number[][]; 2: number[][]; 3: number[][] };
    color: string;
  };
  const [currentMino, setCurrentMino] = useState<MinoType>(minos.S);
  let cloneNextMinos = structuredClone(nextMinos);

  const startPlay = () => {
    setIsPlay(true);
    cloneNextMinos = createSevenMinos();
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

  const outPutMino = useCallback(() => {
    const cMino = Array.isArray(cloneNextMinos) ? cloneNextMinos.shift() : undefined;
    if (cMino !== undefined) {
      for (let i = 0; i < 4; i++) {
        for (let k = 3; k < 7; k++) {
          cloneMinoMap[i][k] = cMino.direction[0][i][k - 3];
        }
      }
      setMinoMap(cloneMinoMap);
      setNextMinos(cloneNextMinos);

      setCurrentMino(cMino);
    }
  }, [cloneMinoMap, cloneNextMinos, setNextMinos]);

  useEffect(() => {
    const dropMino = () => {
      for (let i = 0; i < 4; i++) {
        for (let k = 3; k < 7; k++) {
          if (i + count + 1 !== 20) {
            cloneMinoMap[i + count + 1][k] = currentMino.direction[0][i][k - 3];
            if (count === 1) {
              cloneMinoMap[0][k] = 0;
            }
            cloneMinoMap[count][k] = 0;
          }
          if (i + count + 1 === 20) {
            console.table(cloneMinoMap);
            setCount(0);
            outPutMino();
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
  }, [cloneMinoMap, cloneNextMinos, count, setCount, isPlay, currentMino.direction, outPutMino]);
  return { minoMap, board, startPlay };
};
