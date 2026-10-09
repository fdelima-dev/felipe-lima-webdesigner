document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-per");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bar = entry.target;
      const percentage = bar.getAttribute("data-per");

      if (entry.isIntersecting) {
        // Quando entra na tela: ajusta para a porcentagem real (ex: 45%)
        bar.style.width = percentage;
      } else {
        // Quando sai da tela: volta para 100%
        bar.style.width = "100%";
      }
    });
  }, { 
    threshold: 0.2 // Dispara a animação quando 20% do elemento entra ou sai da tela
  });

  skillBars.forEach(bar => observer.observe(bar));
});