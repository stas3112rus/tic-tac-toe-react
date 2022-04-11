import { useDispatch, useSelector  } from 'react-redux';

import './header.scss'

const Header = () => {
    
    let {currentStep,  winner, stepCount  } = useSelector(state=> state.Game)

    const getHeader = () => {
        if (stepCount === 0) return "Для начала игры щелкните по полю"

        if (!winner) {
            return `Сейчас ходит ${currentStep}`
        } else {
            return `Победил ${winner}`
        }
    }

    const header = getHeader()
    
    return (
        <div className="header">
            {header}
        </div>
    )
}

export default Header