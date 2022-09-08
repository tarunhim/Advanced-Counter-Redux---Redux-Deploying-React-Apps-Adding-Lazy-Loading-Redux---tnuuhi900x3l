import { decrease, increase, increaseByAmount, signin, signout } from "../actions/action";

export const reducer = (state = {counter:0,islogged:false},action) => {
    switch(action.type) {
        case increase:
            return {...state,counter:state.counter+1};
        case decrease:
            return {...state,counter:state.counter-1};
        case increaseByAmount:
            return {...state,counter:(state.counter+action.payload)};
        case signin:
            return {...state,islogged:true};
        case signout:
            return {...state,islogged:false};
        default:
            return state;
    }
}