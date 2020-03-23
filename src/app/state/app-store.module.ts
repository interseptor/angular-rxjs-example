import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { NgModule } from "@angular/core";
import { AppState } from "./app.types";
import { appReducer } from "./app.reducer";

@NgModule({
    imports: [NgReduxModule]
})
export class AppStoreModule {
    constructor(public store: NgRedux<AppState>) {
        store.configureStore(
            appReducer,
            {}
        );
    }
}