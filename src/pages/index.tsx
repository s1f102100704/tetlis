import styles from './index.module.css';
import GameBoard from '../components/GameBoard';
import { useInfo } from '../hooks/useInfo';
const Home = () => {
  const { gameMap } = useInfo();
  return (
    <div className={styles.container}>
      <GameBoard gameMap={gameMap} />
    </div>
  );
};

export default Home;
