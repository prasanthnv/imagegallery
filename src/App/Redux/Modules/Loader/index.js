// types
export const types = {
    SHOW_LOADER: 'app/loader/show',
    HIDE_LOADER: 'app/loader/hide'
}

// actions

export const showLoader = (message) =>{
    return {
        type: types.SHOW_LOADER,
    }
} 

export const hodeLoader = (message) =>{
    return {
        type: types.HIDE_LOADER,
    }
} 


//initial state
const initial_state = {
    showing: true
}
// reducer
const reducer = function(state=initial_state,action){
    switch(action.type){
        default: return state;
    }
}



export default reducer;


