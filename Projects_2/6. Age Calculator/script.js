let dateOfBirth = document.getElementById("date");
let bton = document.getElementById("btn");
let ans1 = document.getElementById("answer")

let d = new Date();
let year = d.getFullYear();

bton.addEventListener("click", () => {

    if (dateOfBirth.value === "") {
        alert("Please Fill the details")
    } else {

        let answewr = dateOfBirth.value.substring(0, 4);
        let ans = (-Number(answewr) + year);
        ans1.innerHTML = `Your Age is ${ans}`
    }
})

