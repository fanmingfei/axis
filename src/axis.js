import { setTranslate, minusPos, divPos, getDistance, getAngle, samePos, sendMove} from './utils'
import { saveData } from './data'

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

    saveData.x = 0
    saveData.y = 0
    setTranslate(0, 0, axisCentre)
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


function moveCentre (e) {
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
    moveVect [0] = new Number((moveVect[0]*Math.abs(moveVect[0])).toFixed(2))
    moveVect [1] = new Number((moveVect[1]*Math.abs(moveVect[1])).toFixed(2))
    saveData.x = moveVect [0]
    saveData.y = -moveVect [1]
}







