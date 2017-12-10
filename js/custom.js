(function(){

    setTimeout(function(){ 
        document.getElementById("ipad").className = "appear fadeInDown";
        console.log("animation 0 completed");
            }, 600);

    setTimeout(function(){ 
document.getElementById("cloudup").className = "inner-link appear fadeInUpBig";
console.log("animation 1 completed");
    }, 3750);

  })();
