const header = document.querySelector("header");
const root = document.querySelector(':root');

document.addEventListener("scroll", (_event) => {
  const percentage = this.scrollY / (root.scrollHeight - window.innerHeight);
  if(percentage > 0.94) {
    document.querySelector(".card-list").classList.add("fadeIn");
  }
  console.log(percentage, "per");
  const hightWithoutLastScreen = header.scrollHeight;
  console.log("sc",this.scrollY);
  console.log("h",hightWithoutLastScreen);
  const scrollPercentage = this.scrollY > 0 ? this.scrollY / hightWithoutLastScreen : 0;
  const scroll = Math.round((1-scrollPercentage) * (header.scrollHeight));
  console.log(scroll, scrollPercentage);
  root.style.setProperty('--universe-scroll-distance-percentage', scrollPercentage); 
  root.style.setProperty('--universe-scroll-distance', scroll + "px"); 
  root.style.setProperty('--universe-scroll-distance-divided-by-2', Math.round(scroll/ 2) + "px"); 
  root.style.setProperty('--universe-scroll-distance-divided-by-4', Math.round(this.scrollY / 4) + "px"); 
});