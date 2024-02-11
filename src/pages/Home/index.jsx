import Card from "../../components/Card";
import CheckboxInput from "../../components/CheckboxInput";
import DropdownMenu from "../../components/DropdownMenu";
import Header from "../../components/Header";
import styles from './Home.module.scss';
import HomeText from "../../components/HomeText";
import data from "../../assets/libertadores-palmeiras-teste-dev.json";
import { useEffect, useState } from "react";

export default function Home() {
    const [position, setPosition] = useState('Todas as posições');
    const [initialAge, setInitialAge] = useState(0);
    const [finalAge, setFinalAge] = useState(49);
    const [age, setAge] = useState('Todas as idades');
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        switch (age) {
            case 'Todas as idades':
                setInitialAge(0);
                setFinalAge(49);
                break;
            case '0-19 anos':
                setInitialAge(0);
                setFinalAge(19);
                break;
            case '20-29 anos':
                setInitialAge(20);
                setFinalAge(29);
                break;
            case '30-39 anos':
                setInitialAge(30);
                setFinalAge(39);
                break;
            case '40-49 anos':
                setInitialAge(40);
                setFinalAge(49);
                break;
            default:
                setInitialAge(0);
                setFinalAge(49);
                break;
        }
    }, [age]);


    const filterResult = data.filter(player => {
        const positionMatch = position === 'Todas as posições' || (player.posicao === position);
        const ageMatch = age === 'Todas as idades' || (player.idade >= initialAge && player.idade <= finalAge);
        const finalMatch = selectedOption === '' || (selectedOption === 'final' && (player.final === 'sim'));
        const goalMatch = selectedOption === '' || (selectedOption === 'gol' && (player.gols > 0));
        return positionMatch && ageMatch && (finalMatch || goalMatch);
    })

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
                <div className={styles['home-container'] + ' ' + styles['home-content']}>
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