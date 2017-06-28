$(document).ready(function() {
  var sliderHTML = "";
  var sliderData;
  var height= "500";
  initSlider();
  createSlider();
  render();



  function initSlider()
  {
    // Here, we load the HTML hook.
    sliderData = $('#slider-container img');

    // If it is broken, it throws an error to stop the script.
    if(sliderData.length == 0)  {
      throw "Erreur de selection";
    }
    $('#slider-container').remove();
  }

  function render()
  {
    $('body').append(sliderHTML);
  }
  function createSlider()
  {
    sliderHTML += "<div id='slider-container' style='display:flex;flex-direction:row;overflow:hidden;width:100%;min-height:100vh;max-height:100%;position:absolute;top:0;left:0;margin:0auto;'>";
      for (var i = 0; i < sliderData.length; i++) {
        var display = "";
        if(i ==0);  {
          display ="display:none;justify-content:center;";
        } else {
          display="display=none;";
        }
      sliderHTML += "<div style='width:100%;height:500px;" + display + "'>";
      sliderHTML += "<img src='" + $(sliderData[i])[0].src + "' style='height:" + height + "px;width:auto;'>";
      sliderHTML += "</div>";
      }
    sliderHTML += "</div>";
    sliderHTML += "button data-action=>"Left"><</button>";
    sliderHTML += "button data-action=>"Right"><</button>";
  }

});
