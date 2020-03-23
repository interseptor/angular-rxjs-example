import { Injectable } from "@angular/core";
import { SampleRow } from "./sample.data";
import { Action } from "rxjs/internal/scheduler/Action";

@Injectable()
export class SampleComponentActions {
    static readonly ADD_SAMPLE_ROW: string = "ADD_SAMPLE_ROW";
    static readonly REMOVE_SAMPLE_ROW: string = "REMOVE_SAMPLE_ROW";

    addSampleRow(sampleRow: SampleRow): AddSampleRowAction {
        return {sampleRow, type: SampleComponentActions.ADD_SAMPLE_ROW};
    }

    removeSampleRow(sampleRow: SampleRow): RemoveSampleRowAction {
        return {sampleRow, type: SampleComponentActions.REMOVE_SAMPLE_ROW};
    }
}

export interface SampleComponentAction {
    type: string;
}

export interface AddSampleRowAction extends SampleComponentAction {
    sampleRow: SampleRow;
}

export interface RemoveSampleRowAction extends SampleComponentAction {
    sampleRow: SampleRow;
}