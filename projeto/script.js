let db = {
  projetos: [],
  membros: [],
  pesquisas: [],
  forum: []
};

document.addEventListener("DOMContentLoaded", async () => {
  await loadDatabase();
  setupMenu();
  setupFeaturedProjects();
  setupProjectListing();
  setupProjectDetails();
  setupLogin();
  setupCadastro();
  setupPublishForm();
  setupContactForm();
  setupForum();
  setupProjectComments();
  setupLogoutButtons();
  updateAuthUI();
});

async function loadDatabase() {
  try {
    const response = await fetch(getDbPath());
    db = await response.json();

    if (!localStorage.getItem("portalProjetos")) {
      localStorage.setItem("portalProjetos", JSON.stringify(db.projetos));
    }
  } catch (error) {
    console.error("Erro ao carregar db.json:", error);
  }
}

function getDbPath() {
  const path = window.location.pathname;
  return path.includes("/paginas/") ? "../db.json" : "db.json";
}

function getProjects() {
  return JSON.parse(localStorage.getItem("portalProjetos")) || db.projetos || [];
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

  const projects = getProjects().slice(0, 3);
  renderProjectCards(container, projects, "paginas/");
}

function setupProjectListing() {
  const container = document.getElementById("projectList");
  if (!container) return;

  const searchInput = document.getElementById("searchInput");
  const filterArea = document.getElementById("filterArea");
  const clearFilters = document.getElementById("clearFilters");

  function applyFilters() {
    const term = (searchInput?.value || "").trim().toLowerCase();
    const area = filterArea?.value || "";

    let projects = getProjects();

    if (term) {
      projects = projects.filter((project) => {
        return (
          project.titulo.toLowerCase().includes(term) ||
          project.resumo.toLowerCase().includes(term) ||
          project.autor.toLowerCase().includes(term) ||
          project.area.toLowerCase().includes(term)
        );
      });
    }

    if (area) {
      projects = projects.filter((project) => project.area === area);
    }

    renderProjectCards(container, projects, "");
  }

  searchInput?.addEventListener("input", applyFilters);
  filterArea?.addEventListener("change", applyFilters);

  clearFilters?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (filterArea) filterArea.value = "";
    applyFilters();
  });

  applyFilters();
}

