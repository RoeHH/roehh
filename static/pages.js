globalThis.addEventListener("DOMContentLoaded", () => {
  const pages = document.getElementById("pages-container").querySelectorAll(".page");
  for (const page of pages) {
    if(page.id === window.location.hash.slice(1)) {
      page.scrollIntoView();
    }
  }
});