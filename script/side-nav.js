let selectionNavMobile = document.querySelectorAll(".selection-nav-side");

let menuG = document.querySelector(".menu");
let closeG = document.querySelector(".close");

let openIcon = false;
let toggleDrop = false;

let downPathM = "m1 1 4 4 4-4";
let upPathM = "m1 5 4-4 4 4";

document.getElementById("icon").addEventListener("click", () => {
  openIcon = !openIcon;

  menuG.style.display = openIcon ? "none" : "block";
  closeG.style.display = openIcon ? "block" : "none";

  document.getElementById("mobile-menu").style.display = openIcon
    ? "flex"
    : "none";
});

selectionNavMobile.forEach((element, index) => {
  element.addEventListener("click", () => {
    toggleDrop = !toggleDrop;
    toggleAnimationMobile(index);
  });
});

let toggleAnimationMobile = (index) => {
  const featM = anime.timeline({
    easing: "easeOutExpo",
  });

  const compM = anime.timeline({
    easing: "easeOutExpo",
  });

  if (index === 0) {
    featM.add({
      targets: "#feat-arrow-mobile .arrow-mobile",
      d: [{ value: toggleDrop ? upPathM : downPathM }],
    });
    document.getElementById("feat-drop-mobile").style.display = toggleDrop
      ? "flex"
      : "none";
  } else {
    compM.add({
      targets: "#comp-arrow-mobile .arrow-mobile",
      d: [{ value: toggleDrop ? upPathM : downPathM }],
    });
    document.getElementById("comp-drop-mobile").style.display = toggleDrop
      ? "flex"
      : "none";
  }
};
