import "https://unpkg.com/@material/web@1.0.0-pre.8/button/outlined-button.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/button/text-button.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/button/tonal-button.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/fab/fab.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/icon/icon.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/select/filled-select.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/select/select-option.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/slider/slider.js?module";
import "https://unpkg.com/@material/web@1.0.0-pre.8/switch/switch.js?module";

let currentTimout = null;
let mole = null;
let time = null;
let rightKeyUsed = false;
let bottomKeyUsed = false;
let leftKeyUsed = false;
let topKeyUsed = false;
let rightKeyPressed = false;
let bottomKeyPressed = false;
let leftKeyPressed = false;
let topKeyPressed = false;
let points = 0;
let pauseButton = document.getElementById("pause-button");
const timeText = document.getElementById("time-text");

const initialMode = localStorage.getItem("mode");
const body = document.body;
const bodyClasses = body.classList;
const colorScheme = document.getElementById("color-scheme");
const modeSelect = document.getElementById("mode");
const defaultMode = modeSelect.querySelector("md-select-option");
const defaultModeIconClasses = defaultMode.querySelector("md-icon").classList;
if (initialMode) {
  bodyClasses.add(initialMode);
  colorScheme.content = initialMode;
  defaultMode.selected = false;
  defaultModeIconClasses.add("invisible");
  const selectedMode = modeSelect.querySelector(`[value="${initialMode}"]`);
  selectedMode.selected = true;
  selectedMode.querySelector("md-icon").classList.remove("invisible");
}
let duration = parseInt(localStorage.getItem("duration") || 30);
const durationSlider = document.getElementById("duration-slider");
durationSlider.value = duration;
durationSlider.valueLabel = formatTime();
const flowersSlider = document.getElementById("flowers-slider");
let flowersAmount = parseInt(localStorage.getItem("flowers") || 13);
flowersSlider.value = flowersAmount;
flowersSlider.valueLabel = `${flowersAmount}%`;
const pinkButterfliesSlider = document.getElementById(
  "pink-butterflies-slider"
);
let pinkButterfliesAmount = parseInt(
  localStorage.getItem("pinkButterflies") || 2
);
pinkButterfliesSlider.value = pinkButterfliesAmount;
pinkButterfliesSlider.valueLabel = `${pinkButterfliesAmount}%`;
const orangeButterfliesSlider = document.getElementById(
  "orange-butterflies-slider"
);
let orangeButterfliesAmount = parseInt(
  localStorage.getItem("orangeButterflies") || 2
);
orangeButterfliesSlider.value = orangeButterfliesAmount;
orangeButterfliesSlider.valueLabel = `${orangeButterfliesAmount}%`;
const blueButterfliesSlider = document.getElementById(
  "blue-butterflies-slider"
);
let blueButterfliesAmount = parseInt(
  localStorage.getItem("blueButterflies") || 2
);
blueButterfliesSlider.value = blueButterfliesAmount;
blueButterfliesSlider.valueLabel = `${blueButterfliesAmount}%`;
const deactivateFullscreen = document.getElementById("deactivate-fullscreen");
if (localStorage.getItem("deactivateFullscreen") !== null) {
  deactivateFullscreen.selected = true;
}

const modeIcons = modeSelect.querySelectorAll("md-select-option md-icon");
modeSelect.addEventListener("change", () => {
  bodyClasses.remove("dark", "light");
  modeIcons.forEach((icon) => icon.classList.add("invisible"));
  const newMode = modeSelect.value;
  if (!newMode) {
    localStorage.removeItem("mode");
    colorScheme.content = "light dark";
    defaultModeIconClasses.remove("invisible");
    return;
  }
  localStorage.setItem("mode", newMode);
  bodyClasses.add(newMode);
  colorScheme.content = mode;
  modeSelect
    .querySelector(`[value="${newMode}"] md-icon`)
    .classList.remove("invisible");
});

durationSlider.addEventListener("change", () =>
  changeDuration(parseInt(durationSlider.value))
);

durationSlider.addEventListener("pointermove", () =>
  changeDuration(parseInt(durationSlider.value))
);

document
  .getElementById("reset-duration-button")
  .addEventListener("click", () => {
    durationSlider.value = "30";
    changeDuration(30);
  });

