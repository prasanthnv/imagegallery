import types from "./types";

const initial_state = {
    counter: 0
}

const reducer = (state = initial_state, action = {}) => {
    console.log(state)
    switch (action.type) {
        // do reducer stuff
        case types.COUNT_UP:
            return {
                counter: state.counter + 1
            }
        case types.COUNT_DOWN:
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
}
/*
// if multiple reducers in one module
const reducer = combineReducers( {
    quacking: quackReducer,
    distance: distanceReducer
});
*/
export default reducer;