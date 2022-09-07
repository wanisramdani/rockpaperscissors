import React from 'react'
import Image from 'next/image';
import { Hand } from '../../enums/Hand';
import Button from '../button';
import HandContainer from '../handContainer'
import Paper from '../Paper'
import Rock from '../Rock'
import Scissors from '../Scissors'

type Props = {
    playerHand?: Hand;
    setPlayerHand: (hand: Hand) => void;
}

const PickHand = ( props: Props ) => {
    
    const [computerHand, setComputerHand] = React.useState(0);
    
    return (
            <div className='flex mt-20 justify-center items-center translate-x-28 md:translate-x-4'>
                <div className='relative'>
                    {/*<div className='w-0 h-0 border-b-green-600 border-b-[100px] border-r-transparent border-r-[50px] border-l-transparent border-l-[50px] absolute  '>
                    </div>*/}
                    <div className='absolute' >
                        <Image src="/images/bg-triangle.svg" alt='triangle' width={400} height={300}/>
                    </div>

                    <div className='flex'>
                        <button 
                            className='-translate-x-10 -translate-y-16'
                            onClick={() => {
                                props.setPlayerHand(Hand.Paper);
                                setComputerHand(Math.floor(Math.random() * 3) + 1 );
                                console.log(computerHand);
                            } }
                            >
                            <Paper />
                        </button>
                        
                        <button 
                            className='translate-x-24 md:translate-x-40 -translate-y-16'
                            onClick={ () => (
                                props.setPlayerHand(Hand.Scissors)
                            )}
                        >
                            <Scissors />
                        </button>

                        <button 
                        className='order-last -translate-x-48 translate-y-48'
                        onClick={() => (
                            props.setPlayerHand(Hand.Rock)
                        )}
                        >
                            <Rock />
                        </button>
                    </div>
                </div>
            </div>

    )
}

export default PickHand