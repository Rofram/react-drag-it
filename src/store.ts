import { makeAutoObservable } from 'mobx'

export class DragItStore {
  dragging = false
  mouseOffset = { x: 0, y: 0 }
  containerPosition = { x: 0, y: 0 }
  container: HTMLDivElement | null = null

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true
    })
  }

  setContainerRef(ref: HTMLDivElement| null) {
    this.container = ref
  }

  setDragging(dragging: boolean) {
    this.dragging = dragging
  }

  onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(true)
    this.mouseOffset.x = e.clientX
    this.mouseOffset.y = e.clientY
    this.containerPosition.x = this.container?.offsetLeft ?? 0
    this.containerPosition.y = this.container?.offsetTop ?? 0
  }

  onMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(false)
  }

  onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (this.dragging) {
      this.container!.style.left = `${(e.clientX + this.containerPosition.x) - this.mouseOffset.x}px`
      this.container!.style.top = `${(e.clientY + this.containerPosition.y) - this.mouseOffset.y}px`
    }
  }

  onMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(false)
  }
}