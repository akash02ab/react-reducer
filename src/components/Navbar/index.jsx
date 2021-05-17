import './style.css';
import { useContext } from "react";
import CounterContext from "../../contexts/CounterStore";

const Navbar = () => {
    const { counterState } = useContext(CounterContext);

    return(
        <div className="nav">
            <h1>Navbar</h1>
            <h1>{ counterState.counterValue }</h1>
        </div>
    );
}

export default Navbar;