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
    const minoWidth = cMino?.direction?.[0]?.[0]?.length;
    const minoHeight = cMino?.direction[0].length;
    console.log(minoHeight);
    if (cMino !== undefined && minoHeight !== undefined && minoWidth !== undefined) {
      for (let i = 0; i < minoHeight; i++) {
        for (let k = 3; k < minoWidth + 3; k++) {
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
      const minoWidth = currentMino.direction[0][0].length;
      const minoHeight = currentMino.direction[0].length;
      for (let i = 0; i < minoHeight; i++) {
        for (let k = 3; k < minoWidth + 3; k++) {
          if (count <= 19 - minoHeight) {
            if (count + minoHeight !== 20 && cloneMinoMap[count + minoHeight][k] !== 0) {
              console.log('a');
              setCount(0);
              outPutMino();
              setMinoMap(cloneMinoMap);
              return 0;
            } else {
              cloneMinoMap[i + count + 1][k] = currentMino.direction[0][i][k - 3];
            }
            if (count === 1) {
              cloneMinoMap[0][k] = 0;
            }
            cloneMinoMap[count][k] = 0;
          }
        }
      }
      if (count === 20 - minoHeight) {
        setCount(0);
        outPutMino();
        setMinoMap(cloneMinoMap);
        return 0;
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
