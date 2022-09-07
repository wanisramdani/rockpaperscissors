import React, { ChangeEvent, MouseEventHandler } from 'react'
import Image from 'next/image'

type Props = {
    visible: boolean,
    closeOnClickOutside?: boolean,
    onClose: () => void
}

const RulesModal = ( props: Props ) => {
    // TODO: whats the correct type for event?
    const handleOnClose = (e: MouseEventHandler<HTMLDivElement>) => {
        if(e.target.id === "rules-modal") {
            props.onClose()
        }
    };


    if (!props.visible) return null
    return (
        <div
            id="rules-modal"
            onClick={handleOnClose}
            className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center '
        >   
            <div className='bg-white p-12 rounded w-full h-full md:w-max md:h-max flex flex-col justify-between relative'>  
                
                <div className='flex justify-center md:justify-start font-bold uppercase text-gray-600 text-2xl font-barlowBold'>
                    Rules
                </div>
                
                <div className="flex justify-center order-last text-center mt-12 md:order-none md:justify-end md:absolute md:translate-x-80 md:-translate-y-10 md:ml-12">
                    <button  onClick={props.onClose}>
                        <Image src="/images/icon-close.svg" alt='rules' width={20} height={20}/>
                    </button>
                </div>

                <div className='mt-8 text-center'>
                    <Image className='' src="/images/image-rules.svg" alt='rules' width={400} height={350}/>
                </div>

            </div>
        </div>
    )
}

export default RulesModal