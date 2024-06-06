import styles from './index.module.css';
import GameBoard from '../components/GameBoard';
import GameInfo from '../components/GameInfo';
import NextMino from '../components/NextMino';
import { useInfo } from '../hooks/useInfo';
import { useGame } from '../hooks/useGame';
const Home = () => {
  const { minoMap, board } = useGame();
  const { isPlay, startPlay, minos } = useInfo();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <GameInfo startPlay={startPlay} />
        <GameBoard minoMap={minoMap} isPlay={isPlay} minos={minos} board={board} />
        <NextMino />
      </main>
    </div>
  );
};

export default Home;
