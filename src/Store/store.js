import { createStore,applyMiddleware ,compose} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import Reducer from "./reducers";
import RootSaga from "./saga";

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const sagaMiddleWare=createSagaMiddleware();

const Store=createStore(Reducer,composeEnhancers(applyMiddleware(sagaMiddleWare)));


sagaMiddleWare.run(RootSaga)
export default Store;