flowersSlider.addEventListener("change", () =>
  changeFlowersAmount(parseInt(flowersSlider.value))
);

flowersSlider.addEventListener("pointermove", () =>
  changeFlowersAmount(parseInt(flowersSlider.value))
);

document
  .getElementById("reset-flowers-button")
  .addEventListener("click", () => {
    flowersSlider.value = "13";
    changeFlowersAmount(13);
  });

pinkButterfliesSlider.addEventListener("change", () =>
  changePinkButterfliesAmount(parseInt(pinkButterfliesSlider.value))
);

pinkButterfliesSlider.addEventListener("pointermove", () =>
  changePinkButterfliesAmount(parseInt(pinkButterfliesSlider.value))
);

document
  .getElementById("reset-pink-butterflies-button")
  .addEventListener("click", () => {
    pinkButterfliesSlider.value = "2";
    changePinkButterfliesAmount(2);
  });

orangeButterfliesSlider.addEventListener("change", () =>
  changeOrangeButterfliesAmount(parseInt(orangeButterfliesSlider.value))
);

orangeButterfliesSlider.addEventListener("pointermove", () =>
  changeOrangeButterfliesAmount(parseInt(orangeButterfliesSlider.value))
);

document
  .getElementById("reset-orange-butterflies-button")
  .addEventListener("click", () => {
    orangeButterfliesSlider.value = "2";
    changeOrangeButterfliesAmount(2);
  });

blueButterfliesSlider.addEventListener("change", () =>
  changeBlueButterfliesAmount(parseInt(blueButterfliesSlider.value))
);

blueButterfliesSlider.addEventListener("pointermove", () =>
  changeBlueButterfliesAmount(parseInt(blueButterfliesSlider.value))
);

document
  .getElementById("reset-blue-butterflies-button")
  .addEventListener("click", () => {
    blueButterfliesSlider.value = "2";
    changeBlueButterfliesAmount(2);
  });

deactivateFullscreen.addEventListener("change", () => {
  if (!deactivateFullscreen.selected) {
    localStorage.removeItem("deactivateFullscreen");
    return;
  }
  localStorage.setItem("deactivateFullscreen", "");
});

const menuClasses = document.getElementById("menu").classList;
const gameClasses = document.getElementById("game").classList;
const gameboard = document.getElementById("gameboard");
const gameboardClasses = gameboard.classList;
document.getElementById("play-button").addEventListener("click", () => {
  menuClasses.add("removed");
  gameClasses.remove("removed");
  if (!deactivateFullscreen.selected) {
    body.requestFullscreen();
  }
  play();
});

const highlightButton = document.getElementById("highlight-button");
highlightButton.addEventListener("click", () => {
  mole.remove();
  gameboard.appendChild(mole);
});

document.getElementById("game-menu-button").addEventListener("click", () => {
  gameClasses.add("removed");
  menuClasses.remove("removed");
  if (!deactivateFullscreen.selected) {
    document.exitFullscreen();
  }
  resetGameboard();
});

document.getElementById("restart-button").addEventListener("click", () => {
  resetGameboard();
  play();
});

addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "ArrowRight" || key === "d") {
    rightKeyUsed = true;
    rightKeyPressed = true;
  }
  if (key === "ArrowDown" || key === "s") {
    bottomKeyUsed = true;
    bottomKeyPressed = true;
  }
  if (key === "ArrowLeft" || key === "a") {
    leftKeyUsed = true;
    leftKeyPressed = true;
  }
  if (key === "ArrowUp" || key === "w") {
    topKeyUsed = true;
    topKeyPressed = true;
  }
});

addEventListener("keyup", (event) => {
  const key = event.key;
  if (key === "ArrowRight" || key === "d") {
    rightKeyPressed = false;
  }
  if (key === "ArrowDown" || key === "s") {
    bottomKeyPressed = false;
  }
  if (key === "ArrowLeft" || key === "a") {
    leftKeyPressed = false;
  }
  if (key === "ArrowUp" || key === "w") {
    topKeyPressed = false;
  }
});

addEventListener("fullscreenchange", unpressKeys);

addEventListener("contextmenu", unpressKeys);

addEventListener("blur", unpressKeys);

