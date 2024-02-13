import CardInfo from '../CardInfo';
import styles from './CardModal.module.scss';
import CloseButton from '../CloseButton';
import NextPreviewButton from '../NextPreviewButton';
import GraficDesk from '../GraphicDesk';
import CardImage from '../CardImage';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import data from '../../assets/libertadores-palmeiras-teste-dev.json';
import { useEffect, useState } from 'react';
import getPlayers from '../../services/player-service';
const defaultPlayer = { height: 0, jogos: 0, gols: 0 };


export default function CardModal() {
    const nav = useNavigate();
    let { name } = useParams();
    const [data, setData] = useState([defaultPlayer]);

    const fetchData = async () => {
        const jsonData = await getPlayers();
        setData(jsonData);
    };

    const index = data.findIndex(player => player.nome === name);
    let player = data[index];

    if (data.length === 1 && data[0].nome === undefined) {
        player = data[0];
    }

    useEffect(() => {
        if (player === undefined) {
            nav('/')
            return
        }

    }, [player])

    useEffect(() => {
        fetchData();
    }, []);

    const nextIndex = (index + 1) < data.length ? index + 1 : 0;
    const prevIndex = (index - 1) >= 0 ? index - 1 : (data.length - 1);

    if (!player) return

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
                <Link to={`/jogador/${data[prevIndex].nome}`}>
                    <NextPreviewButton text={'Anterior'} />

                </Link>
                <Link to={`/jogador/${data[nextIndex].nome}`}>
                    <NextPreviewButton text={'Próximo'} rigth />
                </Link>
            </div>
        </div>
    )
}