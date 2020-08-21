let de;
function setLang() {
  if (localStorage.getItem("deutsch") === "false") {
    de = false;
    document.querySelector("strong.en").style.color = "#69ce9b";
  } else {
    de = true;
    document.querySelector("strong.de").style.color = "#69ce9b";
  }
  return {
    de: de,
    toggleDE() {
      this.de = true;
      document.querySelector("strong.de").style.color = "#69ce9b";
      document.querySelector("strong.en").style.color = "#638686";
      localStorage.clear();
      localStorage.setItem("deutsch", "true");
    },
    toggleEN() {
      this.de = false;
      document.querySelector("strong.en").style.color = "#69ce9b";
      document.querySelector("strong.de").style.color = "#638686";
      localStorage.clear();
      localStorage.setItem("deutsch", "false");
    },
  };
}