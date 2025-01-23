const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case e.target.id:
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id:
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id:
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id:
        body.style.backgroundColor = e.target.id;
        break;
        default:
            body.style.backgroundColor = "white";
    }
  });
});
