import styles from './Graphic.module.scss';

export default function Graphic({ games, goals }) {
    return (

        <div className={styles.graphic}>
            <div className={styles['graphic-content']}>
                <span className={styles['graphic-title']} >Jogos</span>
                <div className={styles['graphic-base']}></div>
                <div className={styles['graphic-bar'] + ' ' + styles['graphic-bar__games']} ></div>
                <span className={styles['graphic-number']} >{games}</span>
            </div>
            <div className={styles['graphic-content']} >
                <span className={styles['graphic-title'] + ' ' + styles['graphic-title__goals']} >Gols</span>
                <div className={styles['graphic-base']} ></div>
                <div className={styles['graphic-bar'] + ' ' + styles['graphic-bar__goals']} ></div>
                <span className={styles['graphic-number']}>{goals}</span>
            </div>
        </div>
    )
}