import {connect} from "react-redux";
import Statecreate from "../components/Statecreate";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    console.log("state :");
    return {
        viewState: state.stateViewStore.viewState,
        status: state.stateViewStore.status,
        error: state.stateViewStore.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveNewDetails: function(stateToEdit){
        let actionFn=actions.saveNewState(stateToEdit);
        dispatch(actionFn);
       }
    }
 }
 
 export default connect(mapStateToProps, 
                    mapDispatchToProps) (Statecreate)