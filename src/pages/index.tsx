import styles from './index.module.css';
import GameBoard from '../components/GameBoard';
import GameInfo from '../components/GameInfo';
import NextMino from '../components/NextMino';
import { useInfo } from '../hooks/useInfo';
import { useGame } from '../hooks/useGame';
const Home = () => {
  const { minoMap } = useGame();
  const { startPlay } = useInfo();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <GameInfo startPlay={startPlay} />
        <GameBoard minoMap={minoMap} />
        <NextMino />
      </main>
    </div>
  );
};

export default Home;