document.getElementById("end-menu-button").addEventListener("click", () => {
  endClasses.add("removed");
  menuClasses.remove("removed");
});

const endClasses = document.getElementById("end").classList;
document.getElementById("again-button").addEventListener("click", () => {
  endClasses.add("removed");
  gameClasses.remove("removed");
  if (!deactivateFullscreen.selected) {
    body.requestFullscreen();
  }
  play();
});

function changeDuration(seconds) {
  duration = seconds;
  const formattedDuration = formatTime();
  durationSlider.valueLabel = formattedDuration;
  timeText.textContent = formattedDuration;
  if (duration === 30) {
    localStorage.removeItem("duration");
    return;
  }
  localStorage.setItem("duration", String(duration));
}

function changeFlowersAmount(amount) {
  flowersAmount = amount;
  flowersSlider.valueLabel = `${flowersAmount}%`;
  if (flowersAmount === 13) {
    localStorage.removeItem("flowers");
    return;
  }
  localStorage.setItem("flowers", String(flowersAmount));
}

function changePinkButterfliesAmount(amount) {
  pinkButterfliesAmount = amount;
  pinkButterfliesSlider.valueLabel = `${pinkButterfliesAmount}%`;
  if (pinkButterfliesAmount === 2) {
    localStorage.removeItem("pinkButterflies");
    return;
  }
  localStorage.setItem("pinkButterflies", String(pinkButterfliesAmount));
}

function changeOrangeButterfliesAmount(amount) {
  orangeButterfliesAmount = amount;
  orangeButterfliesSlider.valueLabel = `${orangeButterfliesAmount}%`;
  if (orangeButterfliesAmount === 2) {
    localStorage.removeItem("orangeButterflies");
    return;
  }
  localStorage.setItem("orangeButterflies", String(orangeButterfliesAmount));
}

function changeBlueButterfliesAmount(amount) {
  blueButterfliesAmount = amount;
  blueButterfliesSlider.valueLabel = `${blueButterfliesAmount}%`;
  if (blueButterfliesAmount === 2) {
    localStorage.removeItem("blueButterflies");
    return;
  }
  localStorage.setItem("blueButterflies", String(blueButterfliesAmount));
}

