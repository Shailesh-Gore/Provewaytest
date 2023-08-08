const expandToggle1 = document.querySelector(".expand-toggle");

const expandableContent1 = document.querySelector(".expandable-content");

const expandToggle2 = document.querySelector(".expand-toggle-2");
const expandableContent2 = document.querySelector(".expandable-content-2");

const expandToggle3 = document.querySelector(".expand-toggle-3");
const expandableContent3 = document.querySelector(".expandable-content-3");

const pair1 = document.querySelector(".pair-1");

const pair2 = document.querySelector(".pair-2");

const pair3 = document.querySelector(".pair-3");

function hideAllExpandableContent() {
  expandableContent1.style.display = "none";
  expandableContent2.style.display = "none";
  expandableContent3.style.display = "none";

  pair1.style.backgroundColor = "white";
  pair1.style.border = "1px solid grey";

  pair2.style.backgroundColor = "white";
  pair2.style.border = "1px solid grey";

  pair3.style.backgroundColor = "white";
  pair3.style.border = "1px solid grey";
}

expandToggle1.addEventListener("click", function () {
  hideAllExpandableContent();
  expandableContent1.style.display =
    expandableContent1.style.display === "none" ? "block" : "none";
  pair1.style.backgroundColor =
    pair1.style.backgroundColor === "white" ? "#f4fbf9" : "white";

  pair1.style.border =
    pair1.style.border === "1px solid grey"
      ? "1px solid green"
      : "1px solid grey";
});

expandToggle2.addEventListener("click", function () {
  hideAllExpandableContent();
  expandableContent2.style.display =
    expandableContent2.style.display === "none" ? "block" : "none";

  pair2.style.backgroundColor =
    pair2.style.backgroundColor === "white" ? "#f4fbf9" : "white";

  pair2.style.border =
    pair2.style.border === "1px solid grey"
      ? "1px solid green"
      : "1px solid grey";
});

expandToggle3.addEventListener("click", function () {
  hideAllExpandableContent();
  expandableContent3.style.display =
    expandableContent3.style.display === "none" ? "block" : "none";

  pair3.style.backgroundColor =
    pair3.style.backgroundColor === "white" ? "#f4fbf9" : "white";

  pair3.style.border =
    pair3.style.border === "1px solid grey"
      ? "1px solid green"
      : "1px solid grey";
});
