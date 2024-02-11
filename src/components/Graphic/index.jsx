import { useState } from 'react';
import styles from './Graphic.module.scss';
import { useEffect } from 'react';

export default function Graphic({ games, goals }) {
    const [gamesBarWidth, setGamesBarWidth] = useState(0);
    const [goalsBarWidth, setGoalsBarWidth] = useState(0);

    useEffect(() => {
        setGamesBarWidth((games / 13) * 100);
        setGoalsBarWidth((goals / 6) * 46);

    }, [games, goals]);

    return (

        <div className={styles.graphic}>
            <div className={styles['graphic-content']}>
                <span className={styles['graphic-title']} >Jogos</span>
                <div className={styles['graphic-base']}></div>
                <div className={styles['graphic-bar'] + ' ' + styles['graphic-bar__games']} style={{ width: gamesBarWidth }}></div>
                <span className={styles['graphic-number']} >{games}</span>
            </div>
            <div className={styles['graphic-content']} >
                <span className={styles['graphic-title'] + ' ' + styles['graphic-title__goals']} >Gols</span>
                <div className={styles['graphic-base']} ></div>
                <div className={styles['graphic-bar'] + ' ' + styles['graphic-bar__goals']} style={{ width: goalsBarWidth }}></div>
                <span className={styles['graphic-number']}>{goals}</span>
            </div>
        </div>
    )
}