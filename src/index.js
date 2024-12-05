const searchEl = document.querySelector(".search-icon");
const cancelIcon = document.querySelector(".cancel-btn");
const formEl = document.querySelector(".form-bg");

formEl.style.display = "none";

searchEl.addEventListener("click", function (e) {
  e.preventDefault();
  formEl.style.display = "flex";
  cancelIcon.style.display = "flex";
});
cancelIcon.addEventListener("click", function (e) {
  e.preventDefault();
  formEl.style.display = "none";
  cancelIcon.style.display = "none";
});
