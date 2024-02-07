import CardImage from "../CardImage";
import Graphic from "../Graphic";
import PlayerInfo from "../PlayerInfo";
import SeeMoreButton from "../SeeMoreButton";
import styles from './CardInfo.module.scss';

export default function CardInfo({ image, name, position, age, games, goals }) {
    return (
        <div className={styles['card-info']}>
            <CardImage image={image} />
            <div className={styles['card-info__details']}>
                <PlayerInfo name={name} position={position} age={age} />
                <Graphic games={games} goals={goals} />
            </div>
        </div>
    )
}