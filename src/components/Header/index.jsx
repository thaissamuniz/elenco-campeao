import HomeText from '../HomeText';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                <div className={styles['header-title__container']}>
                    <h1 className={styles['header-title']}>o elenco do</h1>
                    <span className={styles['header-title']}>campeão</span>
                </div>
                <p className={styles['header-subtitle']}>conheça os jogadores do palmeiras. vencedor da libertadores 2021</p>
                <div className={styles['header-introduction']}>
                    <HomeText />
                </div>
            </div>
        </header>
    )
}