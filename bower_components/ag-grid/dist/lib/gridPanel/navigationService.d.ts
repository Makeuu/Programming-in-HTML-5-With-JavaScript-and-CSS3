export declare class NavigationService {
    private gridPanel;
    private mouseEventService;
    private paginationProxy;
    private focusedCellController;
    private animationFrameService;
    private rangeController;
    private columnController;
    private gridOptionsWrapper;
    private scrollWidth;
    private init();
    handlePageScrollingKey(event: KeyboardEvent): boolean;
    private onPageDown(gridCell);
    private onPageUp(gridCell);
    private navigateTo(scrollIndex, scrollType, scrollColumn, focusIndex, focusColumn);
    private onCtrlUpOrDown(key, gridCell);
    private onCtrlLeftOrRight(key, gridCell);
    private onHomeOrEndKey(key);
}
