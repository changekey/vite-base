const resize = function () {
  let emCount = 24;
  let fontSize =
    (document.documentElement.clientWidth > 750
      ? 750
      : document.documentElement.clientWidth) / emCount || 0;
  if (fontSize > 0 && fontSize <= 40) {
    document.documentElement.style.fontSize = fontSize + "px";
    document.body.style.fontSize = fontSize + "px";
  }
  if (fontSize > 40) {
    document.documentElement.style.fontSize = 40 + "px";
    document.body.style.fontSize = 40 + "px";
  }
};

window.addEventListener("load", resize);
window.addEventListener("resize", resize);
