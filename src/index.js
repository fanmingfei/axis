import 'babel-polyfill'
import { setTranslate, minusPos, divPos, getDistance, getAngle, samePos } from './utils'
const axisCentre = document.querySelector('#axisCentre')
const axisBody = document.querySelector('#axisBody')

let control = {
    status: false,
    centrePoint: [(axisBody.offsetWidth >> 1) + axisBody.offsetLeft, (axisBody.offsetHeight >> 1) + axisBody.offsetTop],
    r: axisBody.offsetWidth >> 1,
    originX: axisCentre.offsetLeft,
    originY: axisCentre.offsetTop,
    transX: axisCentre.offsetWidth >> 1,
    transY: axisCentre.offsetHeight >> 1
}

document.addEventListener('mouseup', function(e) {
    control.status = false
})

axisBody.addEventListener('mousedown', function(e) {
    control.status = true
    moveCentre(e, 'down')
})
document.addEventListener('mousemove', function(e) {
    if (!control.status) return
    // console.log('move',e)
    moveCentre(e, 'down')
    
})
axisBody.addEventListener('mouseup', function(e) {
    e.preventDefault()
    e.stopPropagation()
    control.status = false
    setTranslate(0, 0, axisCentre)
})

function moveCentre (e, type) {
    const mousePos = [e.pageX, e.pageY]

    const vect = minusPos(mousePos, control.centrePoint)
    const angle = getAngle(vect, [0,1])
    const y = angle * control.r;
    let x;
    if (y == 0) {
        x = control.r
    } else {
        x = y / vect[1] * vect[0]
    }

    let pos;

    if (getDistance(mousePos, control.centrePoint) <= control.r) {
        pos = [e.pageX - control.transX - control.originX, e.pageY - control.transY - control.originY]
        setTranslate(pos[0], pos[1], axisCentre)
    } else {
        pos = [x,y]
        setTranslate(x, y, axisCentre)
    }

    const moveVect = divPos(pos, [control.r,control.r])
    moveVect [0] = moveVect[0].toFixed(1)
    moveVect[1] = moveVect[1].toFixed(1)
    sendMove(moveVect)

}


const sendMove = (function () {
    let curr;
    return (vect)=>{
        if (!samePos(vect, curr)) {
            console.log(vect)
            curr = vect
        }
    }
})()




