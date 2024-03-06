
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "container") {
    x.className += " responsive";
  } else {
    x.className = "container";
  }
}
