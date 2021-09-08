import { I_ValueState } from "../../component/CustomForm";
import {SUBMIT} from "../constants/submit";

interface I_State {
    submit : Array<I_ValueState>
};

const submitState: I_State = {
    submit: []
};

interface I_SumitAction {
    type: SUBMIT.GET_SUBMIT,
    payload: Array<I_ValueState>
};

type Action = I_SumitAction

const submitReducer = (state = submitState, action: Action) => {
    switch (action.type) {
        case SUBMIT.GET_SUBMIT:
            return {
                ...state,
                submit: action.payload
            };
        default:
            return state;
    }
};

export default submitReducer;