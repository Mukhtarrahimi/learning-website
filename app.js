let navbtn = document.querySelector(".navbar");
let ul = document.querySelector(".ul");
let open = document.querySelector('.open');
let close = document.querySelector('.close');

navbtn.addEventListener("click", () => {
  if (ul.style.right === "-400px" || ul.style.right === "") {
    ul.style.right = "0px";
    open.style.display = "none";
    close.style.display = "block";

  } else {
    ul.style.right = "-400px";
    open.style.display = "block";
    close.style.display = "none";

  }
});
