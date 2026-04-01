# Documento de Requisitos: Histórias de Usuário

**Projeto:** Plataforma de Centralização de Produção Científica e Dados  
**Data:** 25 de Março de 2026  
**Status:** `Em Definição`

---

## 🎯 Objetivo do Projeto
Centralizar informações institucionais, pesquisas, publicações, eventos e dados analíticos em um único ambiente digital. O foco é apoiar a divulgação da produção científica em áreas como:
* Ciência Arquivística Computacional (**CAS**)
* Arquitetura da Informação Multimodal (**MIA**)
* Processamento de Linguagem Natural (**PLN**)
* Engenharia de Ontologias, Multimodalidade e Deep Learning
* Dashboards interativos para dados estatísticos.

---

## 🏛️ Épico 1: Portal Institucional e Linhas de Pesquisa
> Focado em apresentar a identidade, histórico e áreas de atuação do grupo R.E.G.I.I.M.E.N.T.O.

### US01 - Página Inicial (Visão Geral)
**História:** Como visitante da plataforma, eu quero acessar uma página inicial com navegação clara para que eu tenha uma visão rápida dos objetivos do grupo e consiga acessar facilmente as demais seções.

**Critérios de Aceitação:**
- [ ] A página deve ser construída com HTML/Tailwind CSS.
- [ ] Interface totalmente responsiva.
- [ ] Menu de navegação funcional contendo: Sobre, Pesquisas, Publicações, Eventos e Dashboards.

### US02 - Informações Institucionais e Equipe
**História:** Como membro da comunidade acadêmica, eu quero ler o histórico do grupo e visualizar os membros do corpo docente e discente para que eu conheça as pessoas envolvidas no projeto.

**Critérios de Aceitação:**
- [ ] Seção "Sobre" com o texto de apresentação do grupo.
- [ ] Listagem de professores e estudantes consumindo dados de um arquivo `.json`.

### US03 - Seção de Linhas de Pesquisa
**História:** Como estudante interessado, eu quero visualizar as linhas de pesquisa do grupo (como CAS, MIA, Multimodalidade) para que eu entenda exatamente em quais áreas o grupo atua.

**Critérios de Aceitação:**
- [ ] Área dedicada listando cada linha de pesquisa com uma breve descrição.
- [ ] Formatação visual clara e intuitiva.

---

## 📚 Épico 2: Repositório Acadêmico e Eventos
> Focado na organização e exibição do conteúdo gerado pelo grupo de forma dinâmica via JSON.

### US04 - Repositório Dinâmico de Publicações
**História:** Como pesquisador, eu quero acessar uma lista com as teses, dissertações e artigos do grupo para que eu possa encontrar referências bibliográficas da produção do R.E.G.I.I.M.E.N.T.O.

**Critérios de Aceitação:**
- [ ] Uso de JavaScript (ES6) para ler o arquivo `publicacoes.json`.
- [ ] Renderização dinâmica de cards ou lista na tela.
- [ ] Exibição obrigatória de: Título, autor e tipo de publicação.

### US05 - Agenda de Eventos
**História:** Como interessado nas atividades do grupo, eu quero visualizar um calendário ou lista de próximos workshops, colóquios e seminários para que eu possa me programar para participar.

**Critérios de Aceitação:**
- [ ] Listagem de datas, horários e descrições dos eventos acadêmicos.
- [ ] Dados carregados de um arquivo `.json` estático para facilitar atualizações.

---

## 📊 Épico 3: Dashboards de Dados
> Focado no uso do Chart.js para dar vida aos dados complexos da pesquisa.

### US06 - Visualização de Indicadores Analíticos
**História:** Como visitante ou parceiro institucional, eu quero acessar dashboards interativos com dados da Arquitetura da Informação Multimodal no Brasil e métricas acadêmicas para que eu compreenda as estatísticas de forma visual.

**Critérios de Aceitação:**
- [ ] Importação e uso da biblioteca `Chart.js`.
- [ ] Exibição de gráficos de barras, rosca ou linhas.
- [ ] Dados renderizados a partir de um arquivo `dados.json`.
- [ ] Funcionalidade de *hover* (passar o mouse) para ver números exatos.

---

## 🤝 Épico 4: Engajamento e Área para Interessados
> Focado em conectar o público com o grupo de pesquisa.

### US07 - Área de Contato para Interessados
**História:** Como estudante ou voluntário potencial, eu quero acessar uma seção de interessados com instruções de como participar do grupo para que eu saiba quais os passos para me integrar às pesquisas.

**Critérios de Aceitação:**
- [ ] Orientações claras de contato e perfil desejado para estudantes.
- [ ] Links para formulários externos ou e-mails de contato dos professores.

### US08 - Responsividade Total (Requisito Não Funcional transposto para US)
**História:** Como usuário de dispositivo móvel, eu quero poder navegar por toda a plataforma no meu celular para que eu consiga ler artigos e ver os gráficos sem que a tela quebre.

**Critérios de Aceitação:**
- [ ] Uso de classes utilitárias do Tailwind CSS para responsividade.
- [ ] Menu do tipo "Hambúrguer" para dispositivos móveis.
- [ ] Ajuste automático dos canvas do `Chart.js` para telas de smartphones e tablets.

---

## 🛠️ Stack Tecnológica Sugerida

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5 / CSS3** | Estruturação e estilização base |
| **Tailwind CSS** | Framework CSS para design responsivo |
| **JavaScript (ES6)** | Lógica de programação e manipulação de DOM |
| **Chart.js** | Visualização de dados e gráficos |
| **JSON** | Armazenamento e fornecimento de dados estáticos |
