const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".link-item");
const darkMode = document.querySelector(".dark-mode");

// Container Hover
container.addEventListener("mouseenter", () => {
  container.classList.add("active");

});

container.addEventListener("mouseleave", () => {
  container.classList.remove("active");
});

// Link-items Clicavel
for (let i = 0; i < linkItems.length; i++) {
  if (!linkItems[i].classList.contains("dark-mode")) {
    linkItems[i].addEventListener("click", (e) => {
      linkItems.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });
      linkItems[i].classList.add("active");
    });
  }
}
