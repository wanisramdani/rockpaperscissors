import React from "react";

interface ScoreContextProps { 
    score: number;
    setScore: (score: number) => void;
}

const ScoreContext = React.createContext<ScoreContextProps>({} as ScoreContextProps);

export const useScoreContext = () => React.useContext(ScoreContext);

export default ScoreContext;

