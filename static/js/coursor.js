let backgroundImages = [
  {
    div: "url(./img/backdrops/wide.png)",
  },
];
const container = document.getElementById("img-container");

let totalLenses = 0;
/*
container.addEventListener("pointermove", function (e) {
  const rect = container.getBoundingClientRect();

  const x = rect.left - (e.pageX - rect.width / 2);
  const y = rect.top - (e.pageY - rect.height / 2);

  const circle = document.createElement("div");
  circle.style.width = rect.width + "px";
  circle.style.height = rect.height + "px";
  circle.style.left = (e.pageX - rect.width / 2) + "px";
  circle.style.top = (e.pageY - rect.height / 2) + "px";
  circle.style.borderRadius = "20%";
  circle.style.position = "absolute";
 // circle.style.left = e.pageX - window.innerWidth / 2 + "px";
 // circle.style.top = e.pageY - window.innerHeight / 2 + "px";
  //circle.style.left = 0 + "px"//(e.pageX - window.innerWidth / 2) -  1000 + "px";
  //circle.style.top =0 + "px"//(e.pageY - window.innerHeight / 2 )-  1000 + "px";
  circle.style.backgroundImage = 'linear-gradient(#2f91d0, #2FD0BE)'
  circle.style.backgroundPosition = x + "px " + y + "px";
  circle.style.backgroundSize = "cover";
  circle.style.backgroundRepeat = "no-repeat";
  circle.style.pointerEvents = "none";
  circle.style.clipPath = "circle(5%)";
  circle.style.zIndex = "-1";
  totalLenses += 1;
  container.appendChild(circle);

  // Remove the circle after 5 seconds
  removeLens(circle);
});

function removeLens(circle) {
  setTimeout(function () {
    console.log(totalLenses);
    if (totalLenses === 1) {
      removeLens(circle);
    } else {
      totalLenses -= 1;
      container.removeChild(circle);
    }
    //if (debugLog) console.log(totalLenses);
  }, 100);
}

*/
