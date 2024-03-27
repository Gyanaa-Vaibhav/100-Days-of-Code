const bton = document.getElementById("btn");


bton.addEventListener("click", () => {
    let ans = document.getElementById("answer");
    let x = Math.floor(Math.random()*6)+1;
    console.log(x);

    switch (x) {
        case 1:
            ans.innerHTML = "&#9856";
            break;
        case 2:
            ans.innerHTML = "&#9857";
            break;
        case 3:
            ans.innerHTML = "&#9858";
            break;
        case 4:
            ans.innerHTML = "&#9859";
            break;
        case 5:
            ans.innerHTML = "&#9860";
            break;
        case 6:
            ans.innerHTML = "&#9861";
            break;
        default:
            break;
    }
})

