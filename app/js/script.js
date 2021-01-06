var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');

var button = document.querySelector('.buttons');

button.addEventListener('click', swap);




// var image = document.querySelector('.img');
// var testimony = document.querySelector('.testimony');



// leftButton.addEventListener('click', swap);
// leftButton.addEventListener('click', swap);



function swap() {

    if (image.getAttribute("src") == "./images/image-tanya.jpg") {
        image.setAttribute("src", "./images/image-john.jpg");
        console.log("change 1");
    } else {
        image.setAttribute("src", "./images/image-tanya.jpg");
        console.log("change 2");
    }

}