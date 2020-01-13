window.onload = () => {
  if (window.innerWidth >= 768) {
    document.querySelector(".delina-desktop").style.display = "inline";
  } else {
    document.querySelector(".delina-desktop").style.display = "none";
  }

  if (window.innerWidth < 768) {
    document.querySelector(".delina-mobile").style.display = "inline";
  } else {
    document.querySelector(".delina-mobile").style.display = "none";
  }
};
