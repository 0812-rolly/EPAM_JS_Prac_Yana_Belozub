import io from "socket.io-client";

export function activateMessage(){
    const socket = io.connect('https://voicy-speaker.herokuapp.com')
    const chngText = document.getElementById('chngText')

    socket.on("audioMessage", function (audioChunks){
        console.log("get voice")
        if (chngText.innerText === 'Active: stream mode'){
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        }
        else return;
    })
}