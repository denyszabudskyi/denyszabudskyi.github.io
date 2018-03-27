var counter;
function next(arr) {
  var max = arr.length - 1,
    i = 0;
  return function() {
    i = i < max ? i + 1 : 0;
    return arr[i];
  };
}
function work() {
  setTimeout(function() {
    counter().checked = true;
    work();
  }, 5000);
}
window.onload = function() {
  var els = document.querySelectorAll(".fullscreen-slider>input");
  counter = next(els);
  work();
};
