const answers = [
    "Ask again later.", // 0
    "New ball, who dis.",
    "Hold on, I need some coffee",
    "No, Absolutely not.",
    "Yes, we went over this.",
    "Hey"
]
const forturne = document.getElementById('fortune');
//const fortuen = document.getElementById('.fortune')

let preNums = 0

function random () {
    let randomNum = Math.floor(Math.random() * (answers.length-1));
    console.log(randomNum);

    if (prev === randomNum) {
        random();
        return;
    }

    forturne.innerHTML = answers[randomNum]

    prev = randomNum
}