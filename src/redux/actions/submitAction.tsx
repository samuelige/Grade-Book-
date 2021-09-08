import { I_ValueState } from "../../component/CustomForm";
import { SUBMIT } from "../constants/submit";

const submitAction = (payload: Array<I_ValueState>) => (
    {
        type: SUBMIT.GET_SUBMIT,
        payload
    }
);
export default submitAction;