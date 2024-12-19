export const reset = () => {
  window.location.reload();
};

export const toggleReset = (element, isEnabled) => {
  if (isEnabled) {
    element.classList.add("unhide-flex");
    element.classList.remove("hide");
  }
};
