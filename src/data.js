import { sendMove } from './utils'
export const saveData = {
    _x: 0,
    _y: 0,
    _r: 50,
    set x(d) {
        if(d == this._x) return;
        this._x = d
        sendMove(this)
    },
    set y(d) {
        if(d == this._y) return;
        this._y = d
        sendMove(this)
    },
    set r(d) {
        if(d == this._r) return;
        this._r = d
        sendMove(this)
    },
}
