import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { DragItStore } from './store'

interface DragItProps extends React.HTMLAttributes<HTMLDivElement> {}

function DragIt({ children, ...props }: DragItProps) {
  const [store] = useState(new DragItStore())

  return (
    <div
      ref={ref => store.setContainerRef(ref)}
      onMouseDown={store.onMouseDown}
      onMouseUp={store.onMouseUp}
      onMouseMove={store.onMouseMove}
      onMouseLeave={store.onMouseLeave}
      style={{ display: 'absolute' }}
      {...props}
    >{children}</div>
  )
}

export default observer(DragIt)