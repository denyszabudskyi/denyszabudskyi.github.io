// FUNCTIONS 

// Ця функція виконує провірку на пустоту або на введення різного виду лапок.
function isEmpty(event) {
    // Провірка на пусте поле
    if (!event.value.replace(/[\s]+/g, '')) {
        event.className = "field field-error";
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();

        var elem = document.createElement('div');
        elem.classList = "field-error_messege";
        elem.textContent = "Помилка! ( Це поле пусте )";
        event.parentNode.appendChild(elem);

        return true;
    }
    // Провірка на заборонені символи
    else if ((((event.value).search('"')) != -1) || (((event.value).search("'")) != -1)) {

        event.className = "field field-error";
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();

        var elem = document.createElement('div');
        elem.classList = "field-error_messege";
        elem.textContent = "Помилка! ( Присутній заборонені симлоли )";
        event.parentNode.appendChild(elem);

        return true;
    }
    // Помилок не виявлено
    else {
        event.classList.remove("field-error");
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();

        return false;
    }
}

// Ця функція виконує провірку на пустоту поля або на введення не дійсної дати
function isErrorDate(event) {

    var inputDate = new Date(event.value);
    var year = inputDate.getFullYear();
    var empty = ' ';
    empty = empty.replace(/^\s+|\s+$/g, '');

    if (year > 1970 && new Date(event.value).getFullYear() <= new Date().getFullYear()) {
        // Провірка успішна
        event.classList.remove("field-error");
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();
        return false;
    }
    else {
        // Провірка не пройшла
        event.className = "field field-error";
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();

        var elem = document.createElement('div');
        elem.classList = "field-error_messege";
        elem.textContent = "Помилка! ( Заповніть це поле реальною датою )";
        event.parentNode.appendChild(elem);
        return true;
    }

}

// Ця функція виконує провірку на вибір статі
function isErrorRadio() {

    if (document.querySelector('[value="male"]').checked || document.querySelector('[value="famel"]').checked) {
        // Успішна провірка
        document.getElementById("checkbox").classList.remove("field-error");
        document.getElementById("checkbox").parentNode.querySelector('.field-error_messege') && document.getElementById("checkbox").parentNode.querySelector('.field-error_messege').remove();
        return false;
    }
    else {
        document.getElementById("checkbox").className = "field-error";
        document.getElementById("checkbox").parentNode.querySelector('.field-error_messege') && document.getElementById("checkbox").parentNode.querySelector('.field-error_messege').remove();

        var elem = document.createElement('div');
        elem.classList = "field-error_messege";
        elem.textContent = "Помилка! ( Це поле не выбрано! )";
        document.getElementById('checkbox').parentNode.appendChild(elem);

        return true;
    }
}

// Ця функція виконує провірку на валідацію електронної адреси
function validateEmail(event) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        // Провірка успішна
        event.classList.remove("field-error");
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();
        return false;
    }
    else if (isEmpty(event)) {
        event.className = "field field-error";
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();

        var elem = document.createElement('div');
        elem.classList = "field-error_messege";
        elem.textContent = "Помилка! ( Це поле пусте )";
        event.parentNode.appendChild(elem);
        return false;
    }
    else {
        event.className = "field field-error";
        event.parentNode.querySelector('.field-error_messege') && event.parentNode.querySelector('.field-error_messege').remove();

        var elem = document.createElement('div');
        elem.classList = "field-error_messege";
        elem.textContent = "Помилка! ( Не вірна електронна адреса )";
        event.parentNode.appendChild(elem);
        return true;
    }

}

// Функція модального вікна
function modalBox(){
    // Get the modal
    event.preventDefault();
    var modal = document.getElementById('myModal');
    event.preventDefault();
    modal.style.display = "block";
}

// Функція запуску
function start() {
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        var type = inputs[i].type.toLowerCase();
        var result = false;
        if (type == 'text') {
            if (isEmpty(inputs[i])) {
                event.preventDefault();
            }
            else {
                result = true;
            }
        }
        else if (type == 'date') {
            if (isErrorDate(inputs[i])) {
                event.preventDefault();
            }
            else {
                result = true;
            }
        }
        else if (type == 'radio') {
            if (isErrorRadio()){
                event.preventDefault();
            }
            else {
                result = true;
            }
        }
        else if (type == 'email') {
            if (validateEmail(inputs[i])){
                event.preventDefault();
            }
            else {
                result = true;
            }
        }
        else if (type == 'password') {
            if (isEmpty(inputs[i])) {
                event.preventDefault();
            }
            else {
                result = true;
            }
        }
    }

    if(result == true) modalBox();
}

// WORK

document.addEventListener("DOMContentLoaded", function () {

    var name = document.getElementById("firstName");
    var surname = document.getElementById("lastName");
    var date = document.getElementById("date");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var adress = document.getElementById("adress");
    var close = document.getElementsByClassName("close")[0];
    // Запуск функцій на провірку після заповнення поля
    name.addEventListener("blur", function () {
        isEmpty(name);
    }, true);
    surname.addEventListener("blur", function () {
        isEmpty(surname);
    }, true);
    date.addEventListener("blur", function () {
        isErrorDate(date);
    }, true);
    email.addEventListener("blur", function () {
        validateEmail(email);
    }, true);
    password.addEventListener("blur", function () {
        isEmpty(password);
    }, true);
    adress.addEventListener("blur", function () {
        isEmpty(adress);
    }, true);

    // Виконання дії при натисканні хрестика на модальному вікні
    close.addEventListener("click", function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }, true);

    var form = document.getElementById("form-registration");
    // Провірка всіх полей після натискання кнопки "Відправити"
    form.addEventListener('submit', function (event) {
        start();
    });
});


