import styles from './app.module.css'

import { Header } from './components/Header'
import { Letter } from './components/Letter'
import { Tip } from './components/Tip'
import { Input } from './components/Input'
import { Button } from './components/Button'

export function App() {

  return <div className={styles.container}>
    <main>
      <Header />
      <Tip />
      <div className={styles.word}> 
        <Letter />
      </div>

      <h3>Palpite</h3>
      <div className={styles.guess}>
        <Input />
        <Button />
      </div>
    </main>
  </div>
}