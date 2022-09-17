// header
const headerShown = document.querySelector("header .gnb-inner");

setTimeout(function () {
  headerShown.style.opacity = 1;
  document.querySelector(".btn-consulting").style.opacity = 1;
}, 3000);
// welcome-video
const videoPlay = document.querySelector(".opacity-video video");
setTimeout(function () {
  videoPlay.play();
}, 4000);

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

// / 다음 지도 띄우기
var container = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스

var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.5601077371065, 126.832082440541), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(37.5601077371065, 126.832082440541);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
