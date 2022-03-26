import { makeAutoObservable } from 'mobx';
export class DragItStore {
    dragging = false;
    mouseOffset = { x: 0, y: 0 };
    containerPosition = { x: 0, y: 0 };
    container = null;
    constructor() {
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
        this.setDragging(true);
        this.mouseOffset.x = e.clientX;
        this.mouseOffset.y = e.clientY;
        this.containerPosition.x = this.container?.offsetLeft ?? 0;
        this.containerPosition.y = this.container?.offsetTop ?? 0;
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
