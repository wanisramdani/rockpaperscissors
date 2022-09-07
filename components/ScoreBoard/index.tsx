import React, { FC } from 'react'
import { useScoreContext } from '../../contexts/ScoreContext';
import Image from 'next/image'


const ScoreBoard: FC = ( ) => {
    const { score, setScore } = useScoreContext();

    return (  
        <div className='flex w-min p-4 mx-auto mt-20 justify-center items-center  space-x-80 border border-gray-400 rounded-lg'>
            {/*<Image src="/images/logo.svg" width={50} height={50} />*/}
            <div className='text-white uppercase font-bold tracking-wide text-lg '>
                <span className='flex'>Rock</span>
                <span className='flex'>Paper</span>
                <span className='flex'>Scissors</span>
            </div>
            
            <div className='bg-white text-gray-700 px-8 py-2 rounded-md'>
                <span className='text-blue-800 block font-bold text-sm tracking-widest'>Score</span>
                <span className='font-barlowBlack  text-3xl flex justify-center items-center'>{score}</span>
            </div>
      </div>
    );
}
 
export default ScoreBoard;