import React from 'react'
import { useHandContext } from '../../contexts/HandContext'
import { useScoreContext } from '../../contexts/ScoreContext'
import { findWinner } from '../../utils/rules'
import Button from '../button'
import Paper from '../Paper'
import Rock from '../Rock'
import Scissors from '../Scissors'
import Skeleton from '../skeleton'

type Props = {}

const Play = (props: Props) => {
  const { hand, setHand } = useHandContext();
  const { score, setScore } = useScoreContext();
  const [loading, setLoading] = React.useState(true);
  const [computerHandState, setComputerHandState] = React.useState(Math.floor(Math.random() * 3) + 1);
  const [winner, setWinner] = React.useState("");

 

  React.useEffect(() => {
      setWinner(findWinner(hand, computerHandState, score)["winner"]);
      console.log("Winner: ", findWinner(hand, computerHandState, score)["winner"]);
  }, [hand]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false),
      setScore(findWinner(hand, computerHandState, score)["score"])
    } , 1000);
    
  }, [computerHandState]);



  const PlayerHand = () => {
    switch (hand) {
      case 0:
        return <Skeleton />
      case 1:
        return <Rock />
      case 2:
        return <Paper />
      case 3:
        return <Scissors />
      default:
        return <div></div>
    }
  }

  const SkelatonWait = () => (
    setTimeout(() => {setLoading(false)} , 1000),
    <Skeleton /> 
  )
 
  const ComputerHand = () => {    
    switch (computerHandState) {
      case 1:
        return <Rock />
      case 2:
        return <Paper />
      case 3:
        return <Scissors />
      default:
        return <SkelatonWait/>
    }
  }

  const Comptetion = () => {
    switch (winner) {
      case "Player":
        return <div>You Win</div>
      case "Computer":
        return <div>You Lose</div>
      case "Tie":
        return <div>Draw</div>
      default:
        return <div></div>
    }
  }

  const playAgainButton:string = "\
        py-2 px-10\
        border\
        rounded\
        border-white \
        hover:bg-white \
        uppercase text-xs text-white hover:text-red \
        font-bold \
        cursor-pointer tracking-widest\
        transition ease-out duration-500";

  const detailsText = "font-barlowBold text-white uppercase flex  justify-center mb-5 tracking-widest";
  
  return (
    <div>
      <div className='flex justify-center items-center relative translate-x-16 md:translate-x-0 translate-y-32'>
        <div className='flex justify-center items-center'>
          {/* Player's pick */}
          <div className='-order-1 mr-5'>
            <div className={detailsText}>
              You picked
            </div>
            <div>
              <PlayerHand/>
            </div>
          </div>
          
           {/* Computer's pick */}
          <div className='order-1 ml-5'>
          {loading ? <SkelatonWait /> 
            : <div> 
                  <div className={detailsText}>
                    The house picked
                  </div>
                    <ComputerHand />
              </div>
          }
          </div>

          {/* Winner */}
          <div className=''>
            <div className='text-white uppercase flex justify-center text-3xl font-black m-2 text-center'>
             {loading ? <div></div> : <Comptetion />}
            </div>
            <Button
              className="uppercase text-xs text-white hover:text-red"
              onClick={() => {
                setHand(0)
                setComputerHandState(0);
              }
              }>
              Play again
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Play