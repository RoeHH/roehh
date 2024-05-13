const pagesContainer = document.getElementById("pages-container");
const arrowDown = document.getElementById("arrow-down");
const pages = pagesContainer.querySelectorAll(".page");
let activePageNumber = 0;

arrowDown.addEventListener("click", function () {
  pages[activePageNumber].scrollIntoView({ behavior: "smooth" });
});

pagesContainer.addEventListener("scroll", () => {
  activePageNumber = (pagesContainer.scrollTop + pagesContainer.offsetHeight) / pagesContainer.scrollHeight * pages.length;
  if (activePageNumber % 1 !== 0) {
    return;
  }
  window.location.hash = '#' + pages[activePageNumber - 1].id;  
  if (activePageNumber === pages.length) {
    arrowDown.style.visibility = "hidden";
  } else {
    arrowDown.style.visibility = "visible";
  }
});
