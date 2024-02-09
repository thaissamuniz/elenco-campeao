import styles from './CheckboxInput.module.scss';

export default function CheckboxInput({ text, value, checked, onChange }) {

    const handleClick = () => {
        const newValue = checked ? '' : value;
        onChange && onChange(newValue);
    };


    return (
        <label className={styles['container-label']}>
            {text}
            <input type="radio" name='option' value={value} checked={checked} onClick={handleClick} />
            <span className={styles.checkmark}></span>
        </label>
    )
}