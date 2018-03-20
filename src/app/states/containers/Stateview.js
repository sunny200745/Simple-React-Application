import {connect} from "react-redux";
import StateView from "../components/Stateview";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    console.log("state :");
    console.log(state.stateViewStore.viewState);
    return {
        viewState: state.stateViewStore.viewState,
        status: state.stateViewStore.status,
        error: state.stateViewStore.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStateById: function(id) {
        //let id = this.props.match.params.id;
        let actionFn=actions.fetchStateById(id);
        dispatch(actionFn);
       }
    }
 }
 
 export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateView)