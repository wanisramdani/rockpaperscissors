import React, { FC } from 'react'

export interface IHandContainer {
    backgroundColor?: string;
    borderColor?: string;
    children?: React.ReactNode;
}
 
const HandContainer: FC<IHandContainer> = ( props ) => {
    return (  
        <div className={props.borderColor + " rounded-full p-4 w-fit shadow-xl"}>
            <div className={props.backgroundColor + " p-10 rounded-full w-fit shadow-xl drop-shadow-2xl"}> 
                {props.children}
            </div> 
        </div>
    );
}
 
export default HandContainer;