const pagesContainer = document.getElementById("pages-container");
const arrowDown = document.getElementById("arrow-down");
const arrowDownText = document.getElementById("arrow-down-text");
const pages = pagesContainer.querySelectorAll(".page");
let activePageNumber = 1;
let firstloadjublapage = true;

arrowDown.addEventListener("click", function () {
  pages[activePageNumber].scrollIntoView({ behavior: "smooth" });
});

pagesContainer.addEventListener("scroll", () => {
  if ((pagesContainer.scrollTop + pagesContainer.offsetHeight) / pagesContainer.scrollHeight * pages.length % 1 !== 0) {
    return;
  }
  activePageNumber = Math.round((pagesContainer.scrollTop + pagesContainer.offsetHeight) / pagesContainer.scrollHeight * pages.length);
  window.location.hash = '#' + pages[activePageNumber - 1].id.replace(' ', '+');  
  if (activePageNumber === pages.length) {
    arrowDown.style.visibility = "hidden";
  } else {
    arrowDown.style.visibility = "visible";
    arrowDownText.textContent = pages[activePageNumber].id;
  }
  if(pages[activePageNumber - 1].id === "Jubla" && !firstloadjublapage) {
    const svg = document.getElementById('flugi');
    svg.parentNode.insertBefore(svg.cloneNode(true), svg);
    svg.parentNode.removeChild(svg);
  }
  firstloadjublapage = false;
});
