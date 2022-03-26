/// <reference types="react" />
export declare class DragItStore {
    dragging: boolean;
    mouseOffset: {
        x: number;
        y: number;
    };
    containerPosition: {
        x: number;
        y: number;
    };
    container: HTMLDivElement | null;
    constructor();
    setContainerRef(ref: HTMLDivElement | null): void;
    setDragging(dragging: boolean): void;
    onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
    onMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
    onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
    onMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}
//# sourceMappingURL=store.d.ts.map