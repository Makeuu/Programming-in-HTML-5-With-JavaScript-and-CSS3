import { BeanStub } from "../context/beanStub";
export declare class ChangeDetectionService extends BeanStub {
    private gridOptionsWrapper;
    private rowModel;
    private rowRenderer;
    private eventService;
    private inMemoryRowModel;
    private init();
    private onCellValueChanged(event);
    private doChangeDetection(rowNode, column);
}
