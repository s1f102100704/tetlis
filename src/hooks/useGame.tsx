import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useInfo } from './useInfo';

export const useGame = () => {
  const {
    isPlay,
    setIsPlay,
    // level,
    // setLevel,
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
  const [besideCount, setBesideCount] = useState(0);
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
  const cMino = Array.isArray(cloneNextMinos) ? cloneNextMinos.shift() : undefined;
  const outPutMino = useCallback(() => {
    setBesideCount(0);
    if (cMino !== undefined) {
      setNextMinos(cloneNextMinos);
      setCurrentMino(cMino);
    }
  }, [cloneNextMinos, setNextMinos, cMino]);
  useEffect(() => {
    const clearMino = (count: number) => {
      if (count !== 0) {
        for (let j = 0; j <= 9; j++) {
          cloneMinoMap[count - 1][j] = 0;
        }
      }

      // for (let k = 0; k <= 2; k++) {
      //   cloneMinoMap[1 + count][k + besideCount] = 0;
      // }
    };
    const dropMino = () => {
      console.log(besideCount);
      const minoWidth = cMino?.direction?.[0]?.[0]?.length;
      const minoHeight = cMino?.direction[0].length;

      console.log('minoheight', minoHeight);
      if (cMino !== undefined && minoHeight !== undefined && minoWidth !== undefined) {
        if (count <= 20 - minoHeight) {
          for (let i = 0; i < minoWidth; i++) {
            if (
              count + minoHeight <= 19 &&
              cloneMinoMap[count + minoHeight][3 + besideCount + i] !== 0 &&
              cloneMinoMap[count + minoHeight - 1][3 + besideCount + i] !== 0
            ) {
              setCount(0);
              outPutMino();
              setMinoMap(cloneMinoMap);
              break;
            } else {
              const box = [];
              let minoNumber = 0;
              for (let k = 0; k < minoHeight; k++) {
                if (count + 1 !== 20 && cloneMinoMap[count + 1][k] !== 0) {
                  box.push(k);
                  minoNumber = cloneMinoMap[count + 1][k];
                }
              }
              if (minoHeight === 2) {
                cloneMinoMap[count + 1].splice(
                  3 + besideCount,
                  minoWidth + besideCount,
                  ...cMino.direction[0][1],
                );
              }
              cloneMinoMap[count].splice(
                3 + besideCount,
                minoWidth + besideCount,
                ...cMino.direction[0][0],
              );
              if (box.length !== 0) {
                for (let j = 0; j < box.length; j++) {
                  cloneMinoMap[count + 1][j] = minoNumber;
                }
              }
            }
          }
          clearMino(count);

          //minoが下に下がったら、そのまえにあった minoを削除する
        }

        //minoが最下層についたら
        if (count === 20 - minoHeight) {
          setCount(0);
          outPutMino();
          setMinoMap(cloneMinoMap);
          return 0;
        }
        setCount((prevCount) => prevCount + 1);
        setMinoMap(cloneMinoMap);
      }
    };
    if (isPlay) {
      const interval = setInterval(dropMino, 200);

      return () => {
        clearInterval(interval); // 間隔のクリア
      };
    }
  }, [
    cloneMinoMap,
    cloneNextMinos,
    count,
    setCount,
    isPlay,
    currentMino.direction,
    outPutMino,
    besideCount,
    cMino,
  ]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          // 上キーが押された時の処理

          break;
        case 'ArrowDown':
          // 下キーが押された時の処理
          break;
        case 'ArrowLeft':
          // 左キーが押された時の処理

          setBesideCount(besideCount - 1);
          break;
        case 'ArrowRight':
          // 右キーが押された時の処理
          setBesideCount(besideCount + 1);
          break;
      }
    };

    // イベントリスナーを追加
    document.addEventListener('keydown', handleKeyDown);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [besideCount, setIsPlay]);
  return { minoMap, board, startPlay };
};
