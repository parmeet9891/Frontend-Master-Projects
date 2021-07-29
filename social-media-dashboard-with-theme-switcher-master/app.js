const elements = {
  body: document.getElementById("body"),
  checkbox: document.getElementById("checkbox"),
  header: document.getElementById("header"),
  card: document.querySelectorAll("#card"),
};

elements.checkbox.addEventListener("click", () => {
  if (elements.checkbox.checked === true) {
    elements.body.classList.add("light-bg");
    elements.header.classList.add("light-header-bg");
    elements.card.forEach((element) => {
      element.classList.add("light-card-bg");
    });
  } else {
    elements.body.classList.remove("light-bg");
    elements.header.classList.remove("light-header-bg");
    elements.card.forEach((element) => {
      element.classList.remove("light-card-bg");
    });
  }
});
