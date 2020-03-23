import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { NgModule } from "@angular/core";
import { AppState } from "./app.types";
import { appReducer } from "./app.reducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { SampleEpicFactory } from "../component/sample.epic";
import { applyMiddleware, createStore } from "redux";

@NgModule({
    imports: [NgReduxModule]
})
export class AppStoreModule {
    constructor(public ngRedux: NgRedux<AppState>, private sampleEpicFactory: SampleEpicFactory) {
        const epicMiddleware = createEpicMiddleware();

        const store = createStore(
            appReducer,
            {},
            applyMiddleware(epicMiddleware)
        );

        ngRedux.provideStore(store);
        epicMiddleware.run(combineEpics(
            this.sampleEpicFactory.createLoadSampleRowsEpic()
        ));
    }
}