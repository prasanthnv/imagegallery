import types from './types';

const initial_state = {
    images:[],
    error: {},
    nextPage:1
}
const reducer = (state = initial_state, action = {}) => {
    switch (action.type) {
        // do reducer stuff
        case types.FETCH_IMAGES:
        return state;
            
        case types.FETCH_COMPLETED:
        return {
            images: [...state.images,...action.payload],
            nextPage :  state.nextPage+1
        }
            case types.FETCH_FAILED:
            return state;
        default:
            return state;
    }
}
export default reducer;