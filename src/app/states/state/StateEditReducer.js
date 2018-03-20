import * as ActionTypes from '../state/action-types';

const INITIAL_STATE = {
    editedState: null,
    status: false,
    error: undefined
}

export default function stateEditReducer(state = INITIAL_STATE, action) {
    console.log("stateReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_EDITEDSTATE:
            return Object.assign({}, state, {editedState: action.payload.editedState});
        default:
            return state;
    }
}