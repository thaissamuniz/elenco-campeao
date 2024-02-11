import { useEffect, useState } from 'react';
import styles from './GraphicDesk.module.scss';

export default function GraficDesk({ games, goals }) {

    const [gamesBarHeight, setGamesBarHeight] = useState(0);
    const [goalsBarHeight, setGoalsBarHeight] = useState(0);

    useEffect(() => {
        setGamesBarHeight((games / 13) * 100);
        setGoalsBarHeight((goals / 6) * 46);

    }, [games, goals]);

    return (
        <div className={styles['graphic-desk']}>
            <div className={styles['graphic-desk__container']}>
                <div className={styles['graphic-desk__content']}>
                    <span className={styles['graphic-desk__number']}>{games}</span>
                    <div className={styles['graphic-desk__bar']} style={{ height: gamesBarHeight }}></div>
                    <div className={styles['graphic-desk__base']}></div>
                    <span className={styles['graphic-desk__title']}>Jogos</span>
                </div>
                <div className={styles['graphic-desk__content']}>
                    <span className={styles['graphic-desk__number']}>{goals}</span>
                    <div className={styles['graphic-desk__bar'] + ' ' + styles['goals-bar']} style={{ height: goalsBarHeight }}></div>
                    <div className={styles['graphic-desk__base']} ></div>
                    <span className={styles['graphic-desk__title']}>Gols</span>
                </div>
            </div>
        </div>
    )
}