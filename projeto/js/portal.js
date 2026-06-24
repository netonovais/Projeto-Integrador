/* portal.js — lógica das telas novas (Dashboards, Publicações, Eventos)
   Caminhos relativos a /paginas/ (../assets/data/...) com fallback embutido. */

const FB_INDICADORES = {
  publicacoes: 28, eventos: 12, pesquisadores: 9, projetos: 6,
  categorias: { Artigos: 12, "Dissertações": 5, "Relatórios": 7, Projetos: 4 },
  atividadesMensais: { Jan: 2, Fev: 4, Mar: 3, Abr: 6, Mai: 5, Jun: 8 },
  areasTematicas: {
    "Arquivística Computacional": 8, "Arquitetura da Informação": 7,
    "IA e PLN": 6, "Ontologias": 4, "Outros": 3
  }
};

const FB_PUBLICACOES = [
  { tipo: "Artigo", titulo: "Arquitetura da Informação em Ambientes Acadêmicos", descricao: "Estudo sobre organização, visibilidade e navegação de conteúdos científicos em plataformas digitais.", ano: "2025", area: "Arquitetura da Informação" },
  { tipo: "Dissertação", titulo: "Indicadores Analíticos na Visualização da Produção Científica", descricao: "Análise de métricas e formas de representar dados acadêmicos de modo acessível e estratégico.", ano: "2025", area: "Visualização de Dados" },
  { tipo: "Relatório", titulo: "Mapeamento Inicial da Produção Científica do Grupo", descricao: "Levantamento preliminar de pesquisas, projetos e contribuições acadêmicas vinculadas ao grupo.", ano: "2026", area: "Pesquisa Institucional" },
  { tipo: "Artigo", titulo: "Processamento de Linguagem Natural Aplicado a Documentos Arquivísticos", descricao: "Aplicação de técnicas de PLN para extração e organização de informações em acervos documentais.", ano: "2024", area: "IA e PLN" },
  { tipo: "Artigo", titulo: "Engenharia de Ontologias para Recuperação da Informação", descricao: "Construção de ontologias para melhorar a precisão na busca e recuperação de conteúdos científicos.", ano: "2025", area: "Ontologias" },
  { tipo: "Dissertação", titulo: "Modelos de Deep Learning na Classificação de Documentos", descricao: "Comparação de redes neurais para a categorização automática de produções acadêmicas.", ano: "2024", area: "IA e PLN" },
  { tipo: "Relatório", titulo: "Acessibilidade Digital em Portais Acadêmicos (WCAG 2.1)", descricao: "Avaliação de conformidade de portais universitários às diretrizes de acessibilidade nível AA.", ano: "2026", area: "Arquitetura da Informação" },
  { tipo: "Artigo", titulo: "Multimodalidade na Representação do Conhecimento Científico", descricao: "Estudo sobre o uso de texto, imagem e dados na comunicação da produção científica.", ano: "2025", area: "Arquivística Computacional" },
  { tipo: "Dissertação", titulo: "Curadoria Digital e Preservação de Acervos Científicos", descricao: "Estratégias de organização, descrição e preservação de longo prazo de acervos digitais.", ano: "2024", area: "Arquivística Computacional" },
  { tipo: "Relatório", titulo: "Avaliação de Usabilidade do Protótipo REGIIMENTOWEB", descricao: "Resultados dos testes de navegabilidade, desempenho e experiência do usuário no protótipo.", ano: "2026", area: "Visualização de Dados" },
  { tipo: "Artigo", titulo: "Dashboards Interativos para Indicadores de Pesquisa", descricao: "Proposta de painéis visuais para acompanhar a produção científica por ano e área temática.", ano: "2025", area: "Visualização de Dados" },
  { tipo: "Artigo", titulo: "Ciência Arquivística Computacional: Panorama e Desafios", descricao: "Revisão das principais linhas, métodos e desafios da Ciência Arquivística Computacional (CAS).", ano: "2026", area: "Arquivística Computacional" }
];

