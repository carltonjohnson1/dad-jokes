

document.getElementById("btn").addEventListener("click", joke);

async function joke() {
    let config = {
        headers: {
            accept: "application/json",
        },
    };

    let a = await fetch("https://icanhazdadjoke.com", config);
    let b = await a.json();
    document.getElementById("content"). innerHTML = b.joke;
}