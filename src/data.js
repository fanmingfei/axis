import { sendMove } from './utils'
export const saveData = {
    _x: 0,
    _y: 0,
    _r: 50,
    set x(d) {
        if(d == this._x) return;
        this._x = d
        if (d == 0) {
            sendMove(this, true)
        } else {
            sendMove(this)
        }
    },
    set y(d) {
        if(d == this._y) return;
        this._y = d
        if (d == 0) {
            sendMove(this, true)
        } else {
            sendMove(this)
        }
    },
    set r(d) {
        if(d == this._r) return;
        this._r = d
        if (d == 50) {
            sendMove(this, true)
        } else {
            sendMove(this)
        }
    },
}
