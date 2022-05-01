const MAIN = document.getElementById("main");
const H_INPUT = document.getElementById("h");
const W_INPUT = document.getElementById("w");
const PLAY_BUTTON = document.getElementById("play");
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let played = false;
PLAY_BUTTON.addEventListener("click", play);

async function play() {
    if (!played) {
        let disp_area_temp = document.createElement("div");
        disp_area_temp.setAttribute("id", "disp_area");
        MAIN.appendChild(disp_area_temp);
        played = true;
    }
    const disp_area = document.getElementById("disp_area");
    disp_area.innerHTML = "";
    let h = H_INPUT.value;
    let w = W_INPUT.value;
    console.log(h);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            console.log(i, j);
            let temp = document.createElement("button");
            temp.innerText = `${i},${j}`;
            disp_area.appendChild(temp);
            await _sleep(200);
        }
        disp_area.appendChild(document.createElement("br"));
    }
}