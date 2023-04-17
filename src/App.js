import './styles/App.css';
import Cards from "./components/Cards";
import ControlPanel from "./components/ControlPanel";
import {useState} from "react";
import {getMixedMus} from "./components/mixedMus";


function App() {
const [mixedMus, setMixedMus] = useState(getMixedMus)
    const clickCard = (p) => {
    setMixedMus(mixedMus.map((el, ind)=> ind === p.index ? {...el,isFlipped: !el.isFlipped} : el))
console.log(p)
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
