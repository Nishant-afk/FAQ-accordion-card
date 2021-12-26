
var acc = document.getElementsByClassName("accordian");
var i;

console.log("running successfully");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var hr = this.nextElementSibling;
    var panel = hr.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      hr.style.display = "block";
    } else {
      panel.style.display = "block";
      hr.style.display = "none";
    }
  });
}
