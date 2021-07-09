import './styles/index.scss'
import { voicesActivate } from './allVoices'
import { handleMicroClick } from './microphone'
import { activateMessage } from './stream'


const chngText = document.getElementById('chngText')

const btnAllVoices = document.getElementById('playlist')
const btnMicro = document.getElementById('micro')
const btnStream = document.getElementById('stream')

const activeColor = "#4d74dd"

function resetColor(){
    const color = "dimgray"
    btnAllVoices.style.color = color
    btnMicro.style.color = color
    btnStream.style.color = color
}

const voiceList = document.getElementById('voiceList')
const recordBtn = document.getElementById('recordBtn')

btnAllVoices.addEventListener("click",function() {
    voiceList.innerHTML = ""
    recordBtn.hidden = true
    chngText.innerText = "";
    resetColor();
    btnAllVoices.style.color = activeColor;
    voicesActivate();
})

btnMicro.addEventListener("click",function() {
    voiceList.innerHTML = ""
    recordBtn.hidden = false
    chngText.innerText = "Active: speaker-mode";
    resetColor();
    btnMicro.style.color = activeColor;
})

btnStream.addEventListener("click",function() {
    voiceList.innerHTML = ""
    recordBtn.hidden = true
    chngText.innerText = "Active: stream mode";
    resetColor();
    btnStream.style.color = activeColor;
    activateMessage()
})

recordBtn.addEventListener("click",function() {
    handleMicroClick()
})