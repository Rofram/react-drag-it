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
import { useRef } from 'react';
export function DragIt(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    const divRef = useRef(null);
    let dragging = false;
    let containerPosition = { x: 0, y: 0 };
    let mouseOffset = { x: 0, y: 0 };
    function onMove(e) {
        if (dragging) {
            divRef.current.style.left = `${(e.clientX + containerPosition.x) - mouseOffset.x}px`;
            divRef.current.style.top = `${(e.clientY + containerPosition.y) - mouseOffset.y}px`;
        }
    }
    function onMouseDown(e) {
        var _a, _b, _c, _d;
        dragging = true;
        mouseOffset.x = e.clientX;
        mouseOffset.y = e.clientY;
        containerPosition.x = (_b = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.offsetLeft) !== null && _b !== void 0 ? _b : 0;
        containerPosition.y = (_d = (_c = divRef.current) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0;
    }
    return (_jsx("div", Object.assign({ ref: divRef, onMouseDown: onMouseDown, onMouseUp: () => dragging = false, onMouseMove: onMove, onMouseLeave: () => dragging = false, style: { display: 'absolute' } }, props, { children: children })));
}
