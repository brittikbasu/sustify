// (function(){

//     setTimeout(function(){
//         document.getElementById("ipad").className = "appear fadeInDown";
//         console.log("animation 0 completed");
//             }, 600);

//    /* setTimeout(function(){
// document.getElementById("cloudup").className = "inner-link appear fadeInUpBig";
// console.log("animation 1 completed");
//     }, 1300);
// */
//   })();

var delina = () => {
  if (window.innerWidth >= 768 && window.scrollY > 923) {
    document.querySelector(".delina-desktop").style.display = "inline";
  } else {
    document.querySelector(".delina-desktop").style.display = "none";
  }

  if (window.innerWidth < 768 && window.scrollY >= 745) {
    document.querySelector(".delina-mobile").style.display = "inline";
  } else {
    document.querySelector(".delina-mobile").style.display = "none";
  }
};

window.addEventListener("scroll", delina);
window.onload(delina);