const FB_EVENTOS = [
  { titulo: "Reunião de Integração de Pesquisadores", data: "2026-07-10", local: "Sala 12 · CEUB", descricao: "Encontro para acolhimento de novos participantes e alinhamento das atividades do grupo.", status: "proximo" },
  { titulo: "Workshop de Pesquisa Digital", data: "2026-08-14", local: "Auditório CEUB", descricao: "Discussão sobre ferramentas, métodos e fluxos digitais voltados à pesquisa acadêmica.", status: "proximo" },
  { titulo: "Seminário de Arquitetura da Informação", data: "2026-09-05", local: "Online", descricao: "Apresentação de estudos sobre organização, acesso e experiência em ambientes digitais.", status: "proximo" },
  { titulo: "Apresentação Final do Projeto Integrador", data: "2026-06-30", local: "CEUB · Auditório", descricao: "Defesa e apresentação final do protótipo REGIIMENTOWEB para a banca avaliadora.", status: "proximo" },
  { titulo: "Oficina de Visualização de Dados", data: "2026-10-02", local: "Laboratório de Informática · CEUB", descricao: "Prática de criação de dashboards e gráficos com Chart.js aplicados à produção científica.", status: "proximo" },
  { titulo: "Mesa-redonda sobre IA e PLN", data: "2026-11-18", local: "Online", descricao: "Debate sobre Processamento de Linguagem Natural e aplicações de Inteligência Artificial na pesquisa.", status: "proximo" },
  { titulo: "Teste de Usabilidade do Protótipo", data: "2026-06-10", local: "Online", descricao: "Validação da navegabilidade do protótipo com usuário convidado.", status: "encerrado" },
  { titulo: "Validação do MVP REGIIMENTOWEB", data: "2026-03-27", local: "CEUB", descricao: "Apresentação e aprovação formal do protótipo navegável com o stakeholder.", status: "encerrado" },
  { titulo: "Sprint Review 2", data: "2025-07-04", local: "Remoto", descricao: "Apresentação dos incrementos da Sprint 2 ao stakeholder e à equipe.", status: "encerrado" },
  { titulo: "Sprint Planning 1", data: "2025-06-23", local: "Remoto", descricao: "Planejamento inicial das atividades e definição do backlog da primeira sprint.", status: "encerrado" }
];

async function getJSON(path, fallback) {
  try {
    const r = await fetch(path);
    if (!r.ok) throw new Error("fail");
    return await r.json();
  } catch (e) { return fallback; }
}

function countUp(el, target, duration = 1100) {
  if (!el) return;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(target * p);
    if (p < 1) requestAnimationFrame(step); else el.textContent = target;
  }
  requestAnimationFrame(step);
  // Garantia: assegura o valor final mesmo se a animação não rodar
  setTimeout(() => { el.textContent = target; }, duration + 200);
}

const COLORS = ["#003366", "#006633", "#0a8ca3", "#f4c542", "#8b1e3f", "#6b4ea0", "#c2682a"];

/* ---------- DASHBOARDS ---------- */
function contarPor(lista, campo) {
  const r = {};
  lista.forEach((item) => {
    const k = item[campo] || "Outros";
    r[k] = (r[k] || 0) + 1;
  });
  return r;
}

