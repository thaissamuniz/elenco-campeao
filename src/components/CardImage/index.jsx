import styles from './CardImage.module.scss';
export default function CardImage({ image, modalDesk }) {
    const className = modalDesk ? styles['image-modal__desk'] : styles['image'];
    return (
        <div>
            <img src={image} className={className} />
        </div>
    )
}