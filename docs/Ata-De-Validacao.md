#Ata de Validação do Protótipo: REGIIMENTOWEB

**Projeto:** Plataforma Digital & Dashboards R.E.G.I.I.M.E.N.T.O.  
**Data:** 27 de Março de 2026  
**Local:** Reunião Remota

---

##1. Participantes

| Nome | Papel / Responsabilidade | Organização |
| :--- | :--- | :--- |
| **Arthur Silas** | Product Owner (PO) | Equipe REGIIMENTOWEB |
| **Matheus Covre** | Scrum Master | Equipe REGIIMENTOWEB |
| **José Neto** | Arquiteto de Software | Equipe REGIIMENTOWEB |
| **Arthur Amaral** | Dev Team (Front-end) | Equipe REGIIMENTOWEB |
| **Lucas Ferreira** | AD / DBA (Dados) | Equipe REGIIMENTOWEB |
| **Stakeholder Rep.** | Responsável/Parceiro | Grupo R.E.G.I.I.M.E.N.T.O (UnB) |

---

##2. O Que Foi Apresentado

A equipe demonstrou o **MVP (Produto Mínimo Viável)** focado na resolução da dispersão de informações científicas. Os pontos chave foram:

* **Arquitetura Institucional:** Navegação construída em `HTML/Tailwind CSS` focada na identidade do grupo UnB / INTERPARES TRUST AI.
* **Linhas de Pesquisa:** Exposição clara das áreas de **CAS** (Ciência Arquivística Computacional) e **MIA** (Arquitetura da Informação Multimodal).
* **Repositório Dinâmico:** Demonstração do consumo de arquivos `publicacoes.json` para renderização de teses e artigos sem dependência de banco de dados complexo nesta fase.
* **Dashboards Analíticos:** Visualização de indicadores de pesquisa utilizando a biblioteca `Chart.js`, simulando a evolução da produção científica.
* **Responsividade:** Teste de interface em dispositivos móveis (Simulação Mobile-First).

---

##3. Feedback do Stakeholder

###Pontos Fortes
* **Centralização:** A proposta ataca diretamente o "Problema Central" identificado: a fragmentação dos dados em diferentes plataformas.
* **Tecnologia:** A escolha da *stack* (`Tailwind` + `Vanilla JS`) foi elogiada pela leveza e facilidade de manutenção por futuros pesquisadores.
* **Visualização:** Os gráficos interativos foram considerados o diferencial para a prestação de contas do grupo à sociedade.

###Oportunidades de Melhoria
* **Navegação:** Necessidade de tornar o fluxo entre "Linhas de Pesquisa" e "Publicações Relacionadas" mais intuitivo.
* **Dados:** Sugestão de incluir filtros por ano e autor no repositório dinâmico.
* **Identidade:** Refinar a paleta de cores para alinhar-se estritamente à sobriedade acadêmica exigida pelo INTERPARES TRUST AI.

---

##4. Ajustes Identificados & Plano de Ação

Com base no feedback, o **Backlog Inicial** foi atualizado com as seguintes prioridades:

- [ ] **Interface (UI):** Ajustar o contraste e tipografia das seções de Deep Learning e Engenharia de Ontologias para melhor legibilidade.
- [ ] **Lógica (JS):** Implementar função de busca simples no `repositorio.js` para filtrar o arquivo JSON.
- [ ] **Documentação:** Finalizar o `README.md` técnico e os arquivos de requisitos no GitHub (Missão: Matheus Covre e Arthur Silas).
- [ ] **Dados:** Refinar as métricas do `dados.json` para refletir cenários reais de Multimodalidade no Brasil (Missão: Lucas Ferreira).

---

##5. Próximos Passos (Roadmap)

1.  **Sprint de Refinamento:** Ajustes visuais baseados na ata de hoje.
2.  **Preparação de Deploy:** Configuração final na `Vercel` ou `GitHub Pages`.
3.  **Apresentação Final:** Preparação do material para o Projeto Integrador I - ADS (CEUB).

---

##6. Conclusão

A validação confirma que o projeto **REGIIMENTOWEB** está alinhado com as necessidades do grupo de pesquisa. O protótipo demonstrou viabilidade técnica e funcional, sendo autorizado o prosseguimento para a fase final de polimento e documentação.

---
