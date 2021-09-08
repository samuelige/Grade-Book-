import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import submitReducer from "./reducer/submitReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const rootReducer = combineReducers(
    {
        // Add reducers here
        submitData : submitReducer
    }
);

export type I_reducer = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer)