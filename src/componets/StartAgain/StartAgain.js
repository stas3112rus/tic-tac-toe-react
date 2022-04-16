import { useSelector, useDispatch  } from 'react-redux';
import {startAgain} from '../../actions/action'
import './StartAgain.scss'

const StartAgain = () =>{

    const {winner, stepCount} =  useSelector(state => state.Game);
    const dispatch = useDispatch();
    

    const startNewGame = () =>{
        dispatch(startAgain());
    }

    const btn = ()=>{
        return(
            <button
                onClick={startNewGame}
                className="button"
            >Начать заново
        </button>
        )
    }

    const content = (winner || stepCount === 9) ? btn() : null;

    return (
        <>
        {content}
        </>
    )
}

export default StartAgain;