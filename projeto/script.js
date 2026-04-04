const DEFAULT_PROJECTS = [
  {
    id: "1",
    titulo: "Catálogo Digital de Projetos Acadêmicos",
    area: "Tecnologia",
    autor: "Equipe de Desenvolvimento",
    resumo:
      "Plataforma para centralizar projetos, pesquisas e iniciativas acadêmicas com navegação simples e visual institucional.",
    descricao:
      "Este projeto propõe a criação de um ambiente digital para organização e divulgação de projetos acadêmicos. O objetivo é facilitar a consulta de informações, fortalecer a visibilidade das produções e melhorar a comunicação entre estudantes, docentes e comunidade.",
    status: "Em andamento"
  },
  {
    id: "2",
    titulo: "Mapa de Iniciativas de Extensão",
    area: "Extensão",
    autor: "Grupo Interdisciplinar",
    resumo:
      "Sistema visual para apresentar ações de extensão, áreas envolvidas e impactos sociais gerados pela comunidade acadêmica.",
    descricao:
      "A proposta organiza ações extensionistas em um espaço único, permitindo a divulgação de atividades, objetivos, público-alvo e resultados esperados. O foco é tornar a extensão mais acessível e melhor comunicada.",
    status: "Planejamento"
  },
  {
    id: "3",
    titulo: "Painel de Produção Científica",
    area: "Pesquisa",
    autor: "Núcleo de Pesquisa",
    resumo:
      "Protótipo de painel informativo para reunir artigos, eventos, grupos de pesquisa e indicadores acadêmicos.",
    descricao:
      "A proposta apresenta um painel com informações relevantes sobre produção científica, linhas de pesquisa e indicadores institucionais. A ideia é transformar dados dispersos em uma consulta visual objetiva.",
    status: "Validação"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initializeProjects();
  setupMenu();
  setupFeaturedProjects();
  setupProjectListing();
  setupProjectDetails();
  setupLogin();
  setupCadastro();
  setupPublishForm();
  setupContactForm();
  setupLogoutButtons();
  updateAuthUI();
});

function initializeProjects() {
  const existing = localStorage.getItem("portalProjetos");
  if (!existing) {
    localStorage.setItem("portalProjetos", JSON.stringify(DEFAULT_PROJECTS));
  }
}

function getProjects() {
  return JSON.parse(localStorage.getItem("portalProjetos")) || [];
}

