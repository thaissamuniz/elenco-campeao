import CardInfo from '../CardInfo';
import styles from './CardModal.module.scss';
import CloseButton from '../CloseButton';
import NextPreviewButton from '../NextPreviewButton';
import GraficDesk from '../GraphicDesk';
import CardImage from '../CardImage';
import { Link, useParams } from 'react-router-dom';
import data from '../../assets/libertadores-palmeiras-teste-dev.json';

export default function CardModal() {
    let { index } = useParams();
    const player = data[index];
    const next = (parseInt(index) + 1) < data.length ? parseInt(index) + 1 : 0;
    const prev = (parseInt(index) - 1) >= 0 ? parseInt(index) - 1 : (data.length - 1);

    return (
        <div className={styles.modal}>
            <CloseButton />
            <div className={styles['modal-header__desk']} >
                <div>
                    <div className={styles['modal-header__box']}>
                        <CardImage image={`../src/assets/players/${player.foto}`} modalDesk />
                    </div>
                    <p className={styles['player-position']}><strong>{player.posicao}</strong><br />{player.idade} anos</p>
                </div>
                <div className={styles['modal-graphic__desk']}>
                    <GraficDesk games={player.jogos} goals={player.gols} />
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
                <Link to={`/card/${prev}`}>
                    <NextPreviewButton text={'Anterior'} />

                </Link>
                <Link to={`/card/${next}`}>
                    <NextPreviewButton text={'Próximo'} rigth />
                </Link>
            </div>
        </div>
    )
}