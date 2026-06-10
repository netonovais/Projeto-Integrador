# Roteiro de Teste de Usabilidade

**Data:** 10/06/2026  
**Equipe:** José Neto, Lucas Ferreira, Arthur Amaral e Matheus Covre  
**Projeto:** R.E.G.I.I.M.E.N.T.O. - Plataforma Digital & Dashboards (CEUB / UnB)  
**Usuário/Convidado:** Cauã Teixeira (Estudante do CEUB — Perfil: Aluno interessado em pesquisa)  

---

## 1. Primeiras Impressões
* **O sistema parece fácil de usar à primeira vista?** > O sistema é bem direto. A página inicial construída com Tailwind CSS tem uma estética moderna que prende a atenção. O topo do site deixa claro do que se trata o grupo de pesquisa.
* **O design é agradável e intuitivo?** > Sim, as cores institucionais passam bastante seriedade. A transição visual entre os blocos de texto e a área de dados é bem fluida.
* **As informações principais estão visíveis e acessíveis?** > As linhas de pesquisa (como Deep Learning e Ciência Arquivística Computacional) e a seção da equipe estão fáceis de achar. Contudo, achei que a "Área para Interessados" poderia ter um destaque maior no menu de navegação.

---

## 2. Navegação e Interação
* **Você conseguiu realizar as ações esperadas sem ajuda?** > Consegui navegar pelas publicações e interagir com os gráficos do Chart.js. Só fiquei em dúvida se os gráficos geravam alguma ação ao clicar ou se eram apenas informativos.
* **Houve alguma parte confusa ou difícil de entender?** > Na página de "Publicações com Filtros", se eu desmarcar todas as caixas de seleção, a tela fica totalmente em branco. Seria bom ter um aviso como *"Nenhum filtro selecionado"* em vez de um espaço vazio.
* **O tempo de resposta do sistema foi adequado?** > Muito rápido. Como os dados estão em arquivos JSON locais, a filtragem e a renderização dos cards acontecem instantaneamente.

---

## 3. Clareza e Comunicação
* **As mensagens e instruções do sistema são claras?** > São claras para quem já entende de tecnologia. Para alunos dos primeiros semestres do CEUB, alguns termos como "Arquitetura da Informação Multimodal" podem assustar um pouco; talvez um pequeno texto explicativo ajudasse.
* **Há termos ou ícones que geraram dúvida?** > Na agenda de eventos os ícones são ótimos. No dashboard, a legenda do gráfico de pizza confunde um pouco antes de você passar o mouse por cima para ver os detalhes.
* **Você se sentiu confiante ao usar o sistema?** > Sim, a interface é limpa e previsível. Não dá medo de clicar e quebrar o layout.

---

## 4. Satisfação Geral
* **O sistema atendeu às suas expectativas?** > Sim. Ele resolve bem o problema de centralizar as pesquisas e mostrar dados em tempo real, algo que geralmente fica escondido em PDFs longos na faculdade.
* **Você recomendaria o uso para outras pessoas?** > Com certeza. É uma ótima vitrine para quem quer entrar em projetos de iniciação científica.
* **O que mais gostou e o que menos gostou?** > * **Mais gostou:** Os dashboards interativos e a paginação/filtros das publicações científicas.  
  > * **Menos gostou:** O formulário da "Área para Interessados" aceita o clique de envio, mas não mostra uma mensagem clara de sucesso na tela.

---

## 5. Sugestões de Melhoria
* **Que mudanças você sugeriria para melhorar a experiência?** > Um botão flutuante de "Voltar ao topo" ajudaria bastante, já que a página principal concentra muitas seções verticais (One-Page).
* **Há funcionalidades que poderiam ser adicionadas ou simplificadas?** > Além dos filtros prontos por categoria, seria excelente ter um campo de busca por digitação de texto dentro do repositório de publicações.

## Observações do Teste
* **Duração do teste:** 12 minutos  
* **Ambiente:** Presencial (Desktop em laboratório com teste de responsividade móvel simulado via DevTools)  
* **Observações adicionais:** A responsividade se comportou muito bem. No formato mobile, o menu hambúrguer funcionou sem quebras e os gráficos se reajustaram perfeitamente à tela menor.

---
---

# Relatório de Análise Crítica – Usabilidade

**Data:** 10/06/2026  
**Equipe:** José Neto, Lucas Ferreira, Arthur Amaral e Matheus Covre  
**Projeto:** R.E.G.I.I.M.E.N.T.O. - Plataforma Digital & Dashboards  
**Usuário/Convidado:** Cauã Teixeira (Estudante do CEUB)  

---

## 1. Contexto da Avaliação
O objetivo deste teste foi validar a eficiência do repositório dinâmico estruturado em JSON, a clareza e interatividade dos dashboards em JavaScript (`Chart.js`) e a experiência do usuário (UX) em cenários mobile e desktop, utilizando o protótipo desenvolvido para a disciplina de Projeto Integrador I.

---

## 2. Principais Observações

### Pontos Positivos Identificados
* **Alta Performance:** O carregamento assíncrono dos dados de arquivos JSON (`indicadores.json`, `publicacoes.json`) garante transições imediatas, sem *loading* perceptível.
* **Estética e Clean Design:** O uso do Tailwind CSS resultou em um visual moderno, alinhado com as propostas atuais de portais de tecnologia.
* **Responsividade Nativa:** A adaptação para dispositivos móveis rearranjou os blocos de equipe e gráficos de forma inteligente.

### Dificuldades Encontradas
* **Tratamento de Estado Vazio (Empty State):** A seção de publicações não responde de forma elegante quando nenhum filtro de busca está ativo, resultando em um vácuo de conteúdo.
* **Feedback de Ação:** O formulário de recrutamento na área de interessados carece de um aviso visual explícito de confirmação após o envio dos dados.

### Sugestões do Usuário
* Adicionar um campo de busca textual simples (input text) integrado ao repositório de artigos.
* Inserir tooltips informativos para contextualizar os jargões científicos do grupo para novos estudantes.

---

## 3. Análise Crítica da Equipe
* **Usabilidade geral:** **Adequada.** O sistema cumpre com rigor os requisitos funcionais estabelecidos, oferecendo uma navegação lógica e organizada.
* **Acessibilidade:** **Precisa de Ajustes.** Embora o contraste de cores esteja excelente, os elementos gráficos gerados em `<canvas>` pelo Chart.js precisam de descrições alternativas para leitores de tela.
* **Experiência do usuário (UX):** **Fluida.** A transformação de indicadores acadêmicos complexos em dashboards visuais diminui drasticamente o esforço do usuário para entender a produção do grupo.
* **Pontos fortes:** Desempenho técnico, consistência visual da interface e estrutura de arquivos organizada.
* **Pontos fracos:** Falta de feedbacks dinâmicos em interações de formulário e filtros vazios.

---

## 4. Propostas de Melhoria
- [x] Ajustar elementos visuais (Adicionar mensagem informativa no repositório quando nenhum filtro de publicação estiver selecionado).
- [x] Revisar textos e instruções para maior clareza (Inserir pequenas descrições ou dicas nas legendas dos dashboards).
- [ ] Implementar funcionalidade de pesquisa por string de texto no arquivo `publicacoes.js`.
- [ ] Criar um modal de sucesso ("Inscrição recebida!") ao interagir com o formulário da área de interessados.
