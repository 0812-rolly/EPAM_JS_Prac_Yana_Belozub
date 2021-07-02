import './styles/index.scss'

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

btnAllVoices.addEventListener("click",function() {
    chngText.innerText = "Active: all voices mode";
    resetColor();
    btnAllVoices.style.color = activeColor;
})

btnMicro.addEventListener("click",function() {
    chngText.innerText = "Active: speaker-mode";
    resetColor();
    btnMicro.style.color = activeColor;
})

btnStream.addEventListener("click",function() {
    chngText.innerText = "Active: stream mode";
    resetColor();
    btnStream.style.color = activeColor;
})