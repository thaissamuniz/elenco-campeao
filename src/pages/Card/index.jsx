import styles from './Card.module.scss';
import animationStyles from '../../styles/Animation.module.scss';
import CardModal from "../../components/CardModal";

export default function Card() {
    return (
        <div className={`${styles.card} ${animationStyles['scale-in']}`}>
            <CardModal />
        </div>
    )
}