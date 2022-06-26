import reactImg from './assets/react.png';
import styles from './styles/app.module.scss';
import { ClickCounter } from './ClickCounter';

function App() {
  return (
    <div className={styles.app}>
      <div>
        App {process.env.NODE_ENV} {process.env.name}1224141 dwadwadwddwa d214
      </div>
      <div>
        <img src={reactImg} alt="react" />
      </div>
      <ClickCounter />
    </div>
  );
}

export default App;
