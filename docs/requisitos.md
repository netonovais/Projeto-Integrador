# 📑 Especificação de Requisitos Detalhada

## 1. Requisitos Funcionais (RF)

| ID | Nome | Descrição | Prioridade |
|:---|:---|:---|:---:|
| **RF-01** | **Gestão de Conteúdo Estático** | O sistema deve exibir o histórico, missão, visão e valores do grupo de forma clara. | Alta |
| **RF-02** | **Filtro de Pesquisadores** | O sistema deve permitir filtrar o corpo docente e discente por linha de pesquisa ou nível acadêmico (Mestrado, Doutorado, Graduação). | Média |
| **RF-03** | **Repositório Categorizado** | A listagem de produções deve permitir busca por palavras-chave e filtros por tipo (Artigo, Tese, Workshop). | Alta |
| **RF-04** | **Dashboard Multimodal** | O sistema deve renderizar gráficos interativos consumindo dados de um arquivo JSON centralizado, representando a produção científica por ano/área. | Alta |
| **RF-05** | **Integração Lattes** | Cada perfil de integrante deve possuir um botão funcional de redirecionamento para o Currículo Lattes. | Alta |
| **RF-06** | **Calendário de Eventos Ativo** | Deve haver uma seção que diferencie "Próximos Eventos" de "Eventos Encerrados". | Média |
| **RF-07** | **Formulário de Captação** | Área para interessados enviarem dados básicos (Nome, Email, Lattes) para contato futuro da coordenação. | Baixa |

## 2. Requisitos Não Funcionais (RNF)

| ID | Categoria | Descrição | Meta |
|:---|:---|:---|:---|
| **RNF-01** | **Usabilidade** | A interface deve seguir as heurísticas de Nielsen para garantir navegação intuitiva. | < 3 cliques p/ info |
| **RNF-02** | **Acessibilidade** | O site deve ser compatível com leitores de tela e possuir contraste adequado (padrões WCAG 2.1). | Nível AA |
| **RNF-03** | **Performance** | O tempo de carregamento inicial (First Contentful Paint) não deve ultrapassar 2 segundos. | < 2s |
| **RNF-04** | **Segurança** | Nenhum dado sensível de alunos (como CPF ou Matrícula) deve ser exposto no front-end ou JSON público. | 100% LGPD |
| **RNF-05** | **Design** | Layout responsivo utilizando o framework **Tailwind CSS**, adaptando-se de 320px a 1920px. | Mobile-First |
