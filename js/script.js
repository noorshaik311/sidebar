$(document).ready(function(){
  let sidebar = document.getElementsByClassName("sidebar");
  let sidebar2 = document.getElementsByClassName("sidebar-After");
  console.log(sidebar[0].classList);
  let button = document.getElementById("toggle");
  button.addEventListener("click", function () {
    if (sidebar[0].classList.contains("inactive")) {
      sidebar[0].classList.remove("inactive");
      sidebar2[0].classList.add("inactive");
    } else {
      sidebar2[0].classList.remove("inactive");
      sidebar[0].classList.add("inactive");
    }
  });
});

