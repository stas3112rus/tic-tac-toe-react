const intitialState = {
    winner: false,
    currentStep: "X",
    winningLine: {
        vertical: null,
        horizontal: null,
        dioginal: null
    },
    rows: {
        1: [],
        2: [],
        3: []
    },
    cols: {
        1: [],
        2: [],
        3: []
    },
    dioginals: {
        1: [],
        2: [],
    },
    dioginalPoints: {
        1: ['1-1', '2-2', '3-3'],
        2: ['1-3', '2-2', '3-1']
    },
    stepCount: 0, 

    status: 'idle'
}

const Game = (state = intitialState, action) => {
    switch (action.type){
        case 'IS_WINNINING_LINE':
           
            return {
                ...state,
                winner: state.currentStep,
                winningLine: action.payload
            }
        case 'ADD_STEP': 
            return {
                ...state,
                rows: action.payload.rows,
                cols: action.payload.cols,
                dioginals: action.payload.dioginals
            }
        case 'ISNT_WINNER': 
            return {
                ...state,
                currentStep: state.currentStep === "X" ? 'O': 'X',
                stepCount: state.stepCount +1
            }
        
        default: return state
    }

}   

export default Game;
