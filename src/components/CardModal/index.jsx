import CardInfo from '../CardInfo';
import styles from './CardModal.module.scss';
import CloseButton from '../CloseButton';
import NextPreviewButton from '../NextPreviewButton';
import GraficDesk from '../GraphicDesk';
import CardImage from '../CardImage';
import { useParams } from 'react-router-dom';
import data from '../../assets/libertadores-palmeiras-teste-dev.json';

export default function CardModal() {
    let { index } = useParams();
    const player = data[index];

    const nextCard = () => {
        const next = parseInt(index) + 1;
        if (next < data.length) {
            window.location = `/card/${next}`;
        }
    }

    const prevCard = () => {
        const prev = parseInt(index) - 1;
        if (prev >= 0) {
            window.location = `/card/${prev}`;
        }
    }

    return (
        <div className={styles.modal}>
            <CloseButton />
            <div className={styles['modal-header__desk']} >
                <div className={styles['modal-header__box']}>
                    <CardImage image={`../src/assets/players/${player.foto}`} modalDesk />
                </div>
                <p className={styles['player-position']}><strong>{player.posicao}</strong><br />{player.idade}</p>
                <div className={styles['modal-graphic__desk']}>
                    <GraficDesk />
                </div>
            </div>

            <div className={styles['modal-header']}>
                <CardInfo image={`../src/assets/players/${player.foto}`} name={player.nome} age={player.idade} position={player.posicao} games={player.jogos} goals={player.gols} />
            </div>
            <div>
                <p className={styles['player-name']}>{player.nome}</p>
                <div className={styles['player-info']}>
                    <p className={styles['modal-text']}>
                        {player.texto}
                    </p>
                </div>
                <div className={styles.blur}></div>
            </div>
            <div className={styles['modal-buttonbox']}>
                <div onClick={prevCard}>
                    <NextPreviewButton text={'Anterior'} />
                </div>
                <div onClick={nextCard}>
                    <NextPreviewButton text={'Próximo'} rigth />
                </div>
            </div>
        </div>
    )
}