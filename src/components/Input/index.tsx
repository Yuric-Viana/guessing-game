import styles from './styles.module.css'

type Props = {
    letter?: string
}

export function Input({ letter, ...rest }: Props) {
    return <input type="text" placeholder='?' maxLength={1} autoFocus {...rest} className={styles.container} />
}