function renderProjectCards(container, projects, pathPrefix = "") {
  container.innerHTML = "";

  if (!projects.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Nenhum projeto encontrado</h3>
        <p>Tente ajustar a busca, limpar os filtros ou publicar um novo projeto.</p>
      </div>
    `;
    return;
  }

  projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-card";

    const badgeClass = getBadgeClass(project.area);
    const icon = getProjectIcon(project.area);

    article.innerHTML = `
      <div class="project-top">
        <div class="project-icon">${icon}</div>
        <div class="project-meta">
          <span class="badge ${badgeClass}">${project.area}</span>
          <span class="badge badge-gray">${project.status}</span>
        </div>
      </div>

      <h3>${project.titulo}</h3>
      <p>${project.resumo}</p>

      <div class="project-footer">
        <span><strong>Equipe:</strong> ${project.autor}</span>
        <a class="btn btn-primary" href="${pathPrefix}projeto.html?id=${project.id}">Ver detalhes</a>
      </div>
    `;

    container.appendChild(article);
  });
}

function getBadgeClass(area) {
  switch (area) {
    case "Tecnologia":
    case "Inovação":
      return "badge-green";
    case "Pesquisa":
      return "badge-blue";
    case "Extensão":
      return "badge-yellow";
    case "Educação":
      return "badge-gray";
    default:
      return "badge-green";
  }
}

function getProjectIcon(area) {
  switch (area) {
    case "Tecnologia":
      return "💻";
    case "Pesquisa":
      return "📊";
    case "Extensão":
      return "🤝";
    case "Educação":
      return "📘";
    case "Inovação":
      return "🚀";
    default:
      return "📁";
  }
}

function setupProjectDetails() {
  const titleEl = document.getElementById("detailTitle");
  if (!titleEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = getProjects().find((item) => item.id === id);

  if (!project) {
    titleEl.textContent = "Projeto não encontrado";
    document.getElementById("detailResumo").textContent =
      "Não foi possível localizar esse projeto no catálogo.";
    document.getElementById("detailDescricao").textContent =
      "Verifique se o projeto ainda existe ou volte para a página principal de projetos.";
    document.getElementById("detailArea").textContent = "-";
    document.getElementById("detailAutor").textContent = "-";
    document.getElementById("detailStatus").textContent = "-";

    const detailIcon = document.getElementById("detailIcon");
    if (detailIcon) detailIcon.textContent = "❓";
    return;
  }

  document.title = `${project.titulo} | Portal Acadêmico de Projetos`;
  document.getElementById("detailTitle").textContent = project.titulo;
  document.getElementById("detailResumo").textContent = project.resumo;
  document.getElementById("detailDescricao").textContent = project.descricao;
  document.getElementById("detailArea").textContent = project.area;
  document.getElementById("detailAutor").textContent = project.autor;
  document.getElementById("detailStatus").textContent = project.status;

  const detailIcon = document.getElementById("detailIcon");
  if (detailIcon) detailIcon.textContent = getProjectIcon(project.area);

  const detailBadge = document.getElementById("detailBadge");
  if (detailBadge) {
    detailBadge.textContent = project.area;
    detailBadge.className = `badge ${getBadgeClass(project.area)}`;
  }
}

function setupLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("loginNome").value.trim();
    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginSenha").value.trim();

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos para entrar.");
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
    const curso = document.getElementById("cadastroCurso").value.trim();
    const senha = document.getElementById("cadastroSenha").value.trim();

    if (!nome || !email || !curso || !senha) {
      alert("Preencha todos os campos do cadastro.");
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

    const projects = getProjects();

    const newProject = {
      id: Date.now().toString(),
      titulo,
      area,
      autor,
      resumo,
      descricao,
      status: "Recém-publicado"
    };

    projects.unshift(newProject);
    saveProjects(projects);

    alert("Projeto publicado com sucesso!");
    window.location.href = `projeto.html?id=${newProject.id}`;
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

    alert("Mensagem enviada com sucesso! Em um sistema real, ela seria encaminhada para a equipe.");
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
      alert("Sessão encerrada com sucesso.");
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
/* ============================================================
   Fórum — comentários/tópicos (persistência local no navegador)
   ============================================================ */
function getForumPosts() {
  const stored = localStorage.getItem("portalForum");
  if (stored) return JSON.parse(stored);

  // Semente inicial a partir do db.json
  const seed = (db.forum || []).map((item) => ({
    id: item.id,
    autor: "Equipe do portal",
    titulo: item.titulo,
    categoria: item.categoria || "Geral",
    mensagem: item.descricao,
    data: ""
  }));
  return seed;
}

function saveForumPosts(posts) {
  localStorage.setItem("portalForum", JSON.stringify(posts));
}

function renderForum(posts) {
  const list = document.getElementById("forumList");
  if (!list) return;

  if (!posts.length) {
    list.innerHTML = `
      <div class="empty-state">
        <h3>Nenhum comentário ainda</h3>
        <p>Seja o primeiro a iniciar uma discussão no fórum.</p>
      </div>`;
    return;
  }

  list.innerHTML = posts
    .map(
      (post) => `
      <article class="comment-card">
        <div class="comment-head">
          <strong>${post.titulo}</strong>
          <span class="badge badge-gray">${post.categoria}</span>
        </div>
        <p>${post.mensagem}</p>
        <div class="comment-foot">
          <span>Por <strong>${post.autor || "Anônimo"}</strong></span>
          ${post.data ? `<span>${post.data}</span>` : ""}
        </div>
      </article>`
    )
    .join("");
}

function setupForum() {
  const form = document.getElementById("forumForm");
  const list = document.getElementById("forumList");
  if (!list) return;

  renderForum(getForumPosts());

  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const autor = document.getElementById("forumAutor").value.trim();
    const titulo = document.getElementById("forumTitulo").value.trim();
    const categoria = document.getElementById("forumCategoria").value.trim();
    const mensagem = document.getElementById("forumMensagem").value.trim();

    if (!titulo || !mensagem) {
      alert("Preencha pelo menos o assunto e o comentário.");
      return;
    }

    const posts = getForumPosts();
    posts.unshift({
      id: Date.now().toString(),
      autor: autor || "Anônimo",
      titulo,
      categoria: categoria || "Geral",
      mensagem,
      data: new Date().toLocaleDateString("pt-BR")
    });

    saveForumPosts(posts);
    renderForum(posts);
    form.reset();
  });
}

/* ============================================================
   Comentários dentro de um projeto (página de detalhes)
   ============================================================ */
function getProjectComments(projectId) {
  const all = JSON.parse(localStorage.getItem("portalProjectComments") || "{}");
  return all[projectId] || [];
}

function saveProjectComments(projectId, comments) {
  const all = JSON.parse(localStorage.getItem("portalProjectComments") || "{}");
  all[projectId] = comments;
  localStorage.setItem("portalProjectComments", JSON.stringify(all));
}

function renderProjectComments(comments) {
  const list = document.getElementById("projectComments");
  if (!list) return;

  if (!comments.length) {
    list.innerHTML = `
      <div class="empty-state">
        <h3>Nenhum comentário</h3>
        <p>Comente este projeto e compartilhe sua opinião.</p>
      </div>`;
    return;
  }

  list.innerHTML = comments
    .map(
      (c) => `
      <article class="comment-card">
        <div class="comment-foot" style="margin-bottom:8px;">
          <span>Por <strong>${c.autor || "Anônimo"}</strong></span>
          ${c.data ? `<span>${c.data}</span>` : ""}
        </div>
        <p>${c.texto}</p>
      </article>`
    )
    .join("");
}

function setupProjectComments() {
  const form = document.getElementById("projectCommentForm");
  const list = document.getElementById("projectComments");
  if (!list) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id") || "geral";

  renderProjectComments(getProjectComments(projectId));

  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const autor = document.getElementById("commentAutor").value.trim();
    const texto = document.getElementById("commentTexto").value.trim();

    if (!texto) {
      alert("Escreva um comentário antes de enviar.");
      return;
    }

    const comments = getProjectComments(projectId);
    comments.unshift({
      autor: autor || "Anônimo",
      texto,
      data: new Date().toLocaleDateString("pt-BR")
    });

    saveProjectComments(projectId, comments);
    renderProjectComments(comments);
    form.reset();
  });
}
