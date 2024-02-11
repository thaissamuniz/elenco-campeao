import styles from './CardImage.module.scss';
import animationStyles from '../../styles/Animation.module.scss';
export default function CardImage({ image, modalDesk }) {
    const className = modalDesk ? styles['image-modal__desk'] : styles['image'];
    return (
        <div>
            <img src={image} className={`${className} ${animationStyles['fade-in']}`} />
        </div>
    )
}