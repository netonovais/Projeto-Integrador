const fallbackIndicadores = {
  publicacoes: 28,
  eventos: 12,
  pesquisadores: 9,
  projetos: 6,
  categorias: {
    Artigos: 12,
    Dissertações: 5,
    Relatórios: 7,
    Projetos: 4
  },
  atividadesMensais: {
    Jan: 2,
    Fev: 4,
    Mar: 3,
    Abr: 6,
    Mai: 5,
    Jun: 8
  },
  areasTematicas: {
    "Arquivística Computacional": 8,
    "Arquitetura da Informação": 7,
    "IA e PLN": 6,
    "Ontologias": 4,
    "Outros": 3
  }
};

const fallbackPublicacoes = [
  {
    tipo: "Artigo",
    titulo: "Arquitetura da Informação em Ambientes Acadêmicos",
    descricao:
      "Estudo sobre organização, visibilidade e navegação de conteúdos científicos em plataformas digitais.",
    ano: "2025",
    area: "Arquitetura da Informação"
  },
  {
    tipo: "Dissertação",
    titulo: "Indicadores Analíticos na Visualização da Produção Científica",
    descricao:
      "Análise de métricas e formas de representar dados acadêmicos de modo acessível e estratégico.",
    ano: "2025",
    area: "Visualização de Dados"
  },
  {
    tipo: "Relatório",
    titulo: "Mapeamento Inicial da Produção Científica do Grupo",
    descricao:
      "Levantamento preliminar de pesquisas, projetos e contribuições acadêmicas vinculadas ao grupo.",
    ano: "2026",
    area: "Pesquisa Institucional"
  }
];

const fallbackEventos = [
  {
    titulo: "Workshop de Pesquisa Digital",
    data: "Abril 2026",
    descricao:
      "Discussão sobre ferramentas, métodos e fluxos digitais voltados à pesquisa acadêmica."
  },
  {
    titulo: "Seminário de Arquitetura da Informação",
    data: "Maio 2026",
    descricao:
      "Apresentação de estudos sobre organização, acesso e experiência em ambientes digitais."
  },
  {
    titulo: "Reunião de Integração de Pesquisadores",
    data: "Junho 2026",
    descricao:
      "Encontro para acolhimento de novos participantes e alinhamento das atividades do grupo."
  }
];

const fallbackEquipe = [
  {
    nome: "Rômulo Ferreira dos Santos"
  },
  {
    nome: "José Neto Novais",
    funcao: "Arquiteto de Software",
    categoria: "Discente",
    descricao: "Responsável pela visão estrutural da solução e apoio à organização técnica do projeto."
  },
  {
    nome: "Arthur Amaral dos Santos",
    funcao: "Desenvolvimento Front-end",
    categoria: "Discente",
    descricao: "Responsável pela interface, experiência visual e implementação dos dashboards."
  },
  {
    nome: "Matheus Covre Lacerda",
    funcao: "Scrum Master",
    categoria: "Discente",
    descricao: "Responsável pelo acompanhamento do fluxo de trabalho, backlog e organização da equipe."
  },
  {
    nome: "Lucas Ferreira de Sousa",
    funcao: "AD / DBA",
    categoria: "Discente",
    descricao: "Responsável pelo apoio em estrutura de dados, organização lógica e suporte à camada de dados."
  }
];

async function fetchJSON(path, fallback) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Falha ao carregar");
    return await response.json();
  } catch (error) {
    return fallback;
  }
}

function animateCounter(element, target, duration = 1200) {
  if (!element) return;

  const startTime = performance.now();
  const startValue = 0;

  function updateCounter(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.floor(startValue + (target - startValue) * progress);
    element.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(updateCounter);
}

function renderPublicacoes(publicacoes) {
  const grid = document.getElementById("publicacoesGrid");
  if (!grid) return;

  grid.innerHTML = publicacoes
    .map(
      (item, index) => `
        <article class="card" data-aos="fade-up" data-aos-delay="${80 + index * 70}">
          <span class="pill">${item.tipo}</span>
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
          <div class="publication-meta">
            <span class="meta-chip">${item.ano}</span>
            <span class="meta-chip">${item.area}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderEventos(eventos) {
  const timeline = document.getElementById("eventosTimeline");
  if (!timeline) return;

  timeline.innerHTML = eventos
    .map(
      (item, index) => `
        <div class="timeline-item" data-aos="fade-up" data-aos-delay="${80 + index * 70}">
          <div class="timeline-top">
            <strong>${item.titulo}</strong>
            <span class="timeline-date">${item.data}</span>
          </div>
          <p>${item.descricao}</p>
        </div>
      `
    )
    .join("");
}

function renderEquipe(equipe) {
  const grid = document.getElementById("equipeGrid");
  if (!grid) return;

  grid.innerHTML = equipe
    .map(
      (item, index) => `
        <article class="card team-card" data-aos="fade-up" data-aos-delay="${80 + index * 60}">
          <span class="team-role">${item.funcao}</span>
          <h3>${item.nome}</h3>
          <div class="team-category">${item.categoria}</div>
          <p>${item.descricao}</p>
        </article>
      `
    )
    .join("");
}

function createBarChart(ctx, categorias) {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(categorias),
      datasets: [
        {
          label: "Produções",
          data: Object.values(categorias),
          backgroundColor: ["#005aa9", "#0b7a22", "#d7a63a", "#8b1e3f"],
          borderRadius: 8,
          borderSkipped: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: { stepSize: 2 }
        }
      }
    }
  });
}

function createLineChart(ctx, atividadesMensais) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: Object.keys(atividadesMensais),
      datasets: [
        {
          label: "Atividades",
          data: Object.values(atividadesMensais),
          borderColor: "#005aa9",
          backgroundColor: "rgba(0, 90, 169, 0.12)",
          tension: 0.35,
          fill: true,
          pointBackgroundColor: "#005aa9",
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true }
      },
      scales: {
        x: {
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: { stepSize: 2 }
        }
      }
    }
  });
}

function createDoughnutChart(ctx, areasTematicas) {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: Object.keys(areasTematicas),
      datasets: [
        {
          data: Object.values(areasTematicas),
          backgroundColor: ["#005aa9", "#0a8ca3", "#0b7a22", "#d7a63a", "#8b1e3f"],
          borderWidth: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 750,
      once: true
    });
  }

  const indicadores = await fetchJSON("assets/data/indicadores.json", fallbackIndicadores);
  const publicacoes = await fetchJSON("assets/data/publicacoes.json", fallbackPublicacoes);
  const eventos = await fetchJSON("assets/data/eventos.json", fallbackEventos);
  const equipe = await fetchJSON("assets/data/equipe.json", fallbackEquipe);

  animateCounter(document.getElementById("statPublicacoes"), indicadores.publicacoes);
  animateCounter(document.getElementById("statEventos"), indicadores.eventos);
  animateCounter(document.getElementById("statPesquisadores"), indicadores.pesquisadores);
  animateCounter(document.getElementById("statProjetos"), indicadores.projetos);

  renderPublicacoes(publicacoes);
  renderEventos(eventos);
  renderEquipe(equipe);

  const ctxCategorias = document.getElementById("graficoCategorias");
  const ctxEventos = document.getElementById("graficoEventos");
  const ctxAreas = document.getElementById("graficoAreas");

  if (ctxCategorias) createBarChart(ctxCategorias, indicadores.categorias);
  if (ctxEventos) createLineChart(ctxEventos, indicadores.atividadesMensais);
  if (ctxAreas) createDoughnutChart(ctxAreas, indicadores.areasTematicas);

  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "none";
});
