export function setTranslate(x,y,dom) {
    dom.style.transform = `translate(${x}px, ${y}px)`
}
export function minusPos(pos, pos2) {
    return [pos[0]-pos2[0], pos[1]-pos2[1]]
}

export function multiPos(pos, pos2) {
    return [pos[0]*pos2[0], pos[1]*pos2[1]]
}

export function divPos (pos, pos2) {
    return [pos[0]/pos2[0], pos[1]/pos2[1]]
}

export function getDistance(pos, pos2) {
    const vect = minusPos(pos, pos2)
    return Math.sqrt(vect[0] ** 2 + vect[1] ** 2)
}


export function getAngle (pos, pos2) {
    const multi = multiPos(pos, pos2)
    const m = multi[0] + multi[1]

    const cos = m/(Math.sqrt(pos[0] ** 2 + pos[1] ** 2) * Math.sqrt(pos2[0] ** 2 + pos2[1] ** 2))
    return cos;
}

export function samePos(pos, pos2) {
    if (pos && pos2 && pos[0] == pos2[0] && pos[1] == pos2[1]) {
        return true;
    } else {
        return false;
    }
}



export const sendMove = (function () {
    let time = 0;
    return (data, flag)=>{
        if (data._r == 100 || data._r == 0 || flag) {
            fetch(`/receive?option=${[data._x,data._y,data._r]}`)
            time = performance.now()
        }
    }
})()

