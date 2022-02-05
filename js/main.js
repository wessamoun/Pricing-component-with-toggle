let switcher = document.querySelector('.switcher');
let circle = document.querySelector('.circle');
let mon = document.querySelectorAll(".mon")
let an = document.querySelectorAll(".an")
switcher.addEventListener("click", function(e) {
  circle.classList.toggle("ann")
  if (circle.classList.contains("ann")) {
    mon.forEach(function(m) {
      m.style.display = "none"
    })
    an.forEach(function(a) {
      a.style.display = "block"
    })
  } else {
    mon.forEach(function(m) {
      m.style.display = "block"
    })
    an.forEach(function(a) {
      a.style.display = "none"
    })
  }
} )
