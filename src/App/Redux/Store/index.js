import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {rootReducer,rootSaga} from '../Modules';
// const rootReducer = combineReducers( reducers );
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
        applyMiddleware(sagaMiddleware)     
);
sagaMiddleware.run(rootSaga)

export default store;