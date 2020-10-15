// Load navbar and add on click handler
$(function () {
  $(".navbar").load("navbar.html");
});

// Load up the footer
$(function () {
  $(".footer").load("footer.html", () => {

  });
});
