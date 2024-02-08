import styles from './NextPreviewButton.module.scss';

export default function NextPreviewButton({ text, rigth }) {
    const buttonSide = rigth ? 'button-rigth' : 'button-left';

    return (
        <div className={`${styles.button} ${styles[buttonSide]}`}><span>{text}</span></div>
    )
}