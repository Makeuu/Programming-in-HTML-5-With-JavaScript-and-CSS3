import { RowNode } from "../../entities/rowNode";
import { Column } from "../../entities/column";
export declare class ChangedPath {
    private keepingColumns;
    private nodeIdsToBoolean;
    private nodeIdsToColumns;
    constructor(keepingColumns: boolean);
    addParentNode(rowNode: RowNode, columns?: Column[]): void;
    isInPath(rowNode: RowNode): boolean;
    getValueColumnsForNode(rowNode: RowNode, valueColumns: Column[]): Column[];
    getNotValueColumnsForNode(rowNode: RowNode, valueColumns: Column[]): Column[];
}
