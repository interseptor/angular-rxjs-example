import { Epic, ofType } from "redux-observable";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SampleComponentActions } from "./sample.action";
import { map, mergeMap } from "rxjs/operators";
import { Action } from "redux";
import { SampleRow } from "./sample.data";

@Injectable()
export class SampleEpicFactory {
    constructor(private http: HttpClient,
                private sampleComponentActions: SampleComponentActions) {}

    createLoadSampleRowsEpic(): Epic<Action, Action> {
        return action$ => {
            return action$.pipe(
                ofType(SampleComponentActions.LOAD_ROWS),
                mergeMap(action =>
                    this.http.get("/sample/rows/all")
                        .pipe(map(loadedRows => loadedRows as SampleRow[]))
                        .pipe(map(loadedRows => {
                            return this.sampleComponentActions.setLoadedRows(loadedRows);
                        }))
                )
            )
        }
    }
}