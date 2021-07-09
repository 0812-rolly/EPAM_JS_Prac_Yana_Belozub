export async function voicesActivate() {
    
    const response = await fetch('https://voicy-speaker.herokuapp.com/voices')
    const data = await response.json()

    for (let i = data.length - 5; i < data.length; i++) {
        
        const audio = document.createElement('audio');
        audio.controls = true;
        const audioBlob = new Blob([new
        Uint8Array(data[i].audioBlob[0].data).buffer]);
        const audioUrl = URL.createObjectURL(audioBlob);
        audio.src = audioUrl

        //attaching audio file to list object
        const li = document.createElement('li');
        li.classList.add('audioElement');
        li.classList.add('voice_message');
        li.innerHTML = data[i].timeStamp.substr(0, 24);
        li.appendChild(audio)
        document.getElementById('voiceList').appendChild(li);
    }
}