import { RowNode } from "../entities/rowNode";
export declare class FilterService {
    private filterManager;
    private gridOptionsWrapper;
    private doingTreeData;
    private postConstruct();
    filterAccordingToColumnState(rowNode: RowNode): void;
    filter(rowNode: RowNode, filterActive: boolean): void;
    private setAllChildrenCountTreeData(rowNode);
    private setAllChildrenCountGridGrouping(rowNode);
    private setAllChildrenCount(rowNode);
}
