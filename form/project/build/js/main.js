// ФУНКЦІЇ ВАЛІДАЦІЇ ТА ІНШЕ

// Ця функція виконує провірку на пустоту або на введення різного виду лапок.
function isEmpty(element) {
    var contentMessege = " ";
    if (!element.value.replace(/[\s]+/g, '')) {
        // Поле пусте, запускаємо функцію створення повідомлення.
        contentMessege = "Помилка! ( Це поле пусте )";
        createMessege(element, contentMessege);
    }
    // В полі заборонені символи, запускаємо функцію створення повідомлення.
    else if ((((element.value).search('"')) != -1) || (((element.value).search("'")) != -1)) {
        contentMessege = "Помилка! ( Присутній заборонені симлоли )";
        createMessege(element, contentMessege);

    }
    // Помилок не виявлено, запускаємо функцію на видалення повідомлення про помилку якщо воно присутнє.
    else {
        removeMessege(element);
    }
}
// Ця функція виконує провірку на пустоту поля або на введення не дійсної дати
function isDate(element) {

    var dateElement = new Date(element.value);
    var yearElement = dateElement.getFullYear();

    if (yearElement > 1970 && new Date(element.value).getFullYear() <= new Date().getFullYear()) {
        // Помилок не виявлено, запускаємо функцію на видалення повідомлення про помилку якщо воно присутнє.
        removeMessege(element);
    }
    else {
        contentMessege = "Помилка! ( Заповніть це поле реальною датою )";
        createMessege(element, contentMessege);
    }
}
// Ця функція виконує провірку на вибір статі 
function isRadio(element) {

    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var value = radios.length > 0 ? true : false;
    if (value) {
        // Помилок не виявлено, запускаємо функцію на видалення повідомлення про помилку якщо воно присутнє.
        removeMessege(element);
    }
    else {
        contentMessege = "Помилка! ( В цьому полі не вибрано жодного варіанту )";
        createMessege(element, contentMessege);
    }
}
// Ця функція виконує провірку на валідацію електронної адреси
function isEmail(element) {

    var contentMessege = " ";
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(element.value)) {
        // Помилок не виявлено, запускаємо функцію на видалення повідомлення про помилку якщо воно присутнє.
        removeMessege(element);
    }

    else if (!element.value.replace(/[\s]+/g, '')) {
        // Поле пусте, запускаємо функцію створення повідомлення.
        contentMessege = "Помилка! ( Це поле пусте )";
        createMessege(element, contentMessege);
    }
    // В полі заборонені символи, запускаємо функцію створення повідомлення.
    else if ((((element.value).search('"')) != -1) || (((element.value).search("'")) != -1)) {
        contentMessege = "Помилка! ( Присутній заборонені симлоли )";
        createMessege(element, contentMessege);

    }
    else {
        contentMessege = "Помилка! ( Не вірна електронна адреса )";
        createMessege(element, contentMessege);
    }

}

// Ця функція виконує провірку чи вибрана країна в списку
function isCountry() {

    var county = document.getElementById('country');
    if (county.selectedIndex != 0) {
        // Помилок не виявлено, запускаємо функцію на видалення повідомлення про помилку якщо воно присутнє.
        removeMessege(county);
    }
    else {
        contentMessege = "Помилка! ( В цьому полі не вибрано жодного варіанту )";
        createMessege(county, contentMessege);
    }
}
// ФУНКЦІЇ РОБОТИ ІЗ ПОМИЛКАМИ

function isError() {
    let errorElem = document.querySelector('.form-registration__field_error');
    if (typeof (errorElem) != 'undefined' && errorElem != null) {
        event.preventDefault();
    }
    else{
        modalShow();
    }
}

// Ця функція виконує відображення модального вікна
function modalShow() {
    event.preventDefault();
    var modal = document.getElementById('Modal');
    modal.style.display = "block";
}
// Ця функція ховає відображення модального вікна
function modalHidden(){
   document.getElementById('form-main').submit();
    var modal = document.getElementById('Modal');
    modal.style.display = "none";
}
// Виконання дії при натисканні хрестика на модальному вікні
document.getElementById('Close').addEventListener("click", function () {
    modalHidden();
}, true);
function createMessege(field, text) {
    field.className = "form-registration__field form-registration__field_error";
    field.parentNode.querySelector('.form-registration__messege') && field.parentNode.querySelector('.form-registration__messege').remove();

    var messege = document.createElement('div');
    messege.classList = "form-registration__messege";
    messege.textContent = text;
    field.parentNode.appendChild(messege);
}
function removeMessege(field) {
    field.classList.remove("form-registration__field_error");
    field.parentNode.querySelector('.form-registration__messege') && field.parentNode.querySelector('.form-registration__messege').remove();
}

// Ця функція виконує пошук по типу едементів та запускає іншії функції для валідації полей
function findType() {
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        var type = inputs[i].type.toLowerCase();
        if (type == 'text') {
            isEmpty(inputs[i]);
        }
        else if (type == 'date') {
            isDate(inputs[i]);
        }
        else if (type == 'radio') {
            isRadio(inputs[i]);
        }
        else if (type == 'email') {
            isEmail(inputs[i]);
        }
        else if (type == 'password') {
            isEmpty(inputs[i]);
        }
        else if (type == 'adress') {
            isEmpty(inputs[i]);
        }
    }
    isCountry();
    isError();
}

// ЗАПУСК
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form-main");
    form.addEventListener('submit', function (event) {
        findType();
    });
});


