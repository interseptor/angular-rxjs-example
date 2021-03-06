import { CommonModule } from "@angular/common";
import { SampleComponent } from "./sample.component";
import { NgModule } from "@angular/core";
import { SampleComponentActions } from "./sample.action";

@NgModule({
    declarations: [SampleComponent],
    imports: [
        CommonModule
    ],
    exports: [SampleComponent]
})
export class SampleModule {
}