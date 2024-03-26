let bill = document.getElementById("billamount");
let tip = document.getElementById("tipamount");
let total = document.getElementById("ans");

document.getElementById("btn").addEventListener("click", () => {
    if (bill.value == "") {
        alert("Please Enter a value")
    } else {
    
        let solu = ((bill.value) * (tip.value / 100));
        var x = Number(bill.value)
        total.innerHTML = `Total: ${solu + x} `
    }
})
