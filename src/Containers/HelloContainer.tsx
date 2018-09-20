import { connect } from "react-redux";
import { Dispatch } from "redux";
import Hello from "../components/Hello";
import * as actions from "../actions";
import { StoreState } from "../types";

export function mapStateToProps({ enthusiasmLevel, languageName}: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.IncrementEnthusiasm()),
        onDecrement: () => dispatch(actions.DecrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
