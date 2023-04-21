import './styles/App.css';
import Cards from "./components/Cards";
import ControlPanel from "./components/ControlPanel";
import {useState} from "react";
import {getMixedMus} from "./components/mixedMus";


function App() {
    const [sizeGame, setSizeGame] = useState(4)
    const [mixedMus, setMixedMus] = useState(getMixedMus(sizeGame))
    const [countClick, setCountClick] = useState(0)
    const [moves, setMoves] = useState(0)


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
            setMoves(moves + 1)

        } else {
            setTimeout(() => {
                setMixedMus(mixedMus.map((el, ind) => {
                    if (ind === cardsComparison[0].index || ind === cardsComparison[1].index) {
                        return {...el, isFlipped: !el.isFlipped}
                    }
                    return el
                }))
                setCountClick(0)
                setMoves(moves + 1)

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
            <ControlPanel
                moves={moves}
                value={sizeGame}
                onChange={size => {
                    setMixedMus(getMixedMus(size))
                    setSizeGame(size)
                }}
            />
            <Cards
                mixedMus={mixedMus}
                click={clickCard}
                size={sizeGame}
            />
        </div>
    )
}

export default App;
