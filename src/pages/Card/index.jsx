import styles from './Card.module.scss';
import CardModal from "../../components/CardModal";

export default function Card() {
    return (
        <div className={styles.card}>
            <CardModal />
        </div>
    )
}