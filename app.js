// document.querySelector(".h1").src = "/0.png";

document.addEventListener("DOMContentLoaded", function () {
  // 画像を表示する要素を取得
  const h1Element = document.querySelector(".h1");
  const h2Element = document.querySelector(".h2");
  const m1Element = document.querySelector(".m1");
  const m2Element = document.querySelector(".m2");
  const s1Element = document.querySelector(".s1");
  const s2Element = document.querySelector(".s2");

  // 1秒ごとに画像を更新
  setInterval(updateImage, 1000);

  function updateImage() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    h1Element.src = "/" + Math.floor(hours / 10) + ".png";
    h2Element.src = "/" + (hours % 10) + ".png";
    m1Element.src = "/" + Math.floor(minutes / 10) + ".png";
    m2Element.src = "/" + (minutes % 10) + ".png";
    s1Element.src = "/" + Math.floor(seconds / 10) + ".png";
    s2Element.src = "/" + (seconds % 10) + ".png";
  }
});
