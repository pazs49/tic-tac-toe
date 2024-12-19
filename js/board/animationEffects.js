export const anim = {
  hideUp: (el) => {
    el.classList.add("hide-up");
  },
  pop: (el) => {
    el.classList.add("pop-animation--scale-up");
    setTimeout(() => {
      el.classList.add("pop-animation--scale-down");
    }, 200);
  },
  beat: (el) => {
    el.classList.add("beat-animation");
  },
};
