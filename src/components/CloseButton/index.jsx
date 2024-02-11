import { Link } from 'react-router-dom';
import styles from './CloseButton.module.scss';
export default function CloseButton() {

    return (
        <Link to={'/'}>
            <div className={styles.close}></div>
        </Link>
    )
}