import { createContext, useReducer } from "react";

let CounterContext = createContext({
    counterValue: 0,
    dispatch: () => {}
});

export default CounterContext;

let reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return {counterValue: state.counterValue + 1}; 
        case 'decrement':
            return {counterValue: state.counterValue - 1}; 
        case 'reset':
            return {counterValue: 0};
        default: 
            throw new Error ("wrong Action");
    }
}

export function CounterContextProvider (props) {
    let initialState = {counterValue: 0};
    let [counterState, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{counterState, dispatch}}>
            {props.children}
        </CounterContext.Provider>
    )
}