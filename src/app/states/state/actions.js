import * as ActionTypes from "./action-types";
import * as service from "./service";
export function initStates(statesList){
    return {
        type: ActionTypes.INIT_STATES,
        payload: {
            states: statesList
        }
    }
}

export function initStateView(viewState){
    return {
        type: ActionTypes.INIT_STATEVIEW,
        payload: {
            viewState: viewState
        }
    }
}

export function initEditedState(editedState){
    return{
        type:ActionTypes.INIT_EDITEDSTATE,
        payload:{
            editedState:editedState
        }
    }
}

export function loading(status){
    return {
        type: ActionTypes.LOADING,
        payload: {
            status: status
        }
    }
}

//return action as object
export function initError(error) {
    return {
        type: ActionTypes.ERROR,
        payload: {
            error: error
        }
    }
}

//tunk ios middleware
//async calls, actions
//as per thunk, return action as function
export function fetchStates(){
    return function(dispatch,getState){

        // let state = getState();
        // if(state.productState.products.length>0){
        //     console.log("already present data");
        //     return;
        // }

        dispatch(loading(true));

        console.log("called by thunk");
        service.getStatesList()
        .then( statesList =>{
            let action = initStates(statesList);
            //action object
            dispatch(action);
            dispatch(loading(false));
        });
    }
}

export function fetchStateById(id){
    return function(dispatch,getState){

        // let state = getState();
        // if(state.productState.products.length>0){
        //     console.log("already present data");
        //     return;
        // }

        dispatch(loading(true));

        console.log("called by thunk");
        service.getStateById(id)
        .then( viewState =>{
            let action = initStateView(viewState);
            //action object
            dispatch(action);
            dispatch(loading(false));
        });
    }
}

export function saveStateDetails(stateToEdit) {
    return function (dispatch, getState) {
        
        dispatch(loading(true));
        console.log("called by thunk");
        service.saveState(stateToEdit)
            .then(editedState => {
                let action = initEditedState(editedState);
                //action object
                dispatch(action);
                dispatch(loading(false));
            });
    }
}

export function saveNewState(stateToEdit) {
    return function (dispatch, getState) {
        
        dispatch(loading(true));
        console.log("called by thunk");
        service.saveNewState(stateToEdit)
            .then(editedState => {
                let action = initEditedState(editedState);
                //action object
                dispatch(action);
                dispatch(loading(false));
            });
    }
}