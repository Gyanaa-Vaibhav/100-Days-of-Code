let principleAmount = document.getElementById("principle");
let intrestPercent = document.getElementById("Interest");
let timeYears = document.getElementById("Years");
const answer = document.getElementById("answer")
const answerM = document.getElementById("answermonth")
const bton = document.getElementById("btn");
const body = document.querySelector("body");

function calculate() {
    if (principleAmount.value === '' || intrestPercent.value === '' || timeYears.value === '') {
        alert("Please Fill out all the details")
    } else {
        let totalIntrest = ((principleAmount.value * 1) + ((principleAmount.value * intrestPercent.value * timeYears.value) / 100));
        answer.innerHTML = totalIntrest;
        answerM.innerHTML = (totalIntrest / 12).toFixed(2);
        answer.classList.add("show");
        answerM.classList.add("show");
    }
}

bton.addEventListener("click", calculate);

body.addEventListener("keydown", () => {
    if (event.code == 'Enter') {
        return calculate();
    }
})
