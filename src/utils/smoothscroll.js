export function smoothscroll(elem) {
  var element = document.getElementById(elem);
  element.scrollIntoView({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
