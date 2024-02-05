const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volimeSlider = document.querySelector(".volum-slider input")
const keysCheckbox = document.querySelector(".keys-checkBox input")
let audio = new Audio()     //by default, audio src is "A" tune     /()iske andar audio/a.wav song la add de skte

let allKey = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"];
const playTune = (key) => {
    console.log(key)
    audio.src = `audio/${key}.wav`
    audio.play();       //playing audio
}

pianoKeys.forEach(key => {
    //calling playtune function with passing data-key value as an argument
    // allKey.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const pressKey = (e) => {
    // console.log(e)
    if (allKey.includes(e.key))
        playTune(e.key);
}
document.addEventListener("keydown", pressKey)


//volume 
const handleVolume = (e) => {
    audio.volume = e.target.value    //passing the range slider value as an audio volume
}
volimeSlider.addEventListener("input", handleVolume);


//checkBox
const showHideKey = () => {
    //toggel hide class from each key on the chackbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}
keysCheckbox.addEventListener("click", showHideKey);