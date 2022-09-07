import React from "react";
/* 
    Rock = 1,
    Paper = 2,
    Scissors = 3
*/
interface HandContextProps { 
    hand: number;
    setHand: (score: number) => void;
}

const HandContext = React.createContext<HandContextProps>({} as HandContextProps);

export const useHandContext = () => React.useContext(HandContext);

export default HandContext;

