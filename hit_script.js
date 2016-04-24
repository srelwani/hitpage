
// function for getting URL parameters
function gup(name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if(results == null)
    return "";
  else return unescape(results[1]);
}

$(document).ready(function(){
/*	$(".img-container").click(function(){
    $(".img-container").removeClass("active");
    $(this).addClass("active");
    var selection = $(this).find(".select").data("value");
    $("#choice").val(selection);
  })*/
  /*Getting the value of the checked radio buttons*/

  $("input:radio[class=modeClass]").on( 'click', function () {
      var value = $(this).val();
      if (value == "Wrong Answer") {
          $("#next_step_form").hide();
      }
      if (value == "Next Step") {
          $("#next_step_form").show();
          $("#goldstandardquestion").hide();
      }
  });

  $("#context").text(gup("question"));
  $("#description").text(gup("description"));
  $("#choice1").attr("src",gup("image1"));
  $("#choice2").attr("src",gup("image2"));

});
