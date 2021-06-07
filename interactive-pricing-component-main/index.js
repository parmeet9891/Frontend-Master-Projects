const pageViews = document.querySelector(".page_views");
const pricing = document.querySelector(".bg-price");
const slider = document.getElementById("slider");
const toggle = document.getElementById("check__toggle");
const fill = document.querySelector(".fill");
const time = document.querySelector(".month");
const discount = document.querySelector(".text__discount");
let price = 0,
  currTime = `/month`;

(function () {
  pageViews.textContent = `0 pageviews`;
  pricing.textContent = `$0`;
  time.textContent = `${currTime}`;
})();

function setProperties(pgViews, price, barWidth, currTime) {
  pageViews.textContent = `${pgViews} pageviews`;
  pricing.textContent = `$ ${price} `;
  time.textContent = `${currTime}`;
  fill.style.width = `${barWidth}%`;
}

toggle.onclick = function () {
  if (toggle.checked) {
    currTime = `/year`;
    price = price - price * 0.25;
    pricing.textContent = `$ ${price} `;
    time.textContent = `${currTime}`;
  } else {
    currTime = `/month`;
    price = price + price * 0.25;
    pricing.textContent = `$ ${price} `;
    time.textContent = `${currTime}`;
  }
};

slider.oninput = function () {
  let curr = Number(this.value);
  let check = toggle.checked;
  let constant = 4;
  if (curr === 0) {
    setProperties("0", "0", 0, currTime);
  } else {
    price = (constant * (curr / 10)).toString();
    price = check === true ? price - price * 0.25 : price;
    let views = curr + "K";
    setProperties(views, price, curr, currTime);
  }
};
