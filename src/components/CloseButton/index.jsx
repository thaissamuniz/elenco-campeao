import styles from './CloseButton.module.scss';
export default function CloseButton() {
    const closeCard = () => {
        window.location = ('/');
    }
    return (
        <div className={styles.close} onClick={closeCard}></div>
    )
}