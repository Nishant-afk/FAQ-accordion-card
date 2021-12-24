
var acc = document.getElementsByClassName("accordian");
var i;

console.log("running successfully");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*

var acc = document.getElementsByClassName("accordian");
var pan = document.getElementsByClassName("panel");

for(i=0; i<acc.length; i++){
  acc[i].addEventListener("click", function(){

    if (pan[i].style.display === "block") {
      pan[i].style.display = "none";
    } else {
      pan[i].style.display = "block";
    }
  });
}

*/