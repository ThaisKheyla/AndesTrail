const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".link-item");
const darkMode = document.querySelector(".dark-mode");

container.addEventListener("mouseenter", () => {
  container.classList.add("active");

});

container.addEventListener("mouseleave", () => {
  container.classList.remove("active");
});

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

// icones modo-claro e modo-escuro
darkMode.addEventListener("click", function () {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  const waves = document.querySelectorAll('.wave');

  if (isDarkMode) {
    darkMode.querySelector("span").textContent = "Modo claro";
    darkMode.querySelector("ion-icon").setAttribute("name", "sunny-outline");
    waves.forEach(wave => {
      wave.classList.add('wave-dark');
    });
  } else {
    darkMode.querySelector("span").textContent = "Modo escuro";
    darkMode.querySelector("ion-icon").setAttribute("name", "moon-outline");
    waves.forEach(wave => {
      wave.classList.remove('wave-dark');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let polvo = document.getElementById('polvo');
  
  if (polvo) {
    document.addEventListener('scroll', function() {
      let scrollTop = window.scrollY;
      polvo.style.transform = 'translateY(' + scrollTop * 0.5 + 'px)';
    });
  }
});
