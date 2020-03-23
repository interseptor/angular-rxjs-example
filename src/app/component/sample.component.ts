import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { AppState } from "../state/app.types";
import { SampleComponentActions } from "./sample.action";
import { Observable } from "rxjs";
import { SampleComponentData, SampleRow } from "./sample.data";

@Component({
    selector: "sample-component",
    templateUrl: "sample.component.html",
    styleUrls: ["sample.component.css"]
})
export class SampleComponent implements OnInit {
    @select(["sampleComponentState", "sampleComponentData"]) readonly sampleComponentData$: Observable<SampleComponentData>;
    sampleComponentData: SampleComponentData;

    constructor(private ngRedux: NgRedux<AppState>,
                private sampleComponentActions: SampleComponentActions) {
    }

    ngOnInit(): void {
        this.sampleComponentData$.subscribe((sampleComponentData: SampleComponentData) => {
            this.sampleComponentData = sampleComponentData;
        });
    }

    addSampleRow(name: string, description: string) {
        this.ngRedux.dispatch(this.sampleComponentActions.addSampleRow(new SampleRow(name, description)));
    }

    removeSampleRow(sampleRow: SampleRow) {
        this.ngRedux.dispatch(this.sampleComponentActions.removeSampleRow(sampleRow));
    }
}