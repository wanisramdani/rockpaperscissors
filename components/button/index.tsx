import React, { FC } from 'react'

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
const defaultButton:string = "\
    py-2 px-10\
    rounded\
    border\
    border-white \
    hover:bg-white \
    font-bold \
    cursor-pointer tracking-widest\
    transition ease-out duration-500 ";

const Button: FC<IButton> = ( props ) => {
    return (  
        <button className={defaultButton + props.className} onClick={props.onClick}> 
            {props.children}
        </button> 
    );
}
 
export default Button;