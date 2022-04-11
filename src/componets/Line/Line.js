import { useSelector  } from 'react-redux';


import './line.scss'
   
const Line = ({name}) => {
    let {winningLine } = useSelector(state=> state.Game);

    const position = winningLine[name];
    console.log (position);

    if (position){

        const classContent = `line__${name} line_${name}-${position}`

        return (
            <div className={classContent}></div>
        )
    } else {
        return null
    }


}

export default Line;