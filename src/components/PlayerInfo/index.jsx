import styles from './PlayerInfo.module.scss';

export default function PlayerInfo({ name, position, age }) {
    return (
        <div className={styles['player-info']}>
            <h3 className={styles['player-name']}>{name}</h3>
            <p className={styles['player-details']}>{position} | {age}</p>
        </div>
    )
}