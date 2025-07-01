document.getElementById("btn").addEventListener("click", joke);

// Sound toggle logic
const soundDiv = document.getElementById("sound");
const soundImg = soundDiv.querySelector("img");
let isSoundOn = false; // When false, audio is muted; when true, audio is unmuted

soundDiv.addEventListener("click", () => {
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
        soundImg.src = "images/sound-off.svg";
        soundImg.alt = "Sound Off";
    } else {
        soundImg.src = "images/sound-on.svg";
        soundImg.alt = "Sound On";
    }
});

async function joke() {
    // Play the child-laughing audio only if sound is ON (sound-off image is visible)
    const audio = document.querySelector(".play-sound");
    if (audio && isSoundOn) {
        audio.currentTime = 0; // rewind to start
        audio.play();
    }
    let config = {
        headers: {
            accept: "application/json",
        },
    };

    let a = await fetch("https://icanhazdadjoke.com", config);
    let b = await a.json();
    document.getElementById("content"). innerHTML = b.joke;
}


