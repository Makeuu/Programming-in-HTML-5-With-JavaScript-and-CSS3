import { RowNode } from "../entities/rowNode";
import { Column } from "../entities/column";
export interface SortOption {
    inverter: number;
    column: Column;
}
export interface SortedRowNode {
    currentPos: number;
    rowNode: RowNode;
}
export declare class SortService {
    private sortController;
    private columnController;
    private valueService;
    private gridOptionsWrapper;
    sortAccordingToColumnsState(rowNode: RowNode): void;
    sort(rowNode: RowNode, sortOptions: SortOption[]): void;
    private compareRowNodes(sortOptions, sortedNodeA, sortedNodeB);
    private getValue(nodeA, column);
    private updateChildIndexes(rowNode);
    private pullDownDataForHideOpenParents(rowNode, clearOperation);
}
