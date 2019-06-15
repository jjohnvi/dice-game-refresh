var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
/**
 * select image element
 * replace the src attribute using setAttribute()
 *      - in the '....../dice' + randomNumber + '.png';
 */

 document.querySelector(".img1").setAttribute("src", "images copy/dice" + randomNumber1 + ".png");
 document.querySelector(".img2").setAttribute("src", "images copy/dice" + randomNumber2 + ".png");


 // var image1 = document.querySelectorAll('img');
//images = [img1, img2]

 var title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title.innerText = "Player 1 Wins!"
    } else if (randomNumber2 > randomNumber1) {
        title.innerText = "Player 2 Wins!"
    } else {
        title.innerText = "DRAW!"
    }





// var colors = ['red', 'orange', 'yellow','green','blue','violet','black','brown'];

// for(let i = 0; i < 1000; i++) {
//     (function(i,colors){
//         setTimeout(function() {
//             console.log(i);
//             button.setAttribute('style', `color: ${colors[i % colors.length]};`);
//         }, i * 10);
//     })(i, colors)
// }

