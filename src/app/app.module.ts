import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppStoreModule } from "./state/app-store.module";
import { SampleModule } from "./component/sample.module";
import { SampleEpicFactory } from "./component/sample.epic";
import { SampleComponentActions } from "./component/sample.action";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppStoreModule,
        SampleModule,
        HttpClientModule
    ],
    providers: [SampleEpicFactory, SampleComponentActions],
    bootstrap: [AppComponent]
})
export class AppModule {}
