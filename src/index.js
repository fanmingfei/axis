import './axis'
import './rotation'
import { saveData } from './data'
import { sendMove } from './utils'
setInterval(()=>{
    sendMove(saveData, true)
}, window.timer || 500)