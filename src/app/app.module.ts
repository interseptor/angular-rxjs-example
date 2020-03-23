import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppStoreModule } from "./state/app-store.module";
import { SampleModule } from "./component/sample.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppStoreModule,
        SampleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
