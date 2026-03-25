# 🧪 Plano de Testes e Qualidade

## 1. Casos de Teste Funcionais (CT)

| ID | Caso de Teste | Ação | Resultado Esperado |
|:---|:---|:---|:---|
| **CT-01** | Navegação por Menu | Clicar em "Dashboards" no cabeçalho. | O scroll deve levar à seção de gráficos ou carregar a página correta. |
| **CT-02** | Filtro de Publicações | Digitar "Deep Learning" na busca. | A lista deve exibir apenas artigos que contenham o termo no título ou resumo. |
| **CT-03** | Responsividade | Redimensionar para 375px (iPhone). | O menu deve se transformar em "hambúrguer" e as colunas em linha única. |
| **CT-04** | Integridade de Links | Clicar no link do Currículo Lattes. | Abrir o perfil do pesquisador em uma nova aba (`_blank`). |

## 2. Testes de Integração de Dados
* **Cenário:** Modificação do arquivo `data.json`.
* **Teste:** Verificar se, ao adicionar um novo evento no JSON, a interface renderiza o novo card automaticamente sem quebrar o layout.

## 3. Ferramentas de Teste Sugeridas
* **Lighthouse (Chrome):** Para auditoria de Performance, Acessibilidade e SEO.
* **W3C Validator:** Para garantir que o HTML5 não possui erros de sintaxe.
* **Checklist LGPD:** Revisão manual para garantir que apenas dados públicos (Lattes/Nomes) estão visíveis.

## 4. Matriz de Aceitação
O protótipo será considerado "Pronto" (Done) quando:
1. Todos os RF-01 a RF-05 estiverem funcionais.
2. O site atingir nota > 85 no Lighthouse (Performance).
3. Não houver erros de console (F12) no carregamento inicial.
