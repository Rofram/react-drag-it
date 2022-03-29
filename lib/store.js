import { makeAutoObservable } from 'mobx';
export class DragItStore {
    constructor() {
        this.dragging = false;
        this.mouseOffset = { x: 0, y: 0 };
        this.containerPosition = { x: 0, y: 0 };
        this.container = null;
        makeAutoObservable(this, {}, {
            autoBind: true
        });
    }
    setContainerRef(ref) {
        this.container = ref;
    }
    setDragging(dragging) {
        this.dragging = dragging;
    }
    onMouseDown(e) {
        var _a, _b, _c, _d;
        this.setDragging(true);
        this.mouseOffset.x = e.clientX;
        this.mouseOffset.y = e.clientY;
        this.containerPosition.x = (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.offsetLeft) !== null && _b !== void 0 ? _b : 0;
        this.containerPosition.y = (_d = (_c = this.container) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0;
    }
    onMouseUp(e) {
        this.setDragging(false);
    }
    onMouseMove(e) {
        if (this.dragging) {
            this.container.style.left = `${(e.clientX + this.containerPosition.x) - this.mouseOffset.x}px`;
            this.container.style.top = `${(e.clientY + this.containerPosition.y) - this.mouseOffset.y}px`;
        }
    }
    onMouseLeave(e) {
        this.setDragging(false);
    }
}
