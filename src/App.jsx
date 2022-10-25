import logo from './logo.svg';
import styles from './App.module.css';
import { Routes, Route } from '@solidjs/router'
import KitchenSink from './kitchen-sink';

const DefaultDisplay = () => {
  return <div class={styles.App}>
    <header class={styles.header}>
      <img src={logo} class={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.jsx</code> and save to reload.
      </p>
      <a
        class={styles.link}
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solidjs now
      </a>
    </header>
  </div>
};

function App() {
  return (
    <Routes>
      <Route path="/kitchen/sink" component={KitchenSink} />
      <Route path="/" component={DefaultDisplay} />
    </Routes>
  );
}

export default App;
