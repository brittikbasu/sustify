(function(){

    setTimeout(function(){ 
document.getElementById("cloudup").className = "inner-link appear fadeInUpBig";
console.log("animation 1 completed");
    }, 3300);

    setTimeout(function(){ 
    document.getElementById("cloudup").className = "inner-link appear rubberBand";
    console.log("animation 2 completed");
    }, 5700);

  })();
