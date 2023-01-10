window.addEventListener("load", start);

//const da det er en variabel, som ikke skal ændre sig undervejs og herefter tildeler den en værdi//
function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");
//   const stopBtn = document.querySelector("stop");

  video.addEventListener("click", playVideo);
  playBtn.addEventListener("click", playVideo);
//   stopBtn.addEventListener("click", stopVideo);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url()";
    } else {
      video.pause();
    //   playBtn.style.backgroundImage = "url(billeder/play.svg)";
    } 
  }
}
