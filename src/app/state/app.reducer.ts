import { sampleComponentReducer } from "../component/sample.reducer";
import { combineReducers } from "redux";

export const appReducer = combineReducers({
    sampleComponentState: sampleComponentReducer
});