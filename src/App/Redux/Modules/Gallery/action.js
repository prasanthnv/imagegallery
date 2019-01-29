import types from "./types";

// action generators


export const fetchImages = (page) =>{
    console.log("action","Fetching images for page : " + page);
    return {
        type: types.FETCH_IMAGES,
    }
} 
export const fetchCompleted = (images) =>{
    console.log("action","Fetching completed",images);
    return {
        type: types.FETCH_COMPLETED,
        payload: images
    }
} 

export const fetchFailed = (error) =>{
    console.log("action","Fetching failed");
    return {
        type: types.FETCH_FAILED,
        payload: error
    }
} 
export default {
    fetchImages,
    fetchCompleted,
    fetchFailed
}