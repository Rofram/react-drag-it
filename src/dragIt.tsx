import { useRef } from 'react'

interface DragItProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DragIt({ children, ...props }: DragItProps) {
  const divRef = useRef<HTMLDivElement>(null)
  let dragging = false
  let containerPosition = { x: 0, y: 0 }
  let mouseOffset = { x: 0, y: 0 }

  console.log(dragging)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (dragging) {
      if (divRef.current) {
        divRef.current.style.left = `${(e.clientX + containerPosition.x) - mouseOffset.x}px`
        divRef.current.style.top = `${(e.clientY + containerPosition.y) - mouseOffset.y}px`
      }
    }
    console.log(`onMove: ${e.clientX} ${e.clientY}`)
  }

  function onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    dragging = true
    mouseOffset.x = e.clientX
    mouseOffset.y = e.clientY
    containerPosition.x = divRef.current?.offsetLeft ?? 0
    containerPosition.y = divRef.current?.offsetTop ?? 0
    console.log(`onMouseDown: ${e.clientX} ${e.clientY}`)
  }

  return (
    <div
      ref={divRef}
      onMouseDown={onMouseDown}
      onMouseUp={() => dragging = false}
      onMouseMove={onMove}
      onMouseLeave={() => dragging = false}
      style={{ display: 'absolute' }}
      {...props}
    >{children}</div>
  )
}