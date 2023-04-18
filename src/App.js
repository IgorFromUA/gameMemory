import './styles/App.css';
import Cards from "./components/Cards";
import ControlPanel from "./components/ControlPanel";
import {useState} from "react";
import {getMixedMus} from "./components/mixedMus";


function App() {
    const [mixedMus, setMixedMus] = useState(getMixedMus)
    const [countClick, setCountClick] = useState(0)

    if (countClick === 2) {
        const cardsComparison = mixedMus.filter(el => el.isFlipped && !el.isCouple)
        if (cardsComparison[0].value === cardsComparison[1].value) {
            setMixedMus(mixedMus.map((el, ind) => {
                if (ind === cardsComparison[0].index || ind === cardsComparison[1].index) {
                    return {...el, isCouple: !el.isCouple}
                }
                return el
            }))
            setCountClick(0)

        } else {
            setTimeout(() => {
                setMixedMus(mixedMus.map((el, ind) => {
                    if (ind === cardsComparison[0].index || ind === cardsComparison[1].index) {
                        return {...el, isFlipped: !el.isFlipped}
                    }
                    return el
                }))
                setCountClick(0)
            }, 1000)
        }
    }
    const clickCard = (p) => {
        if (!p.isCouple && !p.isFlipped && countClick < 2) {
            setMixedMus(mixedMus.map((el, ind) => ind === p.index ? {...el, isFlipped: !el.isFlipped, index: ind} : el))
            setCountClick(countClick + 1)
        }

    }
    return (
        <div className='game'>
            <ControlPanel/>
            <Cards
                mixedMus={mixedMus}
                click={clickCard}
            />
        </div>
    )
}

export default App;
