const intitialState = {
    field: {
        1: {
            class: "field__item field_bordtn field_bordln",
            row: 1,
            col: 1,
            value: null
        },
    
        2: {
            class: "field__item field_bordtn",
            row: 1,
            col: 2,
            value: null
        },

        3: {
            class: "field__item field_bordtn field_bordrn",
            row: 1,
            col: 3,
            value: null
        },

        4: {
            class: "field__item field_bordln",
            row: 2,
            col: 1,
            value: null
        },

        5: {
            class: "field__item",
            row: 2,
            col: 2,
            value: null
        },

        6: {
            class: "field__item field_bordrn",
            row: 2,
            col: 3,
            value: null
        },

        7: {
            class: "field__item field_bordln field_borbn",
            row: 3,
            col: 1,
            value: null
        },

        8: {
            class: "field__item field_borbn",
            row: 3,
            col: 2,
            value: null
        },

        9: {
            class: "field__item field_bordrn field_borbn",
            row: 3,
            col: 3,
            value: null
        },
    },   
}

const FieldItems = (state = intitialState, action) =>{
    switch (action.type) {

        case 'ITEM_FETCHED':
           
            return{
                ...state,
                field: action.payload               
            }    

        default: return state
    }
}

export default FieldItems;