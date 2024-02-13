import Card from "../../components/Card";
import CheckboxInput from "../../components/CheckboxInput";
import DropdownMenu from "../../components/DropdownMenu";
import Header from "../../components/Header";
import styles from './Home.module.scss';
import HomeText from "../../components/HomeText";
import { useEffect, useState } from "react";
import getPlayers from "../../services/player-service";

export default function Home() {
    const [position, setPosition] = useState('Todas as posições');
    const [age, setAge] = useState('Todas as idades');
    const [selectedOption, setSelectedOption] = useState('');
    const [data, setData] = useState([]);

    const getPlayerAge = (age) => {
        switch (age) {
            case 'Todas as idades':
                return [0, 49]
            case '0-19 anos':
                return [0, 19]
            case '20-29 anos':
                return [20, 29]
            case '30-39 anos':
                return [30, 39]
            case '40-49 anos':
                return [40, 49]
            default:
                return [0, 49]
        }
    }

    const filterAge = getPlayerAge(age);

    const fetchData = async () => {
     const jsonData = await getPlayers();
        setData(jsonData);
    };

    useEffect(() => {
        fetchData();
      }, []);

    const filterResult = data.filter(player => {
        const positionMatch = position === 'Todas as posições' || (player.posicao === position);
        const ageMatch = age === 'Todas as idades' || (player.idade >= filterAge[0] && player.idade <= filterAge[1]);
        const finalMatch = selectedOption === '' || (selectedOption === 'final' && (player.final === 'sim'));
        const goalMatch = selectedOption === '' || (selectedOption === 'gol' && (player.gols > 0));
        return positionMatch && ageMatch && (finalMatch || goalMatch);
    });

    return (
        <>
            <Header />
            <main className={styles.home}>
                <div className={styles['home-content']}>
                    <div className={styles['home-introduction']}>
                        <HomeText />
                    </div>
                    <DropdownMenu text={'Todas as posições'} type={'positions'} onChange={setPosition} />

                    <DropdownMenu text={'Todas as idades'} onChange={setAge} />
                    <div className={styles['home-checkbox']}>
                        <CheckboxInput text={'Somente quem marcou gol'} value={'gol'} checked={selectedOption === 'gol'} onChange={setSelectedOption} />
                        <CheckboxInput text={'Somente quem jogou na final'} value={'final'} checked={selectedOption === 'final'} onChange={setSelectedOption} />
                    </div>
                </div>
                <div className={`${styles['home-container']} ${styles['home-content']}`}>
                    {
                        filterResult.length === 0 ? 'Nenhum resultado para essa busca' :
                            filterResult.map((player, index) => (
                                <Card
                                    key={index}
                                    index={index}
                                    image={'./src/assets/players/' + player.foto}
                                    name={player.nome}
                                    position={player.posicao}
                                    age={player.idade}
                                    games={player.jogos}
                                    goals={player.gols}
                                />
                            ))
                    }
                </div>
            </main>
        </>
    )
}