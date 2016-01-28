$(function() {

  $(".country").on("click", function(event) {
    event.preventDefault();
    var elements = $(this);
    elements.remove();
  })

})