let homeScoreBtnOne = document.getElementById("home-score-btn1")
let homeScoreBtnTwo = document.getElementById("home-score-btn2")
let homeScoreBtnThree = document.getElementById("home-score-btn3")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreBtnOne = document.getElementById("guest-score-btn1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn2")
let guestScoreBtnThree = document.getElementById("guest-score-btn3")
let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0 

function homeOnePoint() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function homeTwoPoints() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function homeThreePoints() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function guestOnePoint() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function guestTwoPoints() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function guestThreePoints() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

