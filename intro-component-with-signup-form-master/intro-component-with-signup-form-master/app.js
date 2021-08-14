const form = document.getElementById("inp-form");
const fields = document.querySelectorAll(".field");

function validate(fields) {
  let errorBody = { index: -1, error: false };
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value.length === 0) {
      errorBody.index = i;
      errorBody.error = true;
      break;
    }
  }
  return errorBody;
}

function onSubmit(e) {
  e.preventDefault();
  let validation = validate(fields);
  console.log(validation);
  if (validation.error) {
    fields[validation.index].classList.toggle("error");
    setTimeout(() => {
      fields[validation.index].classList.toggle("error");
    }, 3000);
  } else {
    alert("Submitted Successfully!");
    fields.forEach((field) => {
      field.value = "";
    });
  }
}

form.addEventListener("submit", onSubmit);
