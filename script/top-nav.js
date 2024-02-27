let selectionNav = document.querySelectorAll(".selection-nav");

let downPath = "m1 1 4 4 4-4";
let upPath = "m1 5 4-4 4 4";

toggle = false;

selectionNav.forEach((element, index) => {
  element.addEventListener("click", () => {
    toggle = !toggle;
    toggleAnimation(index);
  });
});

let toggleAnimation = (index) => {
  const feat = anime.timeline({
    easing: "easeOutExpo",
  });

  const comp = anime.timeline({
    easing: "easeOutExpo",
  });

  if (index === 0) {
    feat.add({
      targets: "#feat-arrow .arrow",
      d: [{ value: toggle ? upPath : downPath }],
    });
    document.getElementById("feat-drop").style.display = toggle ? "flex" : null;
  } else {
    comp.add({
      targets: "#comp-arrow .arrow",
      d: [{ value: toggle ? upPath : downPath }],
    });
    document.getElementById("comp-drop").style.display = toggle ? "flex" : null;
  }
};
