const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 10;

numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

const GC = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

const BTU = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Breath in";
  setTimeout(() => {
    instructions.innerText = "Hold Breath";
    setTimeout(() => {
      instructions.innerText = "Breath out slowly";
    }, 4000);
  }, 4000);
};
const App = () => {
  const breathingAnimtaion = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    GC();
    BTU();
  }, 12000);
};

start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "Get relaxed, and ready to begin breathing";
  setTimeout(() => {
    instructions.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      App();
      GC();
      BTU();
    }, 2000);
  }, 2000);
});
