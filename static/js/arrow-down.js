const pagesContainer = document.getElementById("pages-container");
const homePage = document.getElementById("home");
const arrowDown = document.getElementById("arrow-down");
const arrowDownText = document.getElementById("arrow-down-text");
const pages = pagesContainer.querySelectorAll(".page");
let activePageNumber = 0;
let firstloadjublapage = true;

arrowDown.addEventListener("click", function () {
  pages[activePageNumber].scrollIntoView({ behavior: "smooth" });
});

pagesContainer.addEventListener("scroll", () => {
  if (pagesContainer.scrollTop == 0 || (((pagesContainer.scrollTop - homePage.offsetHeight) / (pagesContainer.offsetHeight)) + 1) % 1 === 0) {
    activePageNumber = Math.round(((pagesContainer.scrollTop - homePage.offsetHeight) / (pagesContainer.offsetHeight)) + 1);
    console.log(activePageNumber, pages[activePageNumber]);
    if(activePageNumber !== 0) {
      window.location.hash = '#' + pages[activePageNumber].id.replace(' ', '+');
    } else {
      window.location.hash = '';
    }
    if (activePageNumber + 1 === pages.length) {
      arrowDown.style.visibility = "hidden";
    } else {
      arrowDown.style.visibility = "visible";
      arrowDownText.textContent = pages[activePageNumber + 1].id;
    }
    if(pages[activePageNumber].id === "Jubla" && !firstloadjublapage) {
      const svg = document.getElementById('flugi');
      svg.parentNode.insertBefore(svg.cloneNode(true), svg);
      svg.parentNode.removeChild(svg);
    }
    firstloadjublapage = false;
  }
});
