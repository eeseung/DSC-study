const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// 시간 랜덤
function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min) // min ~ max
}

// 홀 랜덤
function randHole(holes) {
    const randIndex = Math.floor(Math.random() * holes.length)
    const hole = holes[randIndex]
    if(hole == lastHole) {
        return randHole(holes)
    }

    lastHole = hole
    return hole
}

// 두더지 튀어 나옴
function peep() {
    const time = randTime(1000, 2000)
    const hole = randHole(holes)
    hole.classList.add('up')

    setTimeout(() => {
        hole.classList.remove('up')
        if(!timeUp) {
            peep()
        }
    }, time)
}

// 게임 시작
function startGame() {
    scoreBoard.textContent = 0
    score = 0
    timeUp = false
    peep()

    setTimeout(() => timeUp = true, 10000) // 게임 시간
}

// 클릭 시 점수 획득​
function bonk(e) {
    if(!e.isTrusted) return 

    this.classList.remove('up')
    score++
    scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener('click', bonk));