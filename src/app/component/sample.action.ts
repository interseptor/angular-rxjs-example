import { Injectable } from "@angular/core";
import { SampleRow } from "./sample.data";
import { Action } from "redux";

@Injectable()
export class SampleComponentActions {
    static readonly ADD_SAMPLE_ROW: string = "ADD_SAMPLE_ROW";
    static readonly REMOVE_SAMPLE_ROW: string = "REMOVE_SAMPLE_ROW";

    static readonly LOAD_ROWS: string = "LOAD_ROWS";
    static readonly SET_LOADED_ROWS: string = "SET_LOADED_ROWS";

    addSampleRow(sampleRow: SampleRow): AddSampleRowAction {
        return {sampleRow, type: SampleComponentActions.ADD_SAMPLE_ROW};
    }

    removeSampleRow(sampleRow: SampleRow): RemoveSampleRowAction {
        return {sampleRow, type: SampleComponentActions.REMOVE_SAMPLE_ROW};
    }

    loadRows(): LoadRowsAction {
        return {type: SampleComponentActions.LOAD_ROWS};
    }

    setLoadedRows(sampleRows: SampleRow[]): SetLoadedRowsAction {
        return {sampleRows, type: SampleComponentActions.SET_LOADED_ROWS};
    }
}

export interface SampleComponentAction extends Action {
}

export interface AddSampleRowAction extends SampleComponentAction {
    sampleRow: SampleRow;
}

export interface RemoveSampleRowAction extends SampleComponentAction {
    sampleRow: SampleRow;
}

export interface LoadRowsAction extends SampleComponentAction {
}

export interface SetLoadedRowsAction extends SampleComponentAction {
    sampleRows: SampleRow[];
}