function formatTime(seconds = duration) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
    seconds % 60
  ).padStart(2, "0")}\u00A0Minuten`;
}

async function play() {
  const countdown = document.createElement("p");
  countdown.textContent = "3";
  countdown.classList.add(
    "display-large",
    "surface-container-high",
    "on-surface-text"
  );
  gameboard.appendChild(countdown);
  await waitOneSecond();
  countdown.textContent = "2";
  const width = gameboard.clientWidth;
  const fittingAmount = (width * innerHeight) / 576;
  createGameElements(
    "local_florist",
    fittingAmount * (flowersAmount / 100),
    "on-primary-container-text"
  );
  await waitOneSecond();
  countdown.textContent = "1";
  createGameElements(
    "bug_report",
    fittingAmount * (pinkButterfliesAmount / 100),
    "butterfly",
    "pink-butterfly"
  );
  createGameElements(
    "bug_report",
    fittingAmount * (orangeButterfliesAmount / 100),
    "butterfly",
    "orange-butterfly"
  );
  createGameElements(
    "bug_report",
    fittingAmount * (blueButterfliesAmount / 100),
    "butterfly",
    "blue-butterfly"
  );
  await waitOneSecond();
  countdown.remove();
  gameboardClasses.remove("overlay");
  const safeWidth = width - 23;
  const safeHeight = innerHeight - 23;
  let left = null;
  let top = null;
  do {
    left = Math.random() * safeWidth;
    top = Math.random() * safeHeight;
  } while (
    findCollidingElements(left, top, "md-icon:not(.primary-text)").length
  );
  mole = document.createElement("md-icon");
  mole.textContent = "my_location";
  const style = mole.style;
  style.left = `${left}px`;
  style.top = `${top}px`;
  mole.classList.add("primary-text");
  gameboard.appendChild(mole);
  highlightButton.disabled = false;
  pauseButton.disabled = false;
  time = duration * 1000;
  startLoop();
}

function waitOneSecond() {
  return new Promise(
    (resolve) => (currentTimout = setTimeout(() => resolve(), 1000))
  );
}

function createGameElements(icon, amount, ...classes) {
  const width = gameboard.clientWidth - 23;
  const height = innerHeight - 23;
  for (let i = 0; i <= amount; i++) {
    const element = document.createElement("md-icon");
    element.textContent = icon;
    const style = element.style;
    style.left = `${Math.random() * width}px`;
    style.top = `${Math.random() * height}px`;
    element.classList.add(...classes);
    gameboard.appendChild(element);
  }
}

function findCollidingElements(
  left,
  top,
  selector = ".on-primary-container-text"
) {
  const right = left + 24;
  const bottom = top + 24;
  return Array.from(gameboard.querySelectorAll(selector)).filter((element) => {
    const elementStyle = element.style;
    const elementLeft = parseFloat(elementStyle.left);
    const elementTop = parseFloat(elementStyle.top);

    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection#axis-aligned_bounding_box
    if (
      elementLeft < right &&
      elementLeft + 24 > left &&
      elementTop < bottom &&
      elementTop + 24 > top
    ) {
      return true;
    }

    return false;
  });
}

const gamePointsText = document.getElementById("game-points-text");
const timeTextClasses = timeText.classList;
const endPointsText = document.getElementById("end-points-text");

function startLoop() {
  pauseButton.addEventListener("click", pauseGame);
  unuseKeys();
  currentTimout = setInterval(() => {
    const moleStyle = mole.style;
    const currentMoleLeft = parseFloat(moleStyle.left);
    const currentMoleTop = parseFloat(moleStyle.top);
    findCollidingElements(
      currentMoleLeft,
      currentMoleTop,
      ".butterfly"
    ).forEach((butterfly) => {
      butterfly.remove();
      const butterflyClasses = butterfly.classList;
      if (butterflyClasses.contains("pink-butterfly")) {
        points += 1;
      } else if (butterflyClasses.contains("orange-butterfly")) {
        points += 2;
      } else {
        points += 3;
      }
      const random = Math.floor(
        Math.random() *
          (pinkButterfliesAmount +
            orangeButterfliesAmount +
            blueButterfliesAmount)
      );
      let type = "pink-butterfly";
      if (random >= pinkButterfliesAmount && random < orangeButterfliesAmount) {
        type = "orange-butterfly";
      } else if (random >= orangeButterfliesAmount) {
        type = "blue-butterfly";
      }
      createGameElements("bug_report", 1, "butterfly", type);
    });
    gamePointsText.textContent = `${points} Punkte`;
    time -= 125;
    if (!(time % 1000)) {
      if (time) {
        const seconds = time / 1000;
        if (seconds === 5) {
          timeTextClasses.add("error-text");
        }
        timeText.textContent = formatTime(seconds);
      } else {
        gameClasses.add("removed");
        endPointsText.textContent = `${points} Punkte`;
        endClasses.remove("removed");
        if (!deactivateFullscreen.selected) {
          document.exitFullscreen();
        }
        resetGameboard();
      }
    }
    const width = gameboard.clientWidth - 24;
    const height = innerHeight - 24;
    const remainingForRight = width - currentMoleLeft;
    const remainingForBottom = height - currentMoleTop;
    const moveToRight = rightKeyUsed || rightKeyPressed;
    const moveToBottom = bottomKeyUsed || bottomKeyPressed;
    const moveToLeft = leftKeyUsed || leftKeyPressed;
    const moveToTop = topKeyUsed || topKeyPressed;
    const diagonalRightMovement = Math.min(remainingForRight, 17);
    const diagonalBottomMovement = Math.min(remainingForBottom, 17);
    const diagonalLeftMovement = Math.min(currentMoleLeft, 17);
    const diagonalTopMovement = Math.min(currentMoleTop, 17);
    let newMoleLeft = currentMoleLeft;
    let newMoleTop = currentMoleTop;
    if (moveToRight && !moveToLeft) {
      if (moveToBottom && !moveToTop) {
        newMoleLeft += diagonalRightMovement;
        newMoleTop += diagonalBottomMovement;
        let collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        while (collidingFlowers.length) {
          const flower = collidingFlowers.sort((flower1, flower2) => {
            const flower1Style = flower1.style;
            const flower2Style = flower2.style;
            return (
              Math.max(
                newMoleLeft - parseFloat(flower1Style.left),
                newMoleTop - parseFloat(flower1Style.top)
              ) -
              Math.max(
                newMoleLeft - parseFloat(flower2Style.left),
                newMoleTop - parseFloat(flower2Style.top)
              )
            );
          })[0];
          const flowerStyle = flower.style;
          const overlapX = newMoleLeft + 24 - parseFloat(flowerStyle.left);
          const overlapY = newMoleTop + 24 - parseFloat(flowerStyle.top);
          if (overlapX >= overlapY) {
            newMoleTop -= overlapY;
          }
          if (overlapY >= overlapX) {
            newMoleLeft -= overlapX;
          }
          collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        }
      } else if (moveToTop && !moveToBottom) {
        newMoleLeft += diagonalRightMovement;
        newMoleTop -= diagonalTopMovement;
        let collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        while (collidingFlowers.length) {
          const flower = collidingFlowers.sort((flower1, flower2) => {
            const flower1Style = flower1.style;
            const flower2Style = flower2.style;
            return (
              Math.max(
                newMoleLeft - parseFloat(flower1Style.left),
                parseFloat(flower1Style.top) - newMoleTop
              ) -
              Math.max(
                newMoleLeft - parseFloat(flower2Style.left),
                parseFloat(flower2Style.top) - newMoleTop
              )
            );
          })[0];
          const flowerStyle = flower.style;
          const overlapX = newMoleLeft + 24 - parseFloat(flowerStyle.left);
          const overlapY = parseFloat(flowerStyle.top) + 24 - newMoleTop;
          if (overlapX >= overlapY) {
            newMoleTop += overlapY;
          }
          if (overlapY >= overlapX) {
            newMoleLeft -= overlapX;
          }
          collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        }
      } else {
        newMoleLeft += Math.min(remainingForRight, 24);
        const collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        if (collidingFlowers.length) {
          newMoleLeft =
            Math.min(
              ...collidingFlowers.map((flower) => parseFloat(flower.style.left))
            ) - 24;
        }
      }
    } else if (moveToBottom && !moveToTop) {
      if (moveToLeft && !moveToRight) {
        newMoleLeft -= diagonalLeftMovement;
        newMoleTop += diagonalBottomMovement;
        let collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        while (collidingFlowers.length) {
          const flower = collidingFlowers.sort((flower1, flower2) => {
            const flower1Style = flower1.style;
            const flower2Style = flower2.style;
            return (
              Math.max(
                parseFloat(flower1Style.left) - newMoleLeft,
                newMoleTop - parseFloat(flower1Style.top)
              ) -
              Math.max(
                parseFloat(flower2Style.left) - newMoleLeft,
                newMoleTop - parseFloat(flower2Style.top)
              )
            );
          })[0];
          const flowerStyle = flower.style;
          const overlapX = parseFloat(flowerStyle.left) + 24 - newMoleLeft;
          const overlapY = newMoleTop + 24 - parseFloat(flowerStyle.top);
          if (overlapX >= overlapY) {
            newMoleTop -= overlapY;
          }
          if (overlapY >= overlapX) {
            newMoleLeft += overlapX;
          }
          collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        }
      } else {
        newMoleTop += Math.min(remainingForBottom, 24);
        const collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        if (collidingFlowers.length) {
          newMoleTop =
            Math.min(
              ...collidingFlowers.map((flower) => parseFloat(flower.style.top))
            ) - 24;
        }
      }
    } else if (moveToLeft && !moveToRight) {
      if (moveToTop && !moveToBottom) {
        newMoleLeft -= diagonalLeftMovement;
        newMoleTop -= diagonalTopMovement;
        let collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        while (collidingFlowers.length) {
          const flower = collidingFlowers.sort((flower1, flower2) => {
            const flower1Style = flower1.style;
            const flower2Style = flower2.style;
            return (
              Math.max(
                parseFloat(flower1Style.left) - newMoleLeft,
                parseFloat(flower1Style.top) - newMoleTop
              ) -
              Math.max(
                parseFloat(flower2Style.left) - newMoleLeft,
                parseFloat(flower2Style.top) - newMoleTop
              )
            );
          })[0];
          const flowerStyle = flower.style;
          const overlapX = parseFloat(flowerStyle.left) + 24 - newMoleLeft;
          const overlapY = parseFloat(flowerStyle.top) + 24 - newMoleTop;
          if (overlapX >= overlapY) {
            newMoleTop += overlapY;
          }
          if (overlapY >= overlapX) {
            newMoleLeft += overlapX;
          }
          collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        }
      } else {
        newMoleLeft -= Math.min(currentMoleLeft, 24);
        const collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
        if (collidingFlowers.length) {
          newMoleLeft =
            Math.max(
              ...collidingFlowers.map((flower) => parseFloat(flower.style.left))
            ) + 24;
        }
      }
    } else if (moveToTop && !moveToBottom) {
      newMoleTop -= Math.min(currentMoleTop, 24);
      const collidingFlowers = findCollidingElements(newMoleLeft, newMoleTop);
      if (collidingFlowers.length) {
        newMoleTop =
          Math.max(
            ...collidingFlowers.map((flower) => parseFloat(flower.style.top))
          ) + 24;
      }
    }
    moleStyle.left = `${newMoleLeft}px`;
    moleStyle.top = `${newMoleTop}px`;
    gameboard.querySelectorAll(".butterfly").forEach((element) => {
      const butterflyStyle = element.style;
      const butterflyLeft = parseFloat(butterflyStyle.left);
      const butterflyTop = parseFloat(butterflyStyle.top);
      const directions = [];
      if (butterflyLeft !== width) {
        directions.push("right");
      }
      if (butterflyTop !== height) {
        directions.push("down");
      }
      if (butterflyLeft !== 0) {
        directions.push("left");
      }
      if (height !== 0) {
        directions.push("up");
      }
      switch (directions[Math.floor(Math.random() * directions.length)]) {
        case "right":
          butterflyStyle.left = `${
            butterflyLeft + Math.min(width - butterflyLeft, 24)
          }px`;
          break;
        case "down":
          butterflyStyle.top = `${
            butterflyTop + Math.min(height - butterflyTop, 24)
          }px`;
          break;
        case "left":
          butterflyStyle.left = `${
            butterflyLeft - Math.min(butterflyLeft, 24)
          }px`;
          break;
        default:
          butterflyStyle.top = `${butterflyTop - Math.min(butterflyTop, 24)}px`;
      }
    });
    unuseKeys();
  }, 125);
}

function unuseKeys() {
  rightKeyUsed = false;
  bottomKeyUsed = false;
  leftKeyUsed = false;
  topKeyUsed = false;
}

function unpressKeys() {
  rightKeyPressed = false;
  bottomKeyPressed = false;
  leftKeyPressed = false;
  topKeyPressed = false;
}

const upperSidebar = document.getElementById("upper-sidebar");

function pauseGame() {
  clearTimeout(currentTimout);
  pauseButton.remove();
  const icon = document.createElement("md-icon");
  icon.slot = "icon";
  icon.textContent = "play_arrow";
  pauseButton = document.createElement("md-tonal-button");
  pauseButton.textContent = "Spiel fortsetzen";
  pauseButton.appendChild(icon);
  pauseButton.id = "pause-button";
  upperSidebar.appendChild(pauseButton);
  pauseButton.addEventListener("click", () => {
    recreatePauseButton();
    startLoop();
  });
}

function recreatePauseButton() {
  pauseButton.remove();
  const icon = document.createElement("md-icon");
  icon.slot = "icon";
  icon.textContent = "pause";
  pauseButton = document.createElement("md-outlined-button");
  pauseButton.textContent = "Spiel pausieren";
  pauseButton.appendChild(icon);
  pauseButton.id = "pause-button";
  upperSidebar.appendChild(pauseButton);
}

function resetGameboard() {
  recreatePauseButton();
  clearTimeout(currentTimout);
  highlightButton.disabled = true;
  pauseButton.disabled = true;
  gameboardClasses.add("overlay");
  gameboard.replaceChildren([]);
  points = 0;
  gamePointsText.textContent = "0 Punkte";
  time = duration * 1000;
  timeText.textContent = formatTime();
  timeTextClasses.remove("error-text");
}
