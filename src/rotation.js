import { saveData } from './data'
import { setTranslate } from './utils'

const rotationBody = document.querySelector('#rotationBody')
const rotationCentre = document.querySelector('#rotationCentre')

const control = {
    status: false,
    width: rotationBody.offsetWidth,
    transX: rotationCentre.offsetWidth >> 1,
    maxMove: rotationBody.offsetWidth >> 1,
    centreX: (rotationBody.offsetWidth >> 1) + rotationBody.offsetLeft,
}

document.addEventListener('mouseup', function() {
    control.status = false;
    setTranslate(0, 0, rotationCentre)
})
rotationBody.addEventListener('mousedown', function(e) {
    control.status = true;
    moveCentre (e)
})
rotationCentre.addEventListener('mouseup', function() {
    control.status = false;
})
document.addEventListener('mousemove', function(e) {
    if (control.status){
        moveCentre(e)
    }
})

function moveCentre (e) {
    let x = e.pageX - control.centreX

    if (Math.abs(x) < control.maxMove){
        setTranslate(x, 0, rotationCentre)
    } else {
        if (x < 0) {
            x = -control.maxMove
        } else {
            x = control.maxMove
        }
    }

    const r = 50 + (100 * (x / control.width))

    saveData.r = ~~r;

}