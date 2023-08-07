const expandToggle1 = document.querySelector(".expand-toggle");
const expandableContent1 = document.querySelector(".expandable-content");

const expandToggle2 = document.querySelector(".expand-toggle-2");
const expandableContent2 = document.querySelector(".expandable-content-2");

const expandToggle3 = document.querySelector(".expand-toggle-3");
const expandableContent3 = document.querySelector(".expandable-content-3");

function hideContent() {
  expandableContent1.style.display = "none";
  expandableContent2.style.display = "none";
  expandableContent3.style.display = "none";
}

expandToggle1.addEventListener("click", function () {
  hideContent();
  expandableContent1.style.display =
    expandableContent1.style.display === "none" ? "block" : "none";
});

expandToggle2.addEventListener("click", function () {
  hideContent();
  expandableContent2.style.display =
    expandableContent2.style.display === "none" ? "block" : "none";
});

expandToggle3.addEventListener("click", function () {
  hideContent();
  expandableContent3.style.display =
    expandableContent3.style.display === "none" ? "block" : "none";
});
