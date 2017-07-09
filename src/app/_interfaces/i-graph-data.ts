import { ISource } from "app/_interfaces/i-source";

export interface IGraphData {
    nodes: [{ id: String, group: Number }];
    links: [{
        source:ISource;
        target: ISource;
        value: Number,
        index: Number
    }]
}
