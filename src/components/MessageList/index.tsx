import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg'

export function MessageList(){
    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima! </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="http://github.com/silasgon.png" alt="Silas Gon" />
                        </div>
                        <span>Silas Gon</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima! </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="http://github.com/silasgon.png" alt="Silas Gon" />
                        </div>
                        <span>Silas Gon</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima! </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="http://github.com/silasgon.png" alt="Silas Gon" />
                        </div>
                        <span>Silas Gon</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}