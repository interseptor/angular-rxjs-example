import { SampleComponentData, SampleComponentState } from "./sample.data";
import { AddSampleRowAction, RemoveSampleRowAction, SampleComponentAction, SampleComponentActions, SetLoadedRowsAction } from "./sample.action";

const INITIAL_STATE: SampleComponentState = {sampleComponentData: new SampleComponentData([])};

export function sampleComponentReducer(state: SampleComponentState = INITIAL_STATE, action: SampleComponentAction): SampleComponentState {
    switch (action.type) {
        case SampleComponentActions.ADD_SAMPLE_ROW:
            state.sampleComponentData.sampleRows.push((<AddSampleRowAction>action).sampleRow);
            return {sampleComponentData: new SampleComponentData(state.sampleComponentData.sampleRows)};
        case SampleComponentActions.REMOVE_SAMPLE_ROW:
            return {
                sampleComponentData: new SampleComponentData(
                    state.sampleComponentData.sampleRows.filter(row => row !== (<RemoveSampleRowAction>action).sampleRow)
                )
            };
        case SampleComponentActions.SET_LOADED_ROWS:
            return {
                sampleComponentData: new SampleComponentData((<SetLoadedRowsAction>action).sampleRows)
            }
    }
    return state;
}