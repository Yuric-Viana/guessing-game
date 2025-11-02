import styles from './styles.module.css'

type Props = {
    color?: 'default' | 'correct' | 'wrong'
    correct?: boolean
    value?: string
}

export function Letter({ value, color = 'default', correct }: Props) {
    return <div className={`
        ${styles.container}
        ${color === 'correct' && styles.letterCorrect}
        ${color === 'wrong' && styles.letterWrong}
    `}>
        <strong>R</strong>
    </div>
}