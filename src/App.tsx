import styles from './app.module.css'

import { WORDS, type Challenge } from './utils/words'

import { Header } from './components/Header'
import { Letter } from './components/Letter'
import { Tip } from './components/Tip'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { LettersUsed, type LettersUsedProps } from './components/LettersUsed'

import { useEffect, useState } from 'react'

export function App() {
  const [attempts, setAttempts] = useState(0)
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [letter, setLetter] = useState('')
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [shake, setShake] = useState(false)

  const LIMIT_ATTEMPTS = 5

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setAttempts(0)
    setLetter('')
    setLettersUsed([])
  }

  function handleConfirm() {
    if (!challenge) return

    const value = letter.toUpperCase()
    const exists = lettersUsed.find((char) => char.value === value)

    if (exists) {
      setLetter('')
      return alert("Você já selecionou essa letra!")
    }

    const hits = challenge.word.split('').filter((char) => char === value).length
    const correct = hits > 0
    const currentScore = attempts + hits

    setLettersUsed((prevState) => [...prevState, { value, correct }])
    setAttempts(currentScore)
    setLetter('')

    if (!correct) {
      setShake(true)
      setTimeout(() => setShake(false), 300)
    }
  }

  useEffect(() => {
    startGame()
  }, [])

  function endGame(message: string) {
    alert(message)
    startGame()
  }

  useEffect(() => {
    if (!challenge) return

    setTimeout(() => {
      if (attempts === challenge.word.length) return endGame("Parabéns, você acertou a palavra!")

      const attemptsLimit = challenge.word.length + LIMIT_ATTEMPTS
      if (lettersUsed.length === attemptsLimit) return endGame("Poxa, você alcançou o número máximo de tentativas!")
    }, 200)
  }, [attempts, lettersUsed.length])

  function handleRestartGame() {
    const isConfirmed = window.confirm("Tem certeza de que deseja reiniciar o jogo?")

    if (isConfirmed) startGame()
  }

  if (!challenge) return

  return <div className={styles.container}>
    <main>
      <Header attempts={lettersUsed.length} max={challenge.word.length + LIMIT_ATTEMPTS} onRestart={handleRestartGame} />

      <Tip tip={challenge?.tip} />

      <div className={`${styles.word} ${shake && styles.shake}`}>
        {
          challenge.word.split('').map((letter, index) => {
            const letterUsed = lettersUsed.find((used) => used.value.toUpperCase() === letter.toUpperCase())

            return <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? 'correct' : 'default'} />
          })
        }
      </div>

      <h3>Palpite</h3>
      <div className={styles.guess}>
        <Input placeholder='?' value={letter} maxLength={1} autoFocus onChange={(e) => setLetter(e.target.value)} />
        <Button title='Confirmar' onClick={handleConfirm} />
      </div>

      <LettersUsed data={lettersUsed} />
    </main>
  </div>
}