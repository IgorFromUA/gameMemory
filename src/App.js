import './styles/App.css';
import Cards from "./components/Cards";
import ControlPanel from "./components/ControlPanel";
import WinPage from "./components/WinPage"
import {useState} from "react";
import {getMixedMus} from "./components/mixedMus";


function App() {
    const [sizeGame, setSizeGame] = useState(4)
    const [mixedMus, setMixedMus] = useState(getMixedMus(sizeGame))
    const [countClick, setCountClick] = useState(0)
    const [moves, setMoves] = useState(0)
    const [findPare, setFindPare] = useState(0)

    const [time, setTime] = useState('00:00')
    const [idInterval, setIdInterval] = useState(0)

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
            setFindPare(findPare +1)

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
    if(findPare === sizeGame/2){
        clearInterval(idInterval)
    }

    const clickCard = (p) => {
        if (!p.isCouple && !p.isFlipped && countClick < 2 && idInterval) {
            setMixedMus(mixedMus.map((el, ind) => ind === p.index ? {...el, isFlipped: !el.isFlipped, index: ind} : el))
            setCountClick(countClick + 1)
        }

    }
    const reSize = (size) => {
        clearInterval(idInterval)
        setMixedMus(getMixedMus(size))
        setSizeGame(size)
        setTime('00:00')
        setIdInterval(0)
        setMoves(0)
        setFindPare(0)
    }
    const timer = () => {
        let t = 0
        const id = setInterval(() => {
            ++t
            let mm = parseInt(t/60) + ''
            let ss = t%60 + ''
            let time= `${mm.length-1 ? mm : '0'+mm}:${ss.length-1 ? ss : '0'+ss}`
            setTime(time)
        }, 1000)

        setIdInterval(id)
    }
    const reset = () => {
        clearInterval(idInterval)

        setMixedMus(getMixedMus(sizeGame))
        setMoves(0)
        setTime('00:00')
        setFindPare(0)
        setIdInterval(0)
    }
    const start = () => {
        if (idInterval) {
           reset()
        } else {
            timer()
        }
    }
    return (
        <div className='game'>
            <ControlPanel
                moves={moves}
                time={time}
                value={sizeGame}
                onChange={(size)=>reSize(size)}
                clickStart={start}
            />
            {findPare === sizeGame / 2
                ? <WinPage
                    moves={moves}
                    time={time}
                    reset={reset}
                />
                : <Cards
                    mixedMus={mixedMus}
                    click={clickCard}
                    size={sizeGame}
                />}
        </div>
    )
}

export default App;
