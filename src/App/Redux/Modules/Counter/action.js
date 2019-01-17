import types from "./types";

// action generators


export const countUp = (message) =>{
    console.log("action","Counting Up");
    return {
        type: types.COUNT_UP,
        payload: message
    }
} 


export const countDown = (message) =>{
    console.log("action","Counting down");
    return {
        type: types.COUNT_DOWN,
        payload: message
    }
} 

export default {
    countUp,
    countDown
};