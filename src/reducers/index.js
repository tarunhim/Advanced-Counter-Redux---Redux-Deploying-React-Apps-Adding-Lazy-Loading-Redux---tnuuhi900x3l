const initialState = {
    counter: 0,
    islogged: false
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };

        case 'islogged': 
            return {
                ...state,
                islogged: !state.islogged
            };

        case 'SIGN_IN': 
            return {
                ...state,
                islogged: true
            };

        case 'SIGN_OUT': 
            return {
                ...state,
                islogged: false
            };
            
        case 'INCREMENTBYAMOUNT':
            return {
                ...state,
                counter: action.payload
            };

        default:
            return state
    }
};

export default reducer;
