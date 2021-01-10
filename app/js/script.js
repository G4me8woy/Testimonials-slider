var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');

var button = document.querySelector('.buttons');


leftButton.addEventListener('click', swap);
rightButton.addEventListener('click', swap);




var image = document.querySelector('.img');
var message = document.querySelector('.msg');
var _name = document.querySelector('.name');
var position = document.querySelector('.position');


function swap() {

    var john = {
        'name': 'John Takpor',
        'position': 'Junior Front-end Developer',
        'message': '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        'profile-path': './images/image-john.jpg',
    };

    var tanya = {
        'name': 'Tanya Sinclair',
        'position': 'UX Engineer',
        'message': '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        'profile-path': './images/image-tanya.jpg',
    }

    if (image.getAttribute('src') == tanya["profile-path"]) {

        image.setAttribute('src', john["profile-path"]);
        message.textContent = john.message;
        _name.textContent = john.name;
        position.textContent = john.position;

    } else {
        image.setAttribute('src', './images/image-tanya.jpg')
        image.setAttribute('src', tanya["profile-path"]);
        message.textContent = tanya.message;
        _name.textContent = tanya.name;
        position.textContent = tanya.position;
    }


    // alert(image.getAttribute('src'));



}