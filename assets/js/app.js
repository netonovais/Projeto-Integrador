document.addEventListener("DOMContentLoaded", () => {
  const ctxCategorias = document.getElementById("graficoCategorias");
  const ctxEventos = document.getElementById("graficoEventos");

  if (ctxCategorias) {
    new Chart(ctxCategorias, {
      type: "bar",
      data: {
        labels: ["Artigos", "Dissertações", "Relatórios", "Projetos"],
        datasets: [{
          label: "Quantidade",
          data: [12, 5, 7, 4],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  if (ctxEventos) {
    new Chart(ctxEventos, {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
          label: "Atividades",
          data: [2, 4, 3, 6, 5, 8],
          tension: 0.3,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});
