
var min = 1;
var max = 5;
var cartes_repartides = [];
var primera_carta = 0;
var segona_carta = 0;
var intentos = 0;
var aciertos = 0;

while (cartes_repartides.length < 20) { /* repartint cartes */
  
  var contador = 0;
  var z = Math.floor(Math.random() * (max - min + 1)) + min;

  for(n=0; n<=cartes_repartides.length; n++) {

    if(cartes_repartides[n] == z) {
    contador=contador+1;}}

    if(contador < 4) {cartes_repartides.push(z);}
}

$(document).ready(function(){ /* inici JQuery */

  for(n=0; n<cartes_repartides.length; n++) { /* posant cartes a la taula */
    $("#card"+n).attr("name", cartes_repartides[n]);}

  $("img").click(function(){ /* funcio principal */
  
    var flipped_card = $(this).attr("name");
    $(this).attr("src", "cards/"+flipped_card+".png");
    $(this).addClass("no-click");
    $(this).addClass("carta-tombada");

    if(primera_carta == 0) { /* primera carta */
        primera_carta = flipped_card;}

      else if (segona_carta == 0) { /* segona carta */

        segona_carta = flipped_card; 
        
        if(primera_carta == segona_carta) { /* acierto */
            $(".carta-tombada").attr("src", "cards/"+$(this).attr("name")+"_OK.png");
            $(".carta-tombada").addClass("carta-definitiva");
            $(".carta-tombada").removeClass("carta-tombada");
            $("#acierto").addClass("missatge-visible");
            aciertos = aciertos + 1;
            setTimeout(function(){
              $("#acierto").removeClass("missatge-visible");}
              ,2000)}

        else { /* error */
            $(".carta-tombada").addClass("carta-equivocada");
            $("#error").addClass("missatge-visible");
            setTimeout(function(){
              $(".carta-tombada").delay(1000).attr("src", "cards/0.png");
              $(".carta-tombada").removeAttr('class');
              $("#error").removeClass("missatge-visible");}
              ,2000);};
  
        primera_carta = 0; /* recompte / tornar a començar */
        segona_carta = 0;
        intentos = intentos + 1;

        if(aciertos == 10) { /* totes les cartes adivinades */
          setTimeout(function(){
          alert("los has intentando "+intentos+ " veces")}, 1000);
        }};
      
  /*final funció principal */});

/* final JQuery */ }); 




