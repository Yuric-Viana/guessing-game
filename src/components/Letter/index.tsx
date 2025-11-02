import styles from './styles.module.css'

type Props = {
    color?: 'default' | 'correct' | 'wrong'
    value?: string
    size?: 'default' | 'small'
}

export function Letter({ value = '', color = 'default', size = 'default' }: Props) {
    return <div className={`
        ${styles.container}
        ${color === 'correct' && styles.letterCorrect}
        ${color === 'wrong' && styles.letterWrong}
        ${size === 'small' && styles.letterSmall}
    `}>
        <strong>{value}</strong>
    </div>
}