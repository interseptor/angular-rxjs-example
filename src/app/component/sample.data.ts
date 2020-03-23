export interface SampleComponentState {
    sampleComponentData: SampleComponentData;
}

export class SampleComponentData {
    constructor(public sampleRows: SampleRow[]) {}
}

export class SampleRow {
    constructor(public name: string,
                public description: string) {
    }
}