function saveProjects(projects) {
  localStorage.setItem("portalProjetos", JSON.stringify(projects));
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

function setupFeaturedProjects() {
  const container = document.getElementById("featuredProjects");
  if (!container) return;

  const projetos = getProjects().slice(0, 3);
  renderProjectCards(container, projetos, "paginas/");
}

function setupProjectListing() {
  const container = document.getElementById("projectList");
  if (!container) return;

  const inputBusca = document.getElementById("searchInput");
  const filtroArea = document.getElementById("filterArea");
  const btnLimpar = document.getElementById("clearFilters");

  const applyFilters = () => {
    const termo = (inputBusca?.value || "").trim().toLowerCase();
    const area = filtroArea?.value || "";

    let projetos = getProjects();

    if (termo) {
      projetos = projetos.filter((projeto) => {
        return (
          projeto.titulo.toLowerCase().includes(termo) ||
          projeto.resumo.toLowerCase().includes(termo) ||
          projeto.autor.toLowerCase().includes(termo) ||
          projeto.area.toLowerCase().includes(termo)
        );
      });
    }

    if (area) {
      projetos = projetos.filter((projeto) => projeto.area === area);
    }

    renderProjectCards(container, projetos, "");
  };

  inputBusca?.addEventListener("input", applyFilters);
  filtroArea?.addEventListener("change", applyFilters);

  btnLimpar?.addEventListener("click", () => {
    if (inputBusca) inputBusca.value = "";
    if (filtroArea) filtroArea.value = "";
    applyFilters();
  });

  applyFilters();
}

function renderProjectCards(container, projetos, pathPrefix = "") {
  container.innerHTML = "";

  if (!projetos.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Nenhum projeto encontrado</h3>
        <p>Tente alterar os filtros ou publique um novo projeto.</p>
      </div>
    `;
    return;
  }

  projetos.forEach((projeto) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.innerHTML = `
      <div class="project-meta">
        <span class="badge">${projeto.area}</span>
        <span class="badge">${projeto.status}</span>
      </div>

      <h3>${projeto.titulo}</h3>
      <p>${projeto.resumo}</p>

      <div class="project-footer">
        <span><strong>Equipe:</strong> ${projeto.autor}</span>
        <a class="btn btn-primary" href="${pathPrefix}projeto.html?id=${projeto.id}">Ver detalhes</a>
      </div>
    `;
    container.appendChild(article);
  });
}

function setupProjectDetails() {
  const titleEl = document.getElementById("detailTitle");
  if (!titleEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const projeto = getProjects().find((item) => item.id === id);

  if (!projeto) {
    titleEl.textContent = "Projeto não encontrado";
    document.getElementById("detailResumo").textContent =
      "Não foi possível localizar esse projeto no catálogo.";
    document.getElementById("detailDescricao").textContent =
      "Verifique se o projeto ainda existe ou retorne para a listagem principal.";
    document.getElementById("detailArea").textContent = "-";
    document.getElementById("detailAutor").textContent = "-";
    document.getElementById("detailStatus").textContent = "-";
    return;
  }

  document.title = `${projeto.titulo} | Portal Acadêmico`;
  titleEl.textContent = projeto.titulo;
  document.getElementById("detailResumo").textContent = projeto.resumo;
  document.getElementById("detailDescricao").textContent = projeto.descricao;
  document.getElementById("detailArea").textContent = projeto.area;
  document.getElementById("detailAutor").textContent = projeto.autor;
  document.getElementById("detailStatus").textContent = projeto.status;
}

function setupLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("loginNome").value.trim();
    const email = document.getElementById("loginEmail").value.trim();

    if (!nome || !email) {
      alert("Preencha nome e e-mail para entrar.");
      return;
    }

    localStorage.setItem("portalAuth", "true");
    localStorage.setItem("portalUserName", nome);
    localStorage.setItem("portalUserEmail", email);

    alert("Login realizado com sucesso!");
    window.location.href = "home.html";
  });
}

function setupCadastro() {
  const form = document.getElementById("cadastroForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("cadastroNome").value.trim();
    const email = document.getElementById("cadastroEmail").value.trim();
    const senha = document.getElementById("cadastroSenha").value.trim();

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    localStorage.setItem("portalAuth", "true");
    localStorage.setItem("portalUserName", nome);
    localStorage.setItem("portalUserEmail", email);

    alert("Cadastro realizado com sucesso!");
    window.location.href = "home.html";
  });
}

function setupPublishForm() {
  const form = document.getElementById("publishForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = document.getElementById("tituloProjeto").value.trim();
    const area = document.getElementById("areaProjeto").value.trim();
    const autor = document.getElementById("autorProjeto").value.trim();
    const resumo = document.getElementById("resumoProjeto").value.trim();
    const descricao = document.getElementById("descricaoProjeto").value.trim();

    if (!titulo || !area || !autor || !resumo || !descricao) {
      alert("Preencha todos os campos do projeto.");
      return;
    }

    const projetos = getProjects();

    const novoProjeto = {
      id: Date.now().toString(),
      titulo,
      area,
      autor,
      resumo,
      descricao,
      status: "Recém-publicado"
    };

    projetos.unshift(novoProjeto);
    saveProjects(projetos);

    alert("Projeto publicado com sucesso!");
    window.location.href = `projeto.html?id=${novoProjeto.id}`;
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("contatoNome").value.trim();
    const email = document.getElementById("contatoEmail").value.trim();
    const mensagem = document.getElementById("contatoMensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos para enviar a mensagem.");
      return;
    }

    alert("Mensagem enviada com sucesso! Em um protótipo real, ela seria encaminhada para a equipe.");
    form.reset();
  });
}

function setupLogoutButtons() {
  const buttons = document.querySelectorAll("[data-logout]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.removeItem("portalAuth");
      localStorage.removeItem("portalUserName");
      localStorage.removeItem("portalUserEmail");
      alert("Sessão encerrada.");
      window.location.href = "../index.html";
    });
  });
}

function updateAuthUI() {
  const auth = localStorage.getItem("portalAuth") === "true";
  const name = localStorage.getItem("portalUserName") || "Visitante";

  const userGreeting = document.getElementById("userGreeting");
  if (userGreeting) {
    userGreeting.textContent = auth
      ? `Bem-vindo, ${name}!`
      : "Bem-vindo ao portal!";
  }
}