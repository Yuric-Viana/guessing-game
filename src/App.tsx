import styles from './app.module.css'

import { Header } from './components/Header'
import { Letter } from './components/Letter'
import { Tip } from './components/Tip'

export function App() {

  return <div className={styles.container}>
    <main>
      <Header />
      <Tip />
      <Letter />
    </main>
  </div>
}