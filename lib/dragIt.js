import { jsx as _jsx } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { DragItStore } from './store';
function DragIt({ children, ...props }) {
    const [store] = useState(new DragItStore());
    return (_jsx("div", { ref: ref => store.setContainerRef(ref), onMouseDown: store.onMouseDown, onMouseUp: store.onMouseUp, onMouseMove: store.onMouseMove, onMouseLeave: store.onMouseLeave, style: { display: 'absolute' }, ...props, children: children }));
}
export default observer(DragIt);