async function initDashboards() {
  if (!document.getElementById("graficoCategorias")) return;

  // Carrega os dados REAIS para os indicadores baterem com o resto do site
  const ind = await getJSON("../assets/data/indicadores.json", FB_INDICADORES);
  const pubs = await getJSON("../assets/data/publicacoes.json", FB_PUBLICACOES);
  const evs = await getJSON("../assets/data/eventos.json", FB_EVENTOS);
  const dbData = await getJSON("../db.json", { projetos: new Array(10), membros: new Array(5) });

  // KPIs calculados a partir dos dados reais
  countUp(document.getElementById("statPublicacoes"), pubs.length);
  countUp(document.getElementById("statEventos"), evs.length);
  countUp(document.getElementById("statPesquisadores"), (dbData.membros || []).length);
  countUp(document.getElementById("statProjetos"), (dbData.projetos || []).length);

  if (typeof Chart === "undefined") return;

  // Gráficos derivados das publicações reais
  const categorias = contarPor(pubs, "tipo");
  const areas = contarPor(pubs, "area");

  new Chart(document.getElementById("graficoCategorias"), {
    type: "bar",
    data: { labels: Object.keys(categorias), datasets: [{ label: "Produções", data: Object.values(categorias), backgroundColor: COLORS, borderRadius: 8, borderSkipped: false }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true, ticks: { stepSize: 1 } } } }
  });

  new Chart(document.getElementById("graficoEventos"), {
    type: "line",
    data: { labels: Object.keys(ind.atividadesMensais), datasets: [{ label: "Atividades", data: Object.values(ind.atividadesMensais), borderColor: "#003366", backgroundColor: "rgba(0,51,102,0.12)", tension: 0.35, fill: true, pointBackgroundColor: "#003366", pointRadius: 4 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true, ticks: { stepSize: 2 } } } }
  });

  new Chart(document.getElementById("graficoAreas"), {
    type: "doughnut",
    data: { labels: Object.keys(areas), datasets: [{ data: Object.values(areas), backgroundColor: COLORS, borderWidth: 0 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: "62%", plugins: { legend: { position: "bottom" } } }
  });
}

/* ---------- PUBLICAÇÕES (busca + filtro por tipo) ---------- */
async function initPublicacoes() {
  const grid = document.getElementById("publicacoesGrid");
  if (!grid) return;
  const dados = await getJSON("../assets/data/publicacoes.json", FB_PUBLICACOES);

  const searchEl = document.getElementById("pubSearch");
  const chipsWrap = document.getElementById("pubChips");
  let tipoAtivo = "Todos";

  function render() {
    const termo = (searchEl?.value || "").trim().toLowerCase();
    const filtrados = dados.filter((p) => {
      const okTipo = tipoAtivo === "Todos" || p.tipo === tipoAtivo;
      const okTexto = !termo || `${p.titulo} ${p.descricao} ${p.area}`.toLowerCase().includes(termo);
      return okTipo && okTexto;
    });

    const countEl = document.getElementById("pubCount");
    if (countEl) {
      countEl.innerHTML = `<strong>${filtrados.length}</strong> publicaç${filtrados.length === 1 ? "ão" : "ões"} encontrada${filtrados.length === 1 ? "" : "s"}`;
    }

    if (!filtrados.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><strong>Nenhuma publicação encontrada</strong>Tente outro termo de busca ou remova os filtros aplicados.</div>`;
      return;
    }
    grid.innerHTML = filtrados.map((p) => `
      <article class="pub-card" data-tipo="${p.tipo}">
        <div class="pub-card-top">
          <span class="pub-type">${p.tipo}</span>
          <span class="pub-year">${p.ano}</span>
        </div>
        <h3>${p.titulo}</h3>
        <p>${p.descricao}</p>
        <div class="pub-card-foot">
          <span class="pub-area">${p.area}</span>
        </div>
      </article>`).join("");
  }

  // chips de tipo (dinâmicos a partir dos dados)
  const tipos = ["Todos", ...Array.from(new Set(dados.map((p) => p.tipo)))];
  if (chipsWrap) {
    chipsWrap.innerHTML = tipos.map((t, i) =>
      `<button class="filter-chip${i === 0 ? " active" : ""}" data-tipo="${t}">${t}</button>`).join("");
    chipsWrap.querySelectorAll(".filter-chip").forEach((b) => {
      b.addEventListener("click", () => {
        chipsWrap.querySelectorAll(".filter-chip").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        tipoAtivo = b.dataset.tipo;
        render();
      });
    });
  }
  searchEl?.addEventListener("input", render);
  render();
}

/* ---------- EVENTOS (próximos x encerrados) ---------- */
async function initEventos() {
  const proxWrap = document.getElementById("eventosProximos");
  if (!proxWrap) return;
  const encWrap = document.getElementById("eventosEncerrados");
  const dados = await getJSON("../assets/data/eventos.json", FB_EVENTOS);

  const fmt = (iso) => {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  };
  const card = (e) => `
    <div class="event-card ${e.status}">
      <span class="event-status ${e.status}">${e.status === "proximo" ? "Próximo" : "Encerrado"}</span>
      <h3>${e.titulo}</h3>
      <p>${e.descricao}</p>
      <div class="event-meta"><span>📅 ${fmt(e.data)}</span><span>📍 ${e.local}</span></div>
    </div>`;

  const prox = dados.filter((e) => e.status === "proximo");
  const enc = dados.filter((e) => e.status === "encerrado");
  proxWrap.innerHTML = prox.length ? prox.map(card).join("") : `<div class="empty-state"><strong>Sem eventos agendados</strong>Novos eventos serão divulgados em breve.</div>`;
  if (encWrap) encWrap.innerHTML = enc.map(card).join("");

  const cp = document.getElementById("countProximos");
  const ce = document.getElementById("countEncerrados");
  if (cp) cp.textContent = prox.length;
  if (ce) ce.textContent = enc.length;
}

document.addEventListener("DOMContentLoaded", () => {
  // menu mobile (reaproveita o padrão do site)
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  initDashboards();
  initPublicacoes();
  initEventos();
});
