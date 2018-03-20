import * as ActionTypes from '../state/action-types';

const INITIAL_STATE = {
    viewState: [],
    status: false,
    error: undefined
}

export default function stateViewReducer(state = INITIAL_STATE, action) {
    console.log("stateReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_STATEVIEW:
            return Object.assign({}, state, {viewState: action.payload.viewState});
        default:
            return state;
    }
}