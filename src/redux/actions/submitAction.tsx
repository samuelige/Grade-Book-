import { SUBMIT } from "../constants/submit";

const submitAction = (payload: unknown) => (
    {
        type: SUBMIT.GET_SUBMIT,
        payload
    }
);
export default submitAction;