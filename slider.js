$(document).ready(function() {
  initSlider();


  function initSlider()
  {
    // Here, we load the HTML hook.
    var sliderData = $('#slider-container img');

    // If it is broken, it throws an error to stop the script.
    is(sliderData.length == 0)  {
      throw "Erreur de selection";
    }
    $('#slider-container').remove();
  }


});
