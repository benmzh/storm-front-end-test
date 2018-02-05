document.getElementById("hero--cta--signup").addEventListener("click", function(e) {
  $("#homepage-signup").css("display", "flex");
});

document.getElementById("homepage-signup--close").addEventListener("click", function(e) {
  $("#homepage-signup").css("display", "none");
});
