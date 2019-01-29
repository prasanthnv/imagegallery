import {combineReducers} from 'redux';
import gallerySaga from './Gallery/sagas';

import counterReducer from "./Counter";
import galleryReducder,{gallery_sagas} from './Gallery'
import loaderReducer from './Loader'

export const rootReducer = combineReducers( {
    counter:  counterReducer,
    gallery: galleryReducder,
    loader: loaderReducer
});


export const rootSaga = gallerySaga;
