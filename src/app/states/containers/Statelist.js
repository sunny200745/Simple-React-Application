import {connect} from "react-redux";
import Statelist from "../components/Statelist";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    console.log(state.statesList.states);
    return {
        states: state.statesList.states,
        status: state.statesList.status,
        error: state.statesList.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchStates: function() {
         let actionFn=actions.fetchStates();
         dispatch(actionFn)
       }
    }
 }
 
 export default connect(mapStateToProps, 
                    mapDispatchToProps) (Statelist)