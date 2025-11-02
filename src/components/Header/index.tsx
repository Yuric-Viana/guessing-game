import restart from '../../assets/restart.svg'
import logo from '../../assets/logo.svg'

import styles from './styles.module.css'

type Props = {
    attempts?: number
    max?: number
}

export function Header({ attempts, max }: Props) {
    return <div className={styles.container}>
        <img src={logo} alt="Logo" />

        <header>
            <span>
                <strong>{attempts} </strong> de {max} tentativas
            </span>

            <button type='button'>
                <img src={restart} alt="Botão de reiniciar" />
            </button>
        </header>
    </div>
}