import {SUBMIT} from "../constants/submit";

interface I_State {
    submit : Array<unknown>
};

const submitState: I_State = {
    submit: []
};

interface I_SumitAction {
    type: SUBMIT.GET_SUBMIT,
    payload: Array<unknown>
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