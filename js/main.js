window.onscroll = scrollNav;

function scrollNav() {
  const top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 100) {
    $("#app__navbar").addClass("active");
  } else {
    if (!$("#app__navbar").hasClass("active-expanded")) {
      $("#app__navbar").removeClass("active");
    }
  }
}

$(document).ready(function () {
  scrollNav();

  $(".navbar-toggler").on("click", function () {
    $("#app__navbar").toggleClass("active-expanded");
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (top < 100) {
      $("#app__navbar").toggleClass("active");
    }
  });
});
