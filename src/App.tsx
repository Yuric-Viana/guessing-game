import styles from './app.module.css'

import { Header } from './components/header'

export function App() {

  return <div className={styles.container}>
    <Header />
  </div>
}