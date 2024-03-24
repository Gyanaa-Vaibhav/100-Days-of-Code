import qr from "qr-image";
import fs from "fs";

const bton = document.querySelector("svg")

bton.addEventListener("click", function () {
    var textToBeConverted = document.querySelector("input").value
    console.log(textToBeConverted)
    if (textToBeConverted === '') {
        alert("Please Enter Some Text")
    }
    var qr_svg = qr.image(textToBeConverted ,{type : 'png'});
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    document.querySelector("img").setAttribute("src" , "qr.png")
})


document.querySelector("img").classList.add("showimg");


var qr_svg = qr.image('I love QR!');
qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));


// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // file written successfully
//   }
// });