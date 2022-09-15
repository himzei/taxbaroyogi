// to-Top
const text = document.querySelector(".gototop .scroll-percent");
const badge = document.querySelector(".gototop img");


function render(textPercent, rotateNum) {
  text.innerText = textPercent + "%";
  badge.style.transform = `rotate(${rotateNum}deg)`;
}

function getPercent() {
  
  const scrollHeight = document.querySelector("body .container").offsetHeight;
  const scrollRealHeight = scrollHeight - window.innerHeight;
  const winScrollTop = window.pageYOffset;
  const scrollPercent = (winScrollTop / scrollRealHeight) * 100;
  const textPercent = Math.round(scrollPercent);
  const rotateNum = (textPercent / 100) * 360;
  
  render(textPercent, rotateNum);
}

document.addEventListener(
  "scroll",
  function () {
    getPercent();
  },
  false
);

const toTopEl = document.querySelector(".gototop");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 1.0, {
    scrollTo: 0,
  });
});

// floating 세무상담
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, sizeX, sizeY) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    x: sizeX,
    y: sizeY,
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".btn-consulting", 1, 12, 15);
