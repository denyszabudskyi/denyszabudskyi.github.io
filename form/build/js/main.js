// FUNCTIONS 

function isEmpty(field) {

    var empty = ' ';
    var sign = field.value;
    empty = empty.replace(/^\s+|\s+$/g, '');
    sign = sign.search('"');

    if (field.value == empty || sign != -1) {
        field.className = "field-error";
        console.log("false");
    }
    else {
        console.log("true");
        field.classList.remove("field-error")
    }
}



// WORK

document.addEventListener("DOMContentLoaded", function () {

    // debugger;
    var name = document.getElementById("firstName");
    document.getElementById("firstName").addEventListener("blur", function () {
        isEmpty(name);
    }, true);

    // var form = document.getElementById("form-registration");

    // form.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     console.log("click");
    // });
});


