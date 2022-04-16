export const itemFetched = (field) => {   
    return {
        type: "ITEM_FETCHED",
        payload: field
    }    
}

export const addStep = (area) => {
    return{
        type: 'ADD_STEP',
        payload: area
    }
}

export const nextStep = () =>{
    return{
        type: "ISNT_WINNER"
    }
}

export const isWinner = (winningLine) =>{
   
    return {
        type: 'IS_WINNINING_LINE',
        payload: winningLine
    }
}

export const startAgain = () => {
    return {
        type: "START_AGAIN"
    }
}







