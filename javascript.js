
var balkans = ["Serbia", "Montenegro", "Bulgaria", "Romania", "Greece", "Ottoman Empire"];

$(document).ready(function(){ /* inici funcióJQuery */


  /* funcio omplir div*/ 


  $("button").click(function() {

  for(n=0; n<balkans.length; n++) {
    $("#balkan-wars").append(balkans[n]+"<br>");}

    $("button").css("pointer-events" , "none").css("background-color" , "maroon");

  });

  /* funcio canviar imatge*/  

  $("#soldats-montenegro").click(function(){

    if ($(this).attr('src')=="img/pic01.jpg") {
      $("#descripcio").html("Soldats <span id='nacio'>otomans</span><br>a les Guerres Balcàniques");
      $(this).attr("id", "soldats-otomans");
      $(this).attr("src", "img/pic02.jpg");
      $(this).attr("alt", "Soldats <span id='nacio'>otomans</span><br>a les Guerres Balcàniques");
    }

    else if ($(this).attr('src')=="img/pic02.jpg") {
      $("#descripcio").html("Soldats de <span id='nacio'>Montenegro</span><br>a les Guerres Balcàniques");
      $(this).attr("id", "soldats-montenegro"); 
      $(this).attr("src", "img/pic01.jpg");
      $(this).attr("alt", "Soldats de <span id='nacio'>Montenegro</span><br>a les Guerres Balcàniques");
    };
  
    });

/* final funcióJQuery */ }); 
