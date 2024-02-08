import styles from './HomeText.module.scss';

export default function HomeText() {
    return (
        <div>
            <p className={styles['home-date']}>Publicado em 03.08.2021 • Atualizado em 04.08.2021</p>
            <p className={styles['home-introduction']}>Na conquista do tricampeonato da Libertadores pelo Palmeiras, candidatos a herói do título não faltaram. O carioca Deyverson de 30 anos saiu do banco na prorrogação para marcar o gol da vitória por 2 a 1 sobre o Flamengo e ser eleito o melhor do jogo. Com defesas importantes, Weverton também pode ser considerado um dos protagonistas do confronto.</p>
        </div>
    )
}