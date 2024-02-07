import CardInfo from '../CardInfo';
import SeeMoreButton from '../SeeMoreButton';
import styles from './Card.module.scss';

export default function Card({ image, name, position, age, games, goals }) {
    
    return (
        <div className={styles.card}>
            <CardInfo image={image} name={name} position={position} age={age + ' anos'} games={games} goals={goals} />
            <div className={styles['card-seeMore']}>
                <SeeMoreButton />
            </div>
        </div>
    )
}