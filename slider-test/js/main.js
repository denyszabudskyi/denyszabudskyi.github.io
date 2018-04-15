image = new Array();
image[0] = "./img/b_happy_1.png";
image[1] = "./img/b_happy_2.png";

for (var i = 0; i < 3; i++) {
    var rand = Math.round(Math.random());
    console.log(rand);
    var sliderElements = document.getElementById("slider__elements");
    var box = document.createElement('div');
    box.id = 'slider-box';
    // box.className = arr[i];
    // box.style.animationName = "animationclick";
    sliderElements.appendChild(box);
    var elem = document.createElement('div');
    elem.id = 'slider-link__element';
    box.appendChild(elem);
    var img = document.createElement('img');
    img.id = 'slider-link__img';
    img.src = image[rand];
    elem.appendChild(img);
    console.log(box);
}



function add() {

    var rand = Math.round(Math.random());
    console.log(rand);
    var sliderElements = document.getElementById("slider__elements");
    sliderElements.removeChild(sliderElements.firstChild);
    var box = document.createElement('div');
    box.id = 'slider-box';
    // box.style.animationName = "animationclick";
    sliderElements.appendChild(box);
    var elem = document.createElement('div');
    elem.id = 'slider-link__element';
    box.appendChild(elem);
    var img = document.createElement('img');
    img.id = 'slider-link__img';
    img.src = image[rand];
    elem.appendChild(img);
    console.log(box);



}



function back() {
    var rand = Math.round(Math.random());
    console.log(rand);

    var sliderElements = document.getElementById("slider__elements");

    var box = document.createElement('div');
    box.id = 'slider-box';
    sliderElements.insertBefore(box, sliderElements.firstChild);

    sliderElements.removeChild(sliderElements.lastChild);
    var elem = document.createElement('div');
    elem.id = 'slider-link__element';

    box.insertBefore(elem, box.firstChild);
    var img = document.createElement('img');
    img.id = 'slider-link__img';
    img.src = image[rand];
    elem.insertBefore(img, elem.firstChild);


    console.log(box);
}