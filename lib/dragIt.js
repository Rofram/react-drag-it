var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { DragItStore } from './store';
function DragIt(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [store] = useState(new DragItStore());
    return (_jsx("div", Object.assign({ ref: ref => store.setContainerRef(ref), onMouseDown: store.onMouseDown, onMouseUp: store.onMouseUp, onMouseMove: store.onMouseMove, onMouseLeave: store.onMouseLeave, style: { display: 'absolute' } }, props, { children: children })));
}
export default observer(DragIt);
