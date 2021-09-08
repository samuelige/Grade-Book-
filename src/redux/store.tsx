import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";

// check Create Store type
type I_store = ReturnType<typeof createStore>;

const middleware = [thunk, logger];

const store: I_store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export {store, persistor};