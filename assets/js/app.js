// Configurações do Supabase (O Silas vai preencher aqui)
const SUPABASE_URL = 'SUA_URL_AQUI';
const SUPABASE_KEY = 'SUA_KEY_AQUI';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Função para listar os projetos (Exemplo inicial)
async function buscarProjetos() {
    console.log("Iniciando busca de projetos...");
    // A lógica de busca virá aqui
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    buscarProjetos();
});
