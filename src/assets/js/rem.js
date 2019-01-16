(function () {
  const widthRem = 750 / 100;
  function windowResize() {
    let fontSize = document.documentElement.clientWidth / widthRem + 'px';
    console.log(fontSize)
    document.documentElement.style.fontSize = fontSize;
  }
  windowResize();
  window.onresize = windowResize;
})()