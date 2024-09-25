const hambargurMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("header");
console.log(hambargurMenu);

hambargurMenu.addEventListener("click", () => {
  // header.classList.add("open-menu")
  hambargurMenu.classList.toggle("active");
});
