# Gestão de Dados do Projeto R.E.G.I.I.M.E.N.T.O.

## 1. Visão Geral

No MVP do projeto, a camada de dados foi estruturada com arquivos JSON estáticos, carregados pelo frontend em JavaScript. Essa abordagem foi escolhida por ser simples, leve e adequada ao estágio atual do protótipo, permitindo organizar informações institucionais, publicações, eventos, equipe, contribuidores e indicadores analíticos sem a necessidade imediata de um banco de dados relacional em produção.

A modelagem lógica dos dados foi definida para garantir consistência entre o conteúdo exibido na interface e os dados utilizados nos dashboards. Além das seções já implementadas, o projeto prevê uma aba de **Contribuidores**, que será incorporada à estrutura de dados e à documentação como parte da evolução do sistema.

## 2. Objetivo da Gestão de Dados

A gestão de dados do projeto tem como objetivo:

- organizar as informações do grupo de pesquisa em estruturas padronizadas;
- facilitar a manutenção e atualização do conteúdo;
- garantir consistência entre os dados exibidos e os indicadores apresentados;
- apoiar a geração de estatísticas para os dashboards do sistema;
- preparar a base conceitual para futura evolução para banco de dados relacional ou API.

## 3. Estruturas de Dados do MVP

### 3.1 Equipe (`equipe.json`)
Armazena os integrantes relacionados ao projeto e/ou ao grupo.

Campos:
- `nome`: nome completo do integrante;
- `funcao`: papel exercido no projeto;
- `categoria`: classificação do integrante;
- `descricao`: resumo da responsabilidade desempenhada.

### 3.2 Publicações (`publicacoes.json`)
Armazena as produções acadêmicas exibidas na plataforma.

Campos:
- `tipo`: categoria da produção (artigo, dissertação, relatório, projeto etc.);
- `titulo`: título da produção;
- `descricao`: resumo do conteúdo;
- `ano`: ano de publicação;
- `area`: área temática vinculada.

### 3.3 Eventos (`eventos.json`)
Armazena os eventos e atividades do grupo.

Campos:
- `titulo`: nome do evento;
- `data`: período ou data do evento;
- `descricao`: descrição resumida.

### 3.4 Indicadores (`indicadores.json`)
Armazena os dados consolidados usados nos cards e gráficos da dashboard.

Campos:
- `publicacoes`: total de produções mapeadas;
- `eventos`: total de eventos mapeados;
- `pesquisadores`: total de pesquisadores vinculados;
- `projetos`: total de projetos identificados;
- `categorias`: distribuição das produções por tipo;
- `atividadesMensais`: frequência de atividades por mês;
- `areasTematicas`: distribuição por área de pesquisa.

### 3.5 Contribuidores (`contribuidores.json`)

Armazena os contribuidores vinculados ao projeto ou ao grupo, permitindo futura exibição em uma aba específica da plataforma.

Campos sugeridos:
- `nome`: nome completo do contribuidor;
- `tipo`: categoria do contribuidor (pesquisador, colaborador, parceiro, estudante, extensionista etc.);
- `area`: área de atuação ou linha de contribuição;
- `descricao`: resumo da participação ou contribuição realizada;
- `link`: campo opcional para perfil, currículo ou página externa.

> Observação: no estágio atual do MVP, a aba **Contribuidores** encontra-se prevista na evolução do sistema, mas ainda não foi implementada na interface. Mesmo assim, sua estrutura já pode ser documentada para orientar a continuidade do desenvolvimento.

## 4. Regras de Consistência dos Dados

Para manter a integridade lógica do sistema, foram definidas as seguintes regras:

1. O arquivo `publicacoes.json` deve conter apenas registros de produções acadêmicas.
2. O arquivo `eventos.json` deve conter apenas registros de eventos, utilizando os campos `titulo`, `data` e `descricao`.
3. O arquivo `equipe.json` deve manter a padronização dos papéis e descrições dos integrantes.
4. O arquivo `contribuidores.json`, quando criado, deve seguir padronização de campos e classificação de tipo de contribuição.
5. O arquivo `indicadores.json` deve refletir dados coerentes com o conteúdo cadastrado ou, quando representar totais consolidados, isso deve estar documentado.
6. A nomenclatura dos campos deve permanecer estável para evitar falhas na renderização da interface.

## 5. Modelagem Lógica

Mesmo utilizando JSON no MVP, foi possível estabelecer uma modelagem lógica das entidades do sistema:

- **Equipe** representa os membros e funções do projeto/grupo;
- **Publicação** representa a produção científica cadastrada;
- **Evento** representa ações, encontros, workshops e seminários;
- **Contribuidor** representa pessoas ou parceiros que colaboram com o grupo ou com o projeto.
- **Indicadores** representam a consolidação estatística das informações exibidas na dashboard.
  
Os indicadores dependem diretamente da organização correta das publicações e eventos, pois são a síntese quantitativa dos dados disponíveis na plataforma.

## 6. Relacionamento Conceitual das Entidades

- Uma **publicação** pertence a uma **área temática** e a uma **categoria de produção**.
- Um **evento** contribui para a composição das **atividades mensais**.
- A **dashboard** consome os **indicadores consolidados** para exibir gráficos e cartões estatísticos.
- A **equipe** compõe a parte institucional do sistema e ajuda a contextualizar os responsáveis pelo projeto.
- Os **contribuidores** fortalecem a representação institucional e ampliam a visibilidade das pessoas envolvidas com o ecossistema do projeto.

## 7. Possível Evolução Futura

Como evolução técnica, essa camada de dados poderá migrar futuramente para um banco de dados relacional, com tabelas como:

- `membros`
- `contribuidores`
- `publicacoes`
- `eventos`
- `areas_tematicas`
- `indicadores``

Essa mudança permitiria cadastro dinâmico, filtros mais robustos, persistência real, consultas automatizadas e integração com backend.

## 8. Contribuição da Gestão de Dados no Projeto

A atuação de gestão de dados no projeto foi fundamental para:

- estruturar logicamente a informação;
- padronizar os dados consumidos pelo frontend;
- apoiar a construção dos dashboards;
- corrigir inconsistências entre arquivos de dados;
- documentar funcionalidades já existentes e previstas, como a aba de contribuidores;
- fortalecer a base documental e técnica do MVP.

## 9. Conclusão

A camada de dados do projeto R.E.G.I.I.M.E.N.T.O. foi organizada de forma compatível com o nível atual do MVP, utilizando JSON como solução simples e funcional. A modelagem lógica definida permite manter coerência entre conteúdo, interface e dashboards, além de preparar o sistema para futuras evoluções técnicas.
