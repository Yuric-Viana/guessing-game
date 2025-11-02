import styles from './styles.module.css'

import tipIcon from '../../assets/tip.svg'

type Props = {
    tip?: string
}

export function Tip({ tip }: Props) {
    return <div className={styles.container}>
        <img src={tipIcon} alt="Ícone de dica" />

        <div>
            <strong>Dica</strong>
            <span>Biblioteca para criar interfaces Web com Javascript.</span>
        </div>
    </div>
}