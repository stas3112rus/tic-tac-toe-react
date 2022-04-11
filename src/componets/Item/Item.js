import { useDispatch, useSelector  } from 'react-redux';
import { useEffect, useCallback, useMemo } from 'react';
import {itemFetched, addStep, nextStep, isWinner} from '../../actions/action'

import './Item.scss'

const FieldItem = (props) =>{

    let {rows, cols, dioginals,  currentStep, dioginalPoints, winner, stepCount } = useSelector(state=> state.Game)
    const {field} = useSelector(state => state.FieldItems);

    const dispatch = useDispatch();
    const {itemId} = props;   

    const col = field[itemId]['col'];
    const row = field[itemId]['row'];
    const currentPoint = `${col}-${row}`;
    
    const getDioginal = (point) => {
        let result = [];
        for (let dioginal in dioginalPoints){            
            
            dioginalPoints[dioginal].forEach(dioginalPoint => {
                if (dioginalPoint === point){
                    result.push(dioginal);                  
                }                
            })
                    
        }    
        return result;     
    }

    const dioginal = getDioginal(currentPoint);

    const makeNewArea = () => {         

        const area = {
            rows: {
                ...rows,
                [row]: [...rows[row], currentStep]
            },
            cols: {
                ...cols,
                [col]: [...cols[col], currentStep]
            },
            dioginals: dioginal.length === 0 ?  
                {...dioginals} :
                dioginal.length === 1 ? {
                    ...dioginals,
                    [dioginal[0]]: [...dioginals[dioginal[0]], currentStep]
                } : 
                {   ...dioginals,
                    [dioginal[0]]: [...dioginals[dioginal[0]], currentStep],
                    [dioginal[1]]: [...dioginals[dioginal[1]], currentStep]
                } 
        };

        return area;
    }

    const isAllElementsArrayEquel =  (arr) =>{
            
            if (arr.length < 3) return false;

            for (let i=0; i < arr.length; i++){               
                if (arr[i] !== arr[0]) return false
            }
       
        
        return true;
    }

    const checkWinLine = (lines) =>{
        
        for (let lineNumber in lines){
            if (isAllElementsArrayEquel(lines[lineNumber])){              
                return lineNumber 
            }
        }

        return null
    }

    const doStep =  () =>{
        
        const newField = {
            ...field,
            [itemId]: {
                ...field[itemId],
                value: currentStep,
            }
        }

        const newArea = makeNewArea();    
        dispatch(itemFetched(newField));
        dispatch(addStep(newArea));

        if (stepCount >= 4 ) {
            const rowWin = checkWinLine(newArea.rows);
            const colWin = checkWinLine(newArea.cols);
            const dioginalWin = checkWinLine(newArea.dioginals);    

            if (rowWin || colWin || dioginalWin ){
               dispatch(isWinner(
                        {
                            vertical: colWin,
                            horizontal:  rowWin,
                            dioginal: dioginalWin
                        }))
            }else{
                dispatch (nextStep())
            }

        } else {
            dispatch (nextStep());
        }

    }

      

    const currentValue = useMemo(()=> field[itemId]['value'], [field[itemId]['value']])
    
    return (
        <div 
            className={field[itemId]['class']}
            onClick={(currentValue || winner) ? null : doStep }
            >
                {currentValue}
        </div>
    )
}

export default FieldItem