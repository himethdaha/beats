window.CSS.registerProperty({
  name: "--rotate",
  syntax: "<angle>",
  initialValue: "132deg",
  inherits: false,
});

window.addEventListener("keydown", function (e) {
  console.log(e);
  const noSound = document.querySelector(".error-sound");
  const sound = document.querySelector(`audio[data-key='${e.key}']`);
  const key = document.querySelector(`[data-key='${e.key}']`);
  const keys = document.querySelectorAll(".key");

  //If no audio src attatched with a key
  if (!sound) {
    // window.setTimeout(alert(`No sound attatched to ${e.key}`), 1000);
    return;
  } else {
    //If the user plays the same sound multiple times, use currentTime to set the start position of the audio
    sound.currentTime = 0;
    sound.play();
    //Grid cell animation
    key.classList.toggle("playing");

    //Remove the animation once the transition is done
    keys.forEach((key) =>
      window.addEventListener("transitionend", function () {
        key.classList.remove("playing");
      })
    );
  }
});
