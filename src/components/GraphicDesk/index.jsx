import styles from './GraphicDesk.module.scss';

export default function GraficDesk() {
    return (
        <div className={styles['graphic-desk']}>
            <div className={styles['graphic-desk__container']}>
                <div className={styles['graphic-desk__content']}>
                    <span className={styles['graphic-desk__number']}>13</span>
                    <div className={styles['graphic-desk__bar']}></div>
                    <div className={styles['graphic-desk__base']}></div>
                    <span className={styles['graphic-desk__title']}>Jogos</span>
                </div>
                <div className={styles['graphic-desk__content']}>
                    <span className={styles['graphic-desk__number']}>6</span>
                    <div className={styles['graphic-desk__bar'] + ' ' + styles['goals-bar']}></div>
                    <div className={styles['graphic-desk__base']} ></div>
                    <span className={styles['graphic-desk__title']}>Gols</span>
                </div>
            </div>
        </div>
    )
}