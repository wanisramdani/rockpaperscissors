import React from 'react'
import Button from '../button'
import RulesModal from '../modal/RulesModal'

type Props = {

}

export default function Footer({}: Props) {
    const [showRulesModal, setShowRulesModal] = React.useState(false);
    const handleOnClose = () => setShowRulesModal(false);
  
  return (
    <footer className='flex justify-center items-center relative'>
        <div className="absolute -bottom-96 translate-x-16 md:translate-x-0">
            <div className='text-white'>
                <p className='block text-center'>Challenge by <a className='text-red b' href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                </p>
                <p className='text-center'>
                    Coded by <a className='text-yellow' href="https://github.com/wanisramdani">Wanis Ramdani</a>.
                </p>
            </div>
            
            <Button 
                className="absolute translate-x-8 md:-translate-y-8 md:-right-80 mt-5 md:mt-0 uppercase text-xs text-white hover:text-black" 
                onClick={() => setShowRulesModal(true)}
            >
                Rules
            </Button>
        </div>
        <RulesModal onClose={handleOnClose} visible={showRulesModal} />
    </footer>
  )
}