function creteList(itemsCount) {
    var html = '';

    for (var i = 0; i < itemsCount; i++) {

        let img = generateRandomImg();

        html += `<div class="slider-box">
                            <div class="slider-link__element">
                                <img src="${generateRandomImg()}" alt="" class="slider-link__img">
                            </div>
                        </div>`
    }

    document.querySelector('#slider__elements').innerHTML = html;
}
creteList(3);

function slideTo(direction) {
    var d = direction;
    var items = document.querySelector('#slider__elements');

    if (d == 'next') {
        items.insertBefore(generateItem(), items.firstChild);
        items.removeChild(items.lastChild);

    } else {
        items.appendChild(generateItem())
        items.removeChild(items.firstChild);
    }
}

function generateRandomImg() {
    var imageList = ["./img/b_happy_1.png", "./img/b_happy_2.png"];
    var img = Math.floor(Math.random() * imageList.length);

    return imageList[img];
}

function generateItem() {

    var fragment = document.createDocumentFragment()

    var box = document.createElement('div');
    box.className = 'slider-box';
    fragment.appendChild(box);

    var elem = document.createElement('div');
    elem.className = 'slider-link__element';

    box.insertBefore(elem, box.firstChild);
    var img = document.createElement('img');
    img.className = 'slider-link__img';
    img.src = generateRandomImg();
    elem.insertBefore(img, elem.firstChild);

    return fragment;
}

function next() {
    slideTo("next");
}

function back() {
    slideTo("back");
}