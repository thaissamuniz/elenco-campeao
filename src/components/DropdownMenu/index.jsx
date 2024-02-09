import { useState } from 'react';
import styles from './DropdownMenu.module.scss';
const positions = ['Todas as posições', 'Goleiro', 'Zagueiro', 'Lateral Direito', 'Lateral Esquerdo', 'Volante', 'Meia', 'Atacante', 'Treinador'];
const ages = ['Todas as idades', '0-19 anos', '20-29 anos', '30-39 anos', '40-49 anos'];

export default function DropdownMenu({ text, type, onChange }) {
    const [active, setActive] = useState(false);

    const [value, setValue] = useState(text);

    const getFilterValue = (event) => {
        setValue(event.target.textContent);
        onChange && onChange(event.target.textContent);
    };

    const handleOpen = () => setActive(!active);

    const className = (active ? '__active' : '');
    const filterType = type === 'positions' ? positions : ages;

    return (
        <div>
            <div className={styles.dropdown} onClick={handleOpen}>
                <span>{value}</span>
            </div>
            <ul className={styles['dropdown-content' + className]}>
                {
                    filterType.map((element, index) => <li key={index} className={styles['dropdown-item']} onClick={getFilterValue} >{element}</li>)
                }
            </ul>
        </div>
    )
}