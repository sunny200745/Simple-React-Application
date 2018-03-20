import {createStore, combineReducers, 
    applyMiddleware} from 'redux';
    
import stateReducer from './states/state/StateReducer';
import stateViewReducer from './states/state/StateViewReducer';
import stateEditReducer from './states/state/StateEditReducer';

import thunk from 'redux-thunk';


const rootReducers = combineReducers({
statesList: stateReducer,
stateViewStore: stateViewReducer,
editedState:stateEditReducer
});
let store = createStore(rootReducers, 
        applyMiddleware(thunk));
export default store;