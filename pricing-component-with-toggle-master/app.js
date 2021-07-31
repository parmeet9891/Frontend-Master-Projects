const checkbox = document.getElementById("checkbox");
const price = document.querySelectorAll(".price");
checkbox.addEventListener("change", handleChecked);

function handleChecked() {
  if (checkbox.checked === true) {
    price.forEach((pr, index) => {
      switch (index) {
        case 0:
          pr.innerHTML = "19.99";
          break;
        case 1:
          pr.innerHTML = "24.99";
          break;
        case 2:
          pr.innerHTML = "39.99";
          break;
        default:
          break;
      }
    });
  } else {
    price.forEach((pr, index) => {
      switch (index) {
        case 0:
          pr.innerHTML = "199.99";
          break;
        case 1:
          pr.innerHTML = "249.99";
          break;
        case 2:
          pr.innerHTML = "399.99";
          break;
        default:
          break;
      }
    });
  }
}
