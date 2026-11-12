// Conexão com o Supabase
const SUPABASE_URL = "https://gzxjnzkcohugjvbqgtmh.supabase.co";
const SUPABASE_KEY = "sb_publishable_gntRhs-mmLcR_F35gyg7XQ_iOvIe3af";

const clienteSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


const botao = document.getElementById("adicionarMateria");
const campo = document.getElementById("novaMateria");
const input = document.getElementById("nomeMateria");
const lista = document.getElementById("listaMaterias");
const cancelar = document.getElementById("cancelarMateria");

const confirmarMateria = document.getElementById("confirmarMateria");

const modal = document.getElementById("modalConfirmacao");
const cancelarApagar = document.getElementById("cancelarApagar");
const confirmarApagar = document.getElementById("confirmarApagar");

const inicio = document.getElementById("inicio");
const areaAnotacoes = document.getElementById("areaAnotacoes");
const listaAnotacoes = document.getElementById("listaAnotacoes");
const editorAnotacao = document.getElementById("editorAnotacao");
const botaoNovaAnotacao = document.getElementById("novaAnotacao");

const modalExcluirAnotacao = document.getElementById("modalExcluirAnotacao");
const cancelarExcluirAnotacao = document.getElementById("cancelarExcluirAnotacao");
const confirmarExcluirAnotacao = document.getElementById("confirmarExcluirAnotacao");

const areaAtividades = document.getElementById("areaAtividades");
const areaConteudo = document.getElementById("areaConteudo");

// Elementos dos conteúdos
const formularioConteudo = document.getElementById("formularioConteudo");
const erroConteudo = document.getElementById("erroConteudo");
const botaoNovoConteudo = document.getElementById("novoConteudo");
const cancelarConteudo = document.getElementById("cancelarConteudo");
const salvarConteudo = document.getElementById("salvarConteudo");

const nomeConteudo = document.getElementById("nomeConteudo");
const descricaoConteudo = document.getElementById("descricaoConteudo");
const tipoConteudo = document.getElementById("tipoConteudo");

const seletorTipoConteudo = document.getElementById("seletorTipoConteudo");
const botaoTipoConteudo = document.getElementById("botaoTipoConteudo");
const textoTipoConteudo = document.getElementById("textoTipoConteudo");
const opcoesTipoConteudo = document.getElementById("opcoesTipoConteudo");

const arquivoConteudo = document.getElementById("arquivoConteudo");
const linkConteudo = document.getElementById("linkConteudo");

const campoArquivoConteudo = document.getElementById("campoArquivoConteudo");
const campoLinkConteudo = document.getElementById("campoLinkConteudo");
const listaConteudos = document.getElementById("listaConteudos");
const tituloFormularioConteudo = document.getElementById("tituloFormularioConteudo");
const modalVisualizarConteudo = document.getElementById("modalVisualizarConteudo");
const fecharVisualizacaoConteudo = document.getElementById("fecharVisualizacaoConteudo");
const visualizacaoConteudo = document.getElementById("visualizacaoConteudo");

// Elementos do modal de exclusão de conteúdo
const modalExcluirConteudo = document.getElementById("modalExcluirConteudo");
const cancelarExcluirConteudo = document.getElementById("cancelarExcluirConteudo");
const confirmarExcluirConteudo = document.getElementById("confirmarExcluirConteudo");

const formularioTarefa = document.getElementById("formularioTarefa");
const tituloTarefa = document.getElementById("tituloTarefa");
const descricaoTarefa = document.getElementById("descricaoTarefa");
const prazoTarefa = document.getElementById("prazoTarefa");
const cancelarTarefa = document.getElementById("cancelarTarefa");
const salvarTarefa = document.getElementById("salvarTarefa");
const listaTarefas = document.getElementById("listaTarefas");
const botaoNovaTarefa = document.getElementById("novaTarefa");

const erroTarefa = document.getElementById("erroTarefa");

const modalExcluirTarefa = document.getElementById("modalExcluirTarefa");
const cancelarExcluirTarefa = document.getElementById("cancelarExcluirTarefa");
const confirmarExcluirTarefa = document.getElementById("confirmarExcluirTarefa");

const tituloFormularioTarefa = document.getElementById("tituloFormularioTarefa");

// Elementos dos exercícios
const formularioExercicio = document.getElementById("formularioExercicio");
const botaoNovoExercicio = document.getElementById("novoExercicio");
const cancelarExercicio = document.getElementById("cancelarExercicio");
const tituloExercicio = document.getElementById("tituloExercicio");
const enunciadoExercicio = document.getElementById("enunciadoExercicio");
const tipoExercicio = document.getElementById("tipoExercicio");

const seletorTipo = document.getElementById("seletorTipoExercicio");
const botaoTipo = document.getElementById("botaoTipoExercicio");
const textoTipo = document.getElementById("textoTipoExercicio");
const opcoesTipo = document.getElementById("opcoesTipoExercicio");

const respostaCorreta = document.getElementById("respostaCorreta");
const imagemExercicio = document.getElementById("imagemExercicio");
const previaImagemExercicio = document.getElementById("previaImagemExercicio");
const btnRemoverImagemExercicio = document.getElementById("btnRemoverImagemExercicio");
const erroExercicio = document.getElementById("erroExercicio");

const listaExercicios = document.getElementById("listaExercicios");

const camposAlternativas = document.getElementById("camposAlternativas");

const alternativasVerdadeiroFalso = document.getElementById("alternativasVerdadeiroFalso");

const campoGabarito = document.getElementById("campoGabarito");

const modalExcluirExercicio = document.getElementById("modalExcluirExercicio");
const cancelarExcluirExercicio = document.getElementById("cancelarExcluirExercicio");
const confirmarExcluirExercicio = document.getElementById("confirmarExcluirExercicio");

const tituloFormularioExercicio = document.getElementById("tituloFormularioExercicio");

const previaArquivoConteudo = document.getElementById("previaArquivoConteudo");
const removerArquivoConteudo = document.getElementById("removerArquivoConteudo");

const textoImportante = document.getElementById("textoImportante");

let arquivoConteudoAtual = null;

let tarefaParaApagar = null;
let materiaDaTarefaParaApagar = null;

let materiaAtual = null;
let anotacaoAtual = null;
let anotacaoParaApagar = null;

let materiaParaApagar = null;

let tarefaEmEdicao = null;
let exercicioEmEdicao = null;
let conteudoEmEdicao = null;
let arquivoAntigoConteudo = null;

let exercicioParaExcluir = null;

let imagemExercicioAtual = null;

let removerImagemExercicio = false;

let conteudoParaExcluir = null;

let temporizadorAnotacao;
let salvandoConteudo = false;
let salvandoExercicio = false;
let salvandoTarefa = false;
let salvandoExclusaoConta = false;

// Carregar texto da caixa Importante
async function carregarTextoImportante() {

    const { data: dadosUsuario, error: erroUsuario } =
        await clienteSupabase.auth.getUser();

    if (erroUsuario || !dadosUsuario.user) return;

    const { data, error } = await clienteSupabase
        .from("importantes")
        .select("texto")
        .eq("user_id", dadosUsuario.user.id)
        .maybeSingle();

    if (error) {
        console.error("Erro ao carregar texto importante:", error);
        return;
    }

    textoImportante.value = data ? data.texto : "";
}

// Salvar texto da caixa Importante
async function salvarTextoImportante() {

    const { data: dadosUsuario, error: erroUsuario } =
        await clienteSupabase.auth.getUser();

    if (erroUsuario || !dadosUsuario.user) return;

    const { error } = await clienteSupabase
        .from("importantes")
        .upsert({
            user_id: dadosUsuario.user.id,
            texto: textoImportante.value,
            updated_at: new Date().toISOString()
        }, {
            onConflict: "user_id"
        });

    if (error) {
        console.error("Erro ao salvar texto importante:", error);
    }
}

// Salvamento automático da caixa Importante

let temporizadorImportante;

textoImportante.addEventListener("input", function () {

    clearTimeout(temporizadorImportante);

    temporizadorImportante = setTimeout(function () {
        salvarTextoImportante();
    }, 1000);

});

function agendarSalvamentoAnotacao() {

    clearTimeout(temporizadorAnotacao);

    temporizadorAnotacao = setTimeout(function () {
        salvarCamposAtuais();
    }, 1000);

}

arquivoConteudo.addEventListener("change", function () {
    const arquivo = arquivoConteudo.files[0];

    if (!arquivo) return;

    ocultarErroConteudo();

    if (tipoConteudo.value === "pdf" && arquivo.type !== "application/pdf") {
        arquivoConteudo.value = "";
        previaArquivoConteudo.innerHTML = "";
        previaArquivoConteudo.style.display = "none";
        removerArquivoConteudo.style.display = "none";

        mostrarErroConteudo("O arquivo selecionado não é um PDF. Escolha um arquivo PDF.");
        return;
    }

    if (tipoConteudo.value === "imagem" && !arquivo.type.startsWith("image/")) {
        arquivoConteudo.value = "";
        previaArquivoConteudo.innerHTML = "";
        previaArquivoConteudo.style.display = "none";
        removerArquivoConteudo.style.display = "none";

        mostrarErroConteudo("O arquivo selecionado não é uma imagem. Escolha um arquivo de imagem.");
        return;
    }

    arquivoConteudoAtual = arquivo;

    const url = URL.createObjectURL(arquivo);

    previaArquivoConteudo.innerHTML = "";

    if (arquivo.type.startsWith("image/")) {
        const imagem = document.createElement("img");
        imagem.src = url;

        previaArquivoConteudo.appendChild(imagem);
    } else if (arquivo.type === "application/pdf") {
        const pdf = document.createElement("iframe");
        pdf.src = url;

        previaArquivoConteudo.appendChild(pdf);
    }

    previaArquivoConteudo.style.display = "block";
    removerArquivoConteudo.style.display = "inline-block";
});

removerArquivoConteudo.addEventListener("click", function () {
    arquivoConteudo.value = "";
    arquivoConteudoAtual = null;

    if (conteudoEmEdicao) {
        conteudoEmEdicao.arquivo_url = null;
        conteudoEmEdicao.arquivo = null;
    }

    previaArquivoConteudo.innerHTML = "";
    previaArquivoConteudo.style.display = "none";

    removerArquivoConteudo.style.display = "none";
});

function mostrarErroConteudo(mensagem) {
    erroConteudo.textContent = mensagem;
    erroConteudo.classList.add("visivel");
}

function ocultarErroConteudo() {
    erroConteudo.textContent = "";
    erroConteudo.classList.remove("visivel");
}

nomeConteudo.addEventListener("input", ocultarErroConteudo);
tipoConteudo.addEventListener("change", ocultarErroConteudo);
linkConteudo.addEventListener("input", ocultarErroConteudo);


botaoNovoConteudo.addEventListener("click", function () {
    formularioConteudo.style.display = "flex";

    tipoConteudo.value = "";
    tipoConteudo.dispatchEvent(new Event("change"));
    atualizarSeletorTipoConteudo();
    seletorTipoConteudo.classList.remove("aberto");

    arquivoConteudo.value = "";
    arquivoConteudoAtual = null;

    previaArquivoConteudo.innerHTML = "";
    previaArquivoConteudo.style.display = "none";

    removerArquivoConteudo.style.display = "none";

    tituloFormularioConteudo.textContent = "Adicionar conteúdo";
    nomeConteudo.focus();
});

cancelarConteudo.addEventListener("click", function () {
    ocultarErroConteudo();
    formularioConteudo.style.display = "none";

    nomeConteudo.value = "";
    descricaoConteudo.value = "";
    tipoConteudo.value = "";
    arquivoConteudo.value = "";
    linkConteudo.value = "";
});

fecharVisualizacaoConteudo.addEventListener("click", function () {

    modalVisualizarConteudo.style.display = "none";
    visualizacaoConteudo.innerHTML = "";

});

cancelarExcluirConteudo.addEventListener("click", function () {

    modalExcluirConteudo.style.display = "none";

    conteudoParaExcluir = null;

});

confirmarExcluirConteudo.addEventListener("click", async function () {

    if (conteudoParaExcluir) {
        const { error } = await clienteSupabase
            .from("conteudos")
            .delete()
            .eq("id", conteudoParaExcluir.id);

        if (error) {
            console.error("Erro ao excluir conteúdo:", error);
            alert("Não foi possível excluir o conteúdo.");
            return;
        }

        if (conteudoParaExcluir.arquivo_url) {

            const { error: erroArquivo } = await clienteSupabase.storage
                .from("arquivos-write-study")
                .remove([conteudoParaExcluir.arquivo_url]);

            if (erroArquivo) {
                console.error("Erro ao excluir arquivo:", erroArquivo);
            }

        }

        materiaAtual.conteudos = materiaAtual.conteudos.filter(function (conteudo) {
            return conteudo.id !== conteudoParaExcluir.id;
        });

        renderizarConteudos();

        conteudoParaExcluir = null;

    }

    modalExcluirConteudo.style.display = "none";

});

// SELETOR PERSONALIZADO - TIPO DE CONTEÚDO
botaoTipoConteudo.addEventListener("click", function () {
    seletorTipoConteudo.classList.toggle("aberto");
});

function atualizarSeletorTipoConteudo() {
    const opcaoSelecionada = tipoConteudo.options[tipoConteudo.selectedIndex];

    textoTipoConteudo.textContent = opcaoSelecionada.textContent;

    opcoesTipoConteudo.querySelectorAll("button").forEach(function (botao) {
        botao.classList.toggle(
            "selecionado",
            botao.dataset.valor === tipoConteudo.value
        );
    });
}

opcoesTipoConteudo.querySelectorAll("button").forEach(function (botao) {
    botao.addEventListener("click", function () {
        tipoConteudo.value = botao.dataset.valor;

        tipoConteudo.dispatchEvent(new Event("change"));

        atualizarSeletorTipoConteudo();
        seletorTipoConteudo.classList.remove("aberto");
    });
});

tipoConteudo.addEventListener("change", atualizarSeletorTipoConteudo);

document.addEventListener("click", function (evento) {
    if (!seletorTipoConteudo.contains(evento.target)) {
        seletorTipoConteudo.classList.remove("aberto");
    }
});

atualizarSeletorTipoConteudo();

tipoConteudo.addEventListener("change", function () {

    campoArquivoConteudo.style.display = "none";
    campoLinkConteudo.style.display = "none";

    if (tipoConteudo.value === "pdf" || tipoConteudo.value === "imagem") {
        campoArquivoConteudo.style.display = "block";
    }

    if (tipoConteudo.value === "youtube" || tipoConteudo.value === "link") {
        campoLinkConteudo.style.display = "flex";
    }

});

async function validarArquivoReal(arquivo, tipo) {
    const bytes = new Uint8Array(
        await arquivo.slice(0, 12).arrayBuffer()
    );

    if (tipo === "pdf") {
        return (
            bytes[0] === 0x25 &&
            bytes[1] === 0x50 &&
            bytes[2] === 0x44 &&
            bytes[3] === 0x46 &&
            bytes[4] === 0x2D
        );
    }

    if (tipo === "imagem") {
        const png =
            bytes[0] === 0x89 &&
            bytes[1] === 0x50 &&
            bytes[2] === 0x4E &&
            bytes[3] === 0x47;

        const jpeg =
            bytes[0] === 0xFF &&
            bytes[1] === 0xD8 &&
            bytes[2] === 0xFF;

        const gif =
            bytes[0] === 0x47 &&
            bytes[1] === 0x49 &&
            bytes[2] === 0x46;

        const webp =
            String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
            String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";

        return png || jpeg || gif || webp;
    }

    return false;
}

salvarConteudo.addEventListener("click", async function () {

    if (salvandoConteudo) return;

    salvandoConteudo = true;
    salvarConteudo.disabled = true;

    try {

        const nome = nomeConteudo.value.trim();
        const descricao = descricaoConteudo.value.trim();
        const tipo = tipoConteudo.value;

        if (!nome) {
            mostrarErroConteudo("Informe o título do conteúdo.");
            nomeConteudo.focus();
            return;
        }

        if (!tipo) {
            mostrarErroConteudo("Selecione o tipo de material.");
            tipoConteudo.focus();
            return;
        }

        if (
            (tipo === "pdf" || tipo === "imagem") &&
            !arquivoConteudo.files[0] &&
            !(conteudoEmEdicao && conteudoEmEdicao.tipo === tipo && conteudoEmEdicao.arquivo)
        ) {
            mostrarErroConteudo("Selecione um arquivo.");
            arquivoConteudo.focus();
            return;
        }

        const arquivoSelecionado = arquivoConteudo.files[0];

        if (arquivoSelecionado) {
            const arquivoValido = await validarArquivoReal(
                arquivoSelecionado,
                tipo
            );

            if (!arquivoValido) {
                mostrarErroConteudo(
                    tipo === "pdf"
                        ? "O arquivo selecionado não é um PDF válido."
                        : "O arquivo selecionado não é uma imagem válida."
                );

                return;
            }
        }

        if ((tipo === "youtube" || tipo === "link") && !linkConteudo.value.trim()) {
            mostrarErroConteudo("Informe o endereço do link.");
            linkConteudo.focus();
            return;
        }

        const novoConteudo = {
            id: conteudoEmEdicao ? conteudoEmEdicao.id : Date.now(),
            nome: nome,
            descricao: descricao,
            tipo: tipo,
            arquivo: conteudoEmEdicao && conteudoEmEdicao.tipo === tipo
                ? conteudoEmEdicao.arquivo
                : null,

            arquivo_url: conteudoEmEdicao && conteudoEmEdicao.tipo === tipo
                ? conteudoEmEdicao.arquivo_url
                : null,

            link: linkConteudo.value.trim()
        };

        const arquivoAntigo = conteudoEmEdicao
            ? arquivoAntigoConteudo
            : null;

        async function concluirSalvamentoConteudo() {

            if (conteudoEmEdicao) {

                const { error } = await clienteSupabase
                    .from("conteudos")
                    .update({
                        nome: novoConteudo.nome,
                        descricao: novoConteudo.descricao,
                        tipo: novoConteudo.tipo,
                        arquivo_url: novoConteudo.arquivo_url,
                        link: novoConteudo.link
                    })
                    .eq("id", conteudoEmEdicao.id);

                if (error) {
                    console.error("Erro ao atualizar conteúdo:", error);
                    mostrarErroConteudo("Não foi possível atualizar o conteúdo.");
                    return;
                }

                const indice = materiaAtual.conteudos.findIndex(function (item) {
                    return item.id === conteudoEmEdicao.id;
                });

                if (!novoConteudo.arquivo_url) {
                    novoConteudo.arquivo = null;
                }

                if (indice !== -1) {
                    materiaAtual.conteudos[indice] = novoConteudo;
                }

                if (
                    arquivoAntigo &&
                    arquivoAntigo !== novoConteudo.arquivo_url
                ) {

                    const { error: erroArquivoAntigo } = await clienteSupabase.storage
                        .from("arquivos-write-study")
                        .remove([arquivoAntigo]);

                    if (erroArquivoAntigo) {
                        console.error("Erro ao remover arquivo antigo:", erroArquivoAntigo);
                    }

                }

            } else {

                const { data, error } = await clienteSupabase
                    .from("conteudos")
                    .insert({
                        materia_id: materiaAtual.dataset.id,
                        nome: novoConteudo.nome,
                        descricao: novoConteudo.descricao,
                        tipo: novoConteudo.tipo,
                        arquivo_url: novoConteudo.arquivo_url,
                        link: novoConteudo.link
                    })
                    .select()
                    .single();

                if (error) {
                    console.error("Erro ao salvar conteúdo:", error);
                    mostrarErroConteudo("Não foi possível salvar o conteúdo.");
                    return;
                }

                novoConteudo.id = data.id;
                materiaAtual.conteudos.push(novoConteudo);

            }

            conteudoEmEdicao = null;


            renderizarConteudos();

            ocultarErroConteudo();
            formularioConteudo.style.display = "none";

            nomeConteudo.value = "";
            descricaoConteudo.value = "";
            tipoConteudo.value = "";
            arquivoConteudo.value = "";
            linkConteudo.value = "";

            campoArquivoConteudo.style.display = "none";
            campoLinkConteudo.style.display = "none";

            tituloFormularioConteudo.textContent = "Adicionar conteúdo";
            salvarConteudo.textContent = "Salvar conteúdo";

        }

        if (tipo === "pdf" || tipo === "imagem") {

            const arquivo = arquivoConteudo.files[0];

            if (arquivo) {

                try {

                    novoConteudo.arquivo_url = await enviarArquivoConteudo(arquivo);

                    const { data, error } = await clienteSupabase.storage
                        .from("arquivos-write-study")
                        .createSignedUrl(novoConteudo.arquivo_url, 3600);

                    if (error) {
                        throw error;
                    }

                    novoConteudo.arquivo = data.signedUrl;

                } catch (erro) {

                    console.error("Erro ao enviar arquivo:", erro);
                    mostrarErroConteudo("Não foi possível enviar o arquivo.");
                    return;

                }

                await concluirSalvamentoConteudo();

            } else {

                await concluirSalvamentoConteudo();

            }

        }

        if (tipo === "youtube" || tipo === "link") {

            await concluirSalvamentoConteudo();

        }

    } finally {
        salvandoConteudo = false;
        salvarConteudo.disabled = false;
    }

});

// Abre o campo para adicionar uma matéria
botao.addEventListener("click", function () {
    campo.style.display = "block";
    input.focus();
});


// Cria uma nova matéria
async function criarMateria(nomeMateria = null, idMateria = null) {
    const materia = nomeMateria || input.value.trim();

    let user = null;

    if (!nomeMateria) {
        const { data, error: erroUsuario } =
            await clienteSupabase.auth.getUser();

        if (erroUsuario || !data.user) {
            alert("Não foi possível identificar sua conta.");
            return;
        }

        user = data.user;
    }

    if (materia === "") {
        input.focus();
        return;
    }

    const novaMateria = document.createElement("div");
    novaMateria.classList.add("materia-item");

    novaMateria.anotacoes = [];
    novaMateria.exercicios = [];
    novaMateria.conteudos = [];

    const cabecalho = document.createElement("div");
    cabecalho.classList.add("cabecalho-materia");

    // Três pontinhos à esquerda
    const seta = document.createElement("span");
    seta.classList.add("seta-materia");
    seta.textContent = "⋯";

    // Nome da matéria
    const nome = document.createElement("span");
    nome.classList.add("nome-materia");
    nome.textContent = materia;

    // Botão de apagar
    const apagar = document.createElement("button");
    apagar.classList.add("apagar-materia");
    apagar.textContent = "×";
    apagar.type = "button";
    apagar.setAttribute("aria-label", "Apagar matéria");

    // Submenu da matéria
    const submenu = document.createElement("div");
    submenu.classList.add("submenu-materia");

    const opcoes = [
        "✏️ Renomear matéria",
        "Anotações",
        "Atividades",
        "Conteúdo"
    ];


    opcoes.forEach(function (opcao) {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.classList.add("opcao-materia");

        if (opcao === "✏️ Renomear matéria") {
            botaoOpcao.classList.add("opcao-renomear-materia");
        }

        botaoOpcao.textContent = opcao;
        botaoOpcao.type = "button";

        botaoOpcao.addEventListener("click", async function (evento) {
            evento.stopPropagation();


            if (opcao === "✏️ Renomear matéria") {
                submenu.classList.remove("aberto");

                // Evita criar mais de um editor
                if (novaMateria.querySelector(".editor-renomear-materia")) {
                    return;
                }

                const editor = document.createElement("div");
                editor.classList.add("editor-renomear-materia");

                // Cabeçalho do editor
                const cabecalhoEditor = document.createElement("div");
                cabecalhoEditor.classList.add("cabecalho-editor-materia");

                const icone = document.createElement("span");
                icone.classList.add("icone-editor-materia");
                icone.textContent = "✏";

                const textos = document.createElement("div");
                textos.classList.add("textos-editor-materia");

                const tituloEditor = document.createElement("strong");
                tituloEditor.textContent = "Renomear matéria";

                const descricaoEditor = document.createElement("small");
                descricaoEditor.textContent = "Escolha um novo nome";

                textos.appendChild(tituloEditor);
                textos.appendChild(descricaoEditor);

                cabecalhoEditor.appendChild(icone);
                cabecalhoEditor.appendChild(textos);

                // Campo do novo nome
                const campoNome = document.createElement("input");
                campoNome.type = "text";
                campoNome.classList.add("campo-renomear-materia");
                campoNome.value = nome.textContent;
                campoNome.placeholder = "Nome da matéria";

                // Botões
                const botoesEditor = document.createElement("div");
                botoesEditor.classList.add("botoes-editor-materia");

                const salvar = document.createElement("button");
                salvar.type = "button";
                salvar.classList.add("salvar-nome-materia");
                salvar.textContent = "Salvar";

                const cancelarEdicao = document.createElement("button");
                cancelarEdicao.type = "button";
                cancelarEdicao.classList.add("cancelar-nome-materia");
                cancelarEdicao.textContent = "Cancelar";

                async function salvarNome() {
                    const novoNome = campoNome.value.trim();

                    if (novoNome === "") {
                        campoNome.focus();
                        return;
                    }

                    // Atualiza o nome no Supabase
                    const { error } = await clienteSupabase
                        .from("materias")
                        .update({ nome: novoNome })
                        .eq("id", novaMateria.dataset.id);

                    if (error) {
                        alert("Não foi possível renomear a matéria.");
                        return;
                    }

                    nome.textContent = novoNome;

                    areaAnotacoes.style.display = "none";
                    areaAtividades.style.display = "none";
                    areaConteudo.style.display = "none";
                    inicio.style.display = "flex";

                    materiaAtual = null;
                    anotacaoAtual = null;

                    listaAnotacoes.innerHTML = "";
                    listaTarefas.innerHTML = "";
                    listaExercicios.innerHTML = "";
                    listaConteudos.innerHTML = "";

                    mostrarEditorVazio();

                    editor.remove();
                }

                salvar.addEventListener("click", salvarNome);

                cancelarEdicao.addEventListener("click", function () {
                    editor.remove();
                });

                campoNome.addEventListener("keydown", function (evento) {
                    if (evento.key === "Enter") {
                        salvarNome();
                    }

                    if (evento.key === "Escape") {
                        editor.remove();
                    }
                });

                // Montagem do editor
                botoesEditor.appendChild(cancelarEdicao);
                botoesEditor.appendChild(salvar);

                editor.appendChild(cabecalhoEditor);
                editor.appendChild(campoNome);
                editor.appendChild(botoesEditor);

                novaMateria.insertBefore(editor, submenu);

                campoNome.focus();
                campoNome.select();

                return;
            }


            if (opcao === "Anotações") {

                areaAtividades.style.display = "none";
                // Se clicar novamente na mesma matéria, fecha as anotações
                if (
                    materiaAtual === novaMateria &&
                    areaAnotacoes.style.display === "flex"
                ) {
                    areaAnotacoes.style.display = "none";
                    areaAtividades.style.display = "none";
                    areaConteudo.style.display = "none";
                    inicio.style.display = "flex";

                    materiaAtual = null;
                    anotacaoAtual = null;

                    listaAnotacoes.innerHTML = "";
                    mostrarEditorVazio();

                    return;
                }

                await salvarCamposAtuais();

                // Abre as anotações da matéria selecionada
                inicio.style.display = "none";
                areaConteudo.style.display = "none";
                areaAtividades.style.display = "none";
                areaAnotacoes.style.display = "flex";
                materiaAtual = novaMateria;
                anotacaoAtual = null;

                await carregarAnotacoes();
            }


            if (opcao === "Atividades") {
                // Se clicar novamente na mesma matéria, fecha as atividades
                if (
                    materiaAtual === novaMateria &&
                    areaAtividades.style.display === "flex"
                ) {
                    areaAtividades.style.display = "none";
                    inicio.style.display = "flex";
                    materiaAtual = null;
                    return;
                }

                // Abre as atividades da matéria selecionada
                inicio.style.display = "none";
                areaConteudo.style.display = "none";
                areaAnotacoes.style.display = "none";
                areaAtividades.style.display = "flex";

                materiaAtual = novaMateria;
                anotacaoAtual = null;

                listaTarefas.innerHTML = "";
                await carregarTarefas();
                await carregarExercicios();

                listaExercicios.innerHTML = "";
                renderizarExercicios();

                listaAnotacoes.innerHTML = "";
                mostrarEditorVazio();
            }

            if (opcao === "Conteúdo") {

                // Se clicar novamente na mesma matéria, fecha os conteúdos
                if (
                    materiaAtual === novaMateria &&
                    areaConteudo.style.display === "flex"
                ) {
                    areaConteudo.style.display = "none";
                    inicio.style.display = "flex";
                    materiaAtual = null;
                    return;
                }

                // Abre os conteúdos da matéria selecionada
                inicio.style.display = "none";
                areaAnotacoes.style.display = "none";
                areaAtividades.style.display = "none";
                areaConteudo.style.display = "flex";

                materiaAtual = novaMateria;
                anotacaoAtual = null;
                listaConteudos.innerHTML = "";
                await carregarConteudos();

                listaAnotacoes.innerHTML = "";
                mostrarEditorVazio();
            }


        });

        submenu.appendChild(botaoOpcao);
    });

    // Ordem dos elementos: pontinhos, nome e X
    cabecalho.appendChild(seta);
    cabecalho.appendChild(nome);
    cabecalho.appendChild(apagar);

    novaMateria.appendChild(cabecalho);
    novaMateria.appendChild(submenu);

    // Abre ou fecha o submenu ao clicar no cabeçalho

    cabecalho.addEventListener("click", function () {

        // Impede a interação enquanto a matéria estiver sendo renomeada
        if (document.querySelector(".editor-renomear-materia")) {
            return;
        }

        const estavaAberto = submenu.classList.contains("aberto");

        // Fecha os submenus de todas as matérias
        document.querySelectorAll(".submenu-materia").forEach(function (menu) {
            menu.classList.remove("aberto");
        });

        // Se estava fechado, abre somente este
        if (!estavaAberto) {
            submenu.classList.add("aberto");
        }

        // Sempre que clicar na matéria, fecha a área de anotações
        areaAnotacoes.style.display = "none";
        inicio.style.display = "flex";

        // Sempre que clicar na matéria, fecha a área de atividades
        areaAnotacoes.style.display = "none";
        areaAtividades.style.display = "none";
        areaConteudo.style.display = "none";

        materiaAtual = null;
        anotacaoAtual = null;

        listaAnotacoes.innerHTML = "";
        mostrarEditorVazio();
    });


    // Abre a confirmação antes de apagar
    apagar.addEventListener("click", function (evento) {
        evento.stopPropagation();

        materiaParaApagar = novaMateria;
        modal.style.display = "flex";
    });

    // Salva a matéria no Supabase somente se for nova
    if (!idMateria) {

        const { data, error } = await clienteSupabase
            .from("materias")
            .insert({
                user_id: user.id,
                nome: materia
            })
            .select()
            .single();

        if (error) {
            alert("Erro ao salvar matéria: " + error.message);
            return;
        }

        idMateria = data.id;
    }

    novaMateria.dataset.id = idMateria;

    // Adiciona a matéria à lista
    lista.appendChild(novaMateria);

    // Limpa e fecha o campo de criação
    input.value = "";
    campo.style.display = "none";
}

// Carrega as matérias salvas no Supabase
async function carregarMaterias() {
    lista.innerHTML = "";

    const { data: dadosUsuario, error: erroUsuario } =
        await clienteSupabase.auth.getUser();

    if (erroUsuario || !dadosUsuario.user) {
        console.error("Não foi possível identificar o usuário.");
        return;
    }

    const { data, error } = await clienteSupabase
        .from("materias")
        .select("*")
        .eq("user_id", dadosUsuario.user.id)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Erro ao carregar matérias:", error);
        return;
    }

    data.forEach(function (materia) {
        criarMateria(materia.nome, materia.id);
    });
}

// Confirma a criação pelo botão Adicionar
confirmarMateria.addEventListener("click", function () {
    criarMateria();
});


// Também permite criar a matéria apertando Enter
input.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        criarMateria();
    }

    // Cancela a edição ao apertar Escape
    if (evento.key === "Escape") {
        campo.style.display = "none";
        input.value = "";
    }
});


// Cancela a criação pelo botão Cancelar
cancelar.addEventListener("click", function () {
    campo.style.display = "none";
    input.value = "";
});


// Cancela a exclusão e mantém a matéria
cancelarApagar.addEventListener("click", function () {
    modal.style.display = "none";
    materiaParaApagar = null;
});



// Confirma a exclusão da matéria
confirmarApagar.addEventListener("click", async function () {
    if (materiaParaApagar) {

        // Verifica se a matéria apagada está aberta nas anotações
        if (materiaParaApagar === materiaAtual) {
            areaAnotacoes.style.display = "none";
            inicio.style.display = "flex";
            areaAtividades.style.display = "none";
            document.getElementById("areaConteudo").style.display = "none";

            materiaAtual = null;
            anotacaoAtual = null;

            listaAnotacoes.innerHTML = "";
            mostrarEditorVazio();
        }

        // Exclui a matéria do Supabase
        const { error } = await clienteSupabase
            .from("materias")
            .delete()
            .eq("id", materiaParaApagar.dataset.id);

        if (error) {
            alert("Não foi possível excluir a matéria.");
            return;
        }

        // Remove a matéria da lista
        materiaParaApagar.remove();
    }

    modal.style.display = "none";
    materiaParaApagar = null;
});



function mostrarEditorVazio() {
    editorAnotacao.innerHTML = `
        <p class="mensagem-vazia">
            Selecione uma anotação ou crie uma nova.
        </p>
    `;
}

async function carregarAnotacoes() {

    if (!materiaAtual) return;

    const { data, error } = await clienteSupabase
        .from("anotacoes")
        .select("*")
        .eq("materia_id", materiaAtual.dataset.id)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Erro ao carregar anotações:", error);
        return;
    }

    materiaAtual.anotacoes = data.map(function (anotacao) {
        return {
            id: anotacao.id,
            titulo: anotacao.titulo,
            texto: anotacao.texto
        };
    });

    anotacaoAtual = null;
    renderizarAnotacoes();
    mostrarEditorVazio();
}

function renderizarAnotacoes() {
    listaAnotacoes.innerHTML = "";

    if (!materiaAtual) return;

    materiaAtual.anotacoes.forEach(function (anotacao) {
        const item = document.createElement("div");
        item.classList.add("item-anotacao");

        if (anotacao === anotacaoAtual) {
            item.classList.add("selecionada");
        }

        const selecionar = document.createElement("button");
        selecionar.classList.add("selecionar-anotacao");
        selecionar.textContent = anotacao.titulo || "Nova anotação";
        selecionar.type = "button";

        selecionar.addEventListener("click", async function () {
            await salvarCamposAtuais();
            anotacaoAtual = anotacao;
            renderizarAnotacoes();
            abrirEditor();
        });

        const apagar = document.createElement("button");
        apagar.classList.add("apagar-anotacao");
        apagar.textContent = "×";
        apagar.type = "button";
        apagar.setAttribute("aria-label", "Apagar anotação");

        apagar.addEventListener("click", function () {
            anotacaoParaApagar = anotacao;
            modalExcluirAnotacao.style.display = "flex";
        });

        item.appendChild(selecionar);
        item.appendChild(apagar);
        listaAnotacoes.appendChild(item);
    });
}

async function criarAnotacao() {
    if (!materiaAtual) return;

    // Salva a nova anotação no Supabase
    const { data, error } = await clienteSupabase
        .from("anotacoes")
        .insert({
            materia_id: materiaAtual.dataset.id,
            titulo: "",
            texto: ""
        })
        .select()
        .single();

    if (error) {
        alert("Erro ao criar anotação: " + error.message);
        return;
    }

    const nova = {
        titulo: "",
        texto: "",
        id: data.id
    };

    materiaAtual.anotacoes.push(nova);
    anotacaoAtual = nova;

    renderizarAnotacoes();
    abrirEditor();

    document.getElementById("tituloAnotacaoEditor").focus();
}


function abrirEditor() {

    clearTimeout(temporizadorAnotacao);

    if (!anotacaoAtual) {
        mostrarEditorVazio();
        return;
    }

    editorAnotacao.innerHTML = "";

    // Campo do título
    const titulo = document.createElement("input");
    titulo.type = "text";
    titulo.id = "tituloAnotacaoEditor";
    titulo.classList.add("titulo-anotacao-editor");
    titulo.placeholder = "Título da anotação...";
    titulo.value = anotacaoAtual.titulo;

    // Barra de ferramentas
    const ferramentas = document.createElement("div");
    ferramentas.classList.add("barra-ferramentas");

    const botoes = [
        { comando: "bold", simbolo: "B", titulo: "Negrito" },
        { comando: "italic", simbolo: "I", titulo: "Itálico" },
        { comando: "underline", simbolo: "U", titulo: "Sublinhado" },
        { comando: "highlight", simbolo: "🖍️", titulo: "Marca-texto amarelo" },
        { comando: "removeFormat", imagem: "borracha.png", titulo: "Limpar formatação" }
    ];

    // Área de escrita formatada
    const texto = document.createElement("div");
    texto.id = "conteudoAnotacaoEditor";
    texto.classList.add("conteudo-anotacao-editor");
    texto.contentEditable = "true";
    texto.setAttribute("role", "textbox");
    texto.setAttribute("aria-label", "Conteúdo da anotação");
    texto.setAttribute("data-placeholder", "Comece a escrever aqui...");
    texto.innerHTML = anotacaoAtual.texto;
    let marcaTextoAtivo = false;

    botoes.forEach(function (item) {
        const botaoFerramenta = document.createElement("button");
        botaoFerramenta.type = "button";
        botaoFerramenta.classList.add("botao-ferramenta");
        if (item.imagem) {
            const imagem = document.createElement("img");
            imagem.src = item.imagem;

            imagem.style.display = "block";
            imagem.alt = item.titulo;
            imagem.style.width = "18px";
            imagem.style.height = "18px";
            imagem.style.objectFit = "contain";

            botaoFerramenta.appendChild(imagem);
        } else {
            botaoFerramenta.textContent = item.simbolo;
        }
        botaoFerramenta.title = item.titulo;
        botaoFerramenta.setAttribute("aria-label", item.titulo);

        if (item.comando === "bold") {
            botaoFerramenta.style.fontWeight = "bold";
        }

        if (item.comando === "italic") {
            botaoFerramenta.style.fontStyle = "italic";
        }

        if (item.comando === "underline") {
            botaoFerramenta.style.textDecoration = "underline";
        }

        botaoFerramenta.addEventListener("mousedown", function (evento) {
            evento.preventDefault();
        });


        botaoFerramenta.addEventListener("click", function () {
            texto.focus();

            if (item.comando === "removeFormat") {
                document.execCommand("removeFormat", false, null);
                anotacaoAtual.texto = texto.innerHTML;
                return;
            }

            if (item.comando === "highlight") {
                const selecao = window.getSelection();

                if (!selecao || selecao.isCollapsed) {
                    return;
                }

                const intervalo = selecao.getRangeAt(0);
                const elemento = intervalo.commonAncestorContainer;
                const no = elemento.nodeType === Node.TEXT_NODE
                    ? elemento.parentElement
                    : elemento;

                const destaque = no.closest(
                    'span[style*="background-color"]'
                );

                if (
                    destaque &&
                    texto.contains(destaque) &&
                    destaque.style.backgroundColor === "rgb(255, 240, 156)"
                ) {
                    document.execCommand("hiliteColor", false, "transparent");
                } else {
                    document.execCommand("hiliteColor", false, "#fff09c");
                }

                anotacaoAtual.texto = texto.innerHTML;
            } else {
                document.execCommand(item.comando, false, null);
                anotacaoAtual.texto = texto.innerHTML;
            }
        });


        ferramentas.appendChild(botaoFerramenta);
    });

    titulo.addEventListener("input", function () {
        anotacaoAtual.titulo = titulo.value;
        atualizarTituloNaLista();
        agendarSalvamentoAnotacao();
    });

    texto.addEventListener("input", function () {
        anotacaoAtual.texto = texto.innerHTML;
        agendarSalvamentoAnotacao();
    });

    editorAnotacao.appendChild(titulo);
    editorAnotacao.appendChild(ferramentas);
    editorAnotacao.appendChild(texto);
}


async function salvarCamposAtuais() {
    if (!anotacaoAtual) return;

    const titulo = document.getElementById("tituloAnotacaoEditor");
    const texto = document.getElementById("conteudoAnotacaoEditor");

    if (titulo) anotacaoAtual.titulo = titulo.value;
    if (texto) anotacaoAtual.texto = texto.innerHTML;

    // Atualiza a anotação no Supabase
    const { error } = await clienteSupabase
        .from("anotacoes")
        .update({
            titulo: anotacaoAtual.titulo,
            texto: anotacaoAtual.texto
        })
        .eq("id", anotacaoAtual.id);

    if (error) {
        console.error("Erro ao atualizar anotação:", error);
    }
}


function atualizarTituloNaLista() {
    renderizarAnotacoes();
}

botaoNovaAnotacao.addEventListener("click", async function () {
    await salvarCamposAtuais();
    await criarAnotacao();
});

cancelarExcluirAnotacao.addEventListener("click", function () {
    modalExcluirAnotacao.style.display = "none";
    anotacaoParaApagar = null;
});

confirmarExcluirAnotacao.addEventListener("click", async function () {
    if (materiaAtual && anotacaoParaApagar) {
        const { error } = await clienteSupabase
            .from("anotacoes")
            .delete()
            .eq("id", anotacaoParaApagar.id);

        if (error) {
            alert("Não foi possível excluir a anotação.");
            return;
        }

        materiaAtual.anotacoes =
            materiaAtual.anotacoes.filter(function (anotacao) {
                return anotacao !== anotacaoParaApagar;
            });

        if (anotacaoAtual === anotacaoParaApagar) {
            anotacaoAtual = null;
            mostrarEditorVazio();
        }

        renderizarAnotacoes();
    }

    modalExcluirAnotacao.style.display = "none";
    anotacaoParaApagar = null;
});


botaoNovaTarefa.addEventListener("click", function () {
    tarefaEmEdicao = null;
    tituloFormularioTarefa.textContent = "Nova tarefa";

    formularioTarefa.style.display = "flex";
    tituloTarefa.focus();
});


cancelarTarefa.addEventListener("click", function () {
    formularioTarefa.style.display = "none";

    tituloTarefa.value = "";
    descricaoTarefa.value = "";
    prazoTarefa.value = "";

    tarefaEmEdicao = null;
    salvarTarefa.textContent = "Salvar tarefa";
});




salvarTarefa.addEventListener("click", async function () {

    if (salvandoTarefa) return;

    salvandoTarefa = true;
    salvarTarefa.disabled = true;

    try {

        const titulo = tituloTarefa.value.trim();
        const descricao = descricaoTarefa.value.trim();
        const prazo = prazoTarefa.value;

        if (titulo === "") {
            erroTarefa.classList.add("visivel");
            tituloTarefa.focus();
            return;
        }

        erroTarefa.classList.remove("visivel");

        if (!materiaAtual) {
            erroTarefa.textContent = "Selecione uma matéria antes de salvar a tarefa.";
            erroTarefa.classList.add("visivel");

            erroTarefa.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }

        if (tarefaEmEdicao) {
            // Atualiza a tarefa existente
            tarefaEmEdicao.titulo = titulo;
            tarefaEmEdicao.descricao = descricao;
            tarefaEmEdicao.prazo = prazo;

            const { error } = await clienteSupabase
                .from("tarefas")
                .update({
                    titulo: titulo,
                    descricao: descricao,
                    prazo: prazo || null
                })
                .eq("id", tarefaEmEdicao.id);

            if (error) {
                console.error("Erro ao atualizar tarefa:", error);
                alert("Não foi possível atualizar a tarefa.");
                return;
            }

        } else {
            // Cria uma nova tarefa no Supabase
            const { data, error } = await clienteSupabase
                .from("tarefas")
                .insert({
                    materia_id: materiaAtual.dataset.id,
                    titulo: titulo,
                    descricao: descricao,
                    prazo: prazo || null,
                    concluida: false
                })
                .select()
                .single();

            if (error) {
                console.error("Erro ao salvar tarefa:", error);
                alert("Não foi possível salvar a tarefa.");
                return;
            }

            if (!materiaAtual.tarefas) {
                materiaAtual.tarefas = [];
            }

            materiaAtual.tarefas.push({
                id: data.id,
                titulo: titulo,
                descricao: descricao,
                prazo: prazo,
                concluida: false
            });
        }

        tarefaEmEdicao = null;

        renderizarTarefas();

        formularioTarefa.style.display = "none";
        tituloTarefa.value = "";
        descricaoTarefa.value = "";
        prazoTarefa.value = "";


    } finally {
        salvandoTarefa = false;
        salvarTarefa.disabled = false;
    }
});

async function enviarArquivoConteudo(arquivo) {

    const { data: dadosUsuario, error: erroUsuario } =
        await clienteSupabase.auth.getUser();

    if (erroUsuario || !dadosUsuario.user) {
        throw new Error("Não foi possível identificar o usuário.");
    }

    const extensao = arquivo.name.split(".").pop();

    const caminho = `${dadosUsuario.user.id}/${materiaAtual.dataset.id}/${crypto.randomUUID()}.${extensao}`;

    const { error } = await clienteSupabase.storage
        .from("arquivos-write-study")
        .upload(caminho, arquivo);

    if (error) {
        throw error;
    }

    return caminho;
}

async function obterUrlArquivoConteudo(caminho) {

    if (!caminho) return null;

    const { data, error } = await clienteSupabase.storage
        .from("arquivos-write-study")
        .createSignedUrl(caminho, 3600);

    if (error) {
        console.error("Erro ao gerar URL do arquivo:", error);
        return null;
    }

    return data.signedUrl;
}

function renderizarConteudos() {

    listaConteudos.innerHTML = "";

    if (!materiaAtual) return;

    materiaAtual.conteudos.forEach(function (conteudo) {

        const cartao = document.createElement("div");
        cartao.classList.add("cartao-conteudo");

        const titulo = document.createElement("h3");
        titulo.textContent = conteudo.nome;

        const descricao = document.createElement("p");
        descricao.textContent = conteudo.descricao || "";

        const tipo = document.createElement("span");
        tipo.textContent = conteudo.tipo.toUpperCase();

        const previaConteudo = document.createElement("div");
        previaConteudo.classList.add("previa-conteudo");

        const visualizadorCard = document.createElement("div");
        visualizadorCard.classList.add("visualizador-card");
        visualizadorCard.style.display = "none";

        const botaoVisualizar = document.createElement("button");
        botaoVisualizar.textContent = "Visualizar";
        botaoVisualizar.classList.add("botao-visualizar-conteudo");

        previaConteudo.addEventListener("click", function () {
            botaoVisualizar.click();
        });

        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "✏️";
        botaoEditar.title = "Editar conteúdo";
        botaoEditar.setAttribute("aria-label", "Editar conteúdo");
        botaoEditar.classList.add("botao-editar-conteudo");

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "🗑️";
        botaoExcluir.title = "Excluir conteúdo";
        botaoExcluir.setAttribute("aria-label", "Excluir conteúdo");
        botaoExcluir.classList.add("botao-excluir-conteudo");

        if (conteudo.tipo === "imagem") {
            const imagem = document.createElement("img");
            imagem.src = conteudo.arquivo;
            imagem.alt = conteudo.nome;

            previaConteudo.appendChild(imagem);
        }

        if (conteudo.tipo === "pdf") {
            const pdf = document.createElement("iframe");
            pdf.src = conteudo.arquivo;
            pdf.title = conteudo.nome;

            previaConteudo.appendChild(pdf);
        }

        if (conteudo.tipo === "youtube") {
            const videoId = conteudo.link.match(
                /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/
            );

            if (videoId) {
                const miniatura = document.createElement("img");
                miniatura.src = "https://img.youtube.com/vi/" + videoId[1] + "/hqdefault.jpg";
                miniatura.alt = "Prévia do vídeo " + conteudo.nome;

                previaConteudo.appendChild(miniatura);
            }
        }

        botaoExcluir.addEventListener("click", function () {

            conteudoParaExcluir = conteudo;

            modalExcluirConteudo.style.display = "flex";

        });

        botaoEditar.addEventListener("click", function () {

            conteudoEmEdicao = { ...conteudo };
            arquivoAntigoConteudo = conteudo.arquivo_url;

            nomeConteudo.value = conteudo.nome;
            descricaoConteudo.value = conteudo.descricao;
            tipoConteudo.value = conteudo.tipo;
            atualizarSeletorTipoConteudo();
            linkConteudo.value = conteudo.link || "";

            arquivoConteudo.value = "";
            arquivoConteudoAtual = null;
            previaArquivoConteudo.innerHTML = "";
            previaArquivoConteudo.style.display = "none";
            removerArquivoConteudo.style.display = "none";

            tituloFormularioConteudo.textContent = "Editar conteúdo";
            salvarConteudo.textContent = "Salvar alterações";

            campoArquivoConteudo.style.display =
                (conteudo.tipo === "pdf" || conteudo.tipo === "imagem") ? "block" : "none";

            campoLinkConteudo.style.display =
                (conteudo.tipo === "youtube" || conteudo.tipo === "link") ? "flex" : "none";

            formularioConteudo.style.display = "flex";

            if (conteudo.tipo === "imagem" || conteudo.tipo === "pdf") {

                previaArquivoConteudo.innerHTML = "";

                if (conteudo.tipo === "imagem") {
                    const imagem = document.createElement("img");
                    imagem.src = conteudo.arquivo;
                    previaArquivoConteudo.appendChild(imagem);
                }

                if (conteudo.tipo === "pdf") {
                    const pdf = document.createElement("iframe");
                    pdf.src = conteudo.arquivo;
                    previaArquivoConteudo.appendChild(pdf);
                }

                previaArquivoConteudo.style.display = "block";
                removerArquivoConteudo.style.display = "inline-block";
            }

            nomeConteudo.focus();

        });

        botaoVisualizar.addEventListener("click", function () {

            previaConteudo.style.display = "none";
            visualizadorCard.innerHTML = "";
            visualizadorCard.style.display = "flex";

            const voltar = document.createElement("button");
            voltar.textContent = "← Voltar à prévia";
            voltar.addEventListener("click", function () {
                visualizadorCard.style.display = "none";
                previaConteudo.style.display = "block";
                botaoVisualizar.style.display = "";
            });

            visualizadorCard.appendChild(voltar);

            botaoVisualizar.style.display = "none";

            if (conteudo.tipo === "pdf") {

                const arquivo = document.createElement("iframe");
                arquivo.src = conteudo.arquivo;
                arquivo.style.width = "100%";
                arquivo.style.height = "500px";

                visualizadorCard.appendChild(arquivo);

            }

            if (conteudo.tipo === "imagem") {

                const imagem = document.createElement("img");
                imagem.src = conteudo.arquivo;
                imagem.style.display = "block";
                imagem.style.maxWidth = "100%";
                imagem.style.maxHeight = "500px";
                imagem.style.objectFit = "contain";
                imagem.style.margin = "15px auto";

                visualizadorCard.appendChild(imagem);

            }

            if (conteudo.tipo === "link") {
                window.open(conteudo.link, "_blank");
                visualizadorCard.style.display = "none";
                previaConteudo.style.display = "block";
                botaoVisualizar.style.display = "";
                return;
            }

            if (conteudo.tipo === "youtube") {

                const videoId = conteudo.link.match(
                    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/
                );

                if (!videoId) {
                    const aviso = document.createElement("p");
                    aviso.textContent = "Endereço do YouTube inválido. Verifique o link e tente novamente.";
                    aviso.classList.add("erro-exercicio", "visivel");

                    visualizadorCard.appendChild(aviso);
                    return;
                }

                const video = document.createElement("iframe");
                video.src = "https://www.youtube.com/embed/" + videoId[1];
                video.style.width = "100%";
                video.style.aspectRatio = "16 / 9";
                video.style.border = "none";
                video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                video.allowFullscreen = true;

                visualizadorCard.appendChild(video);

            }

        });

        cartao.appendChild(titulo);
        cartao.appendChild(descricao);
        cartao.appendChild(tipo);
        cartao.appendChild(previaConteudo);
        cartao.appendChild(visualizadorCard);

        cartao.appendChild(botaoVisualizar);
        cartao.appendChild(botaoEditar);
        cartao.appendChild(botaoExcluir);

        listaConteudos.appendChild(cartao);

    });

}

async function carregarTarefas() {

    if (!materiaAtual) return;

    const { data, error } = await clienteSupabase
        .from("tarefas")
        .select("*")
        .eq("materia_id", materiaAtual.dataset.id)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Erro ao carregar tarefas:", error);
        return;
    }

    materiaAtual.tarefas = data.map(function (tarefa) {
        return {
            id: tarefa.id,
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            prazo: tarefa.prazo,
            concluida: tarefa.concluida
        };
    });

    renderizarTarefas();
}

async function carregarExercicios() {

    if (!materiaAtual) return;

    const { data, error } = await clienteSupabase
        .from("exercicios")
        .select("*")
        .eq("materia_id", materiaAtual.dataset.id)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Erro ao carregar exercícios:", error);
        return;
    }

    materiaAtual.exercicios = [];

    for (const exercicio of data) {

        const imagem = await obterUrlImagemExercicio(
            exercicio.imagem_url
        );

        materiaAtual.exercicios.push({
            id: exercicio.id,
            titulo: exercicio.titulo,
            enunciado: exercicio.enunciado,
            tipo: exercicio.tipo,
            resposta: exercicio.resposta,
            alternativas: exercicio.alternativas || [],
            imagem: imagem,
            imagem_url: exercicio.imagem_url
        });

    }

    renderizarExercicios();
}

async function carregarConteudos() {

    if (!materiaAtual) return;

    const { data, error } = await clienteSupabase
        .from("conteudos")
        .select("*")
        .eq("materia_id", materiaAtual.dataset.id)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Erro ao carregar conteúdos:", error);
        return;
    }

    materiaAtual.conteudos = [];

    for (const conteudo of data) {

        let arquivo = null;

        if (conteudo.tipo === "pdf" || conteudo.tipo === "imagem") {
            arquivo = await obterUrlArquivoConteudo(conteudo.arquivo_url);
        }

        materiaAtual.conteudos.push({
            id: conteudo.id,
            nome: conteudo.nome,
            descricao: conteudo.descricao,
            tipo: conteudo.tipo,
            arquivo: arquivo,
            arquivo_url: conteudo.arquivo_url,
            link: conteudo.link
        });

    }

    renderizarConteudos();
}

async function obterUrlImagemExercicio(caminho) {

    if (!caminho) return null;

    const { data, error } = await clienteSupabase.storage
        .from("arquivos-write-study")
        .createSignedUrl(caminho, 3600);

    if (error) {
        console.error("Erro ao gerar URL da imagem:", error);
        return null;
    }

    return data.signedUrl;
}

function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    if (!materiaAtual || !materiaAtual.tarefas) {
        return;
    }

    materiaAtual.tarefas.forEach(function (tarefa) {
        const item = document.createElement("div");
        item.classList.add("item-tarefa");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;
        checkbox.setAttribute("aria-label", "Marcar tarefa como concluída");

        const conteudo = document.createElement("div");
        conteudo.classList.add("conteudo-tarefa");

        const titulo = document.createElement("h4");
        titulo.textContent = tarefa.titulo;

        if (tarefa.concluida) {
            item.classList.add("tarefa-concluida");
        }

        conteudo.appendChild(titulo);

        if (tarefa.descricao) {
            const descricao = document.createElement("p");
            descricao.textContent = tarefa.descricao;
            conteudo.appendChild(descricao);
        }


        if (tarefa.prazo) {
            const prazo = document.createElement("small");
            const [ano, mes, dia] = tarefa.prazo.split("-");

            prazo.classList.add("prazo-tarefa");
            prazo.textContent = `📅 Prazo: ${dia}/${mes}/${ano}`;

            conteudo.appendChild(prazo);
        }


        checkbox.addEventListener("change", async function () {
            tarefa.concluida = checkbox.checked;

            const { error } = await clienteSupabase
                .from("tarefas")
                .update({
                    concluida: tarefa.concluida
                })
                .eq("id", tarefa.id);

            if (error) {
                console.error("Erro ao atualizar conclusão:", error);
                alert("Não foi possível atualizar a tarefa.");
                tarefa.concluida = !checkbox.checked;
            }

            renderizarTarefas();
        });


        const editar = document.createElement("button");
        editar.type = "button";
        editar.classList.add("editar-tarefa");
        editar.textContent = "✏️";
        editar.title = "Editar tarefa";
        editar.setAttribute("aria-label", "Editar tarefa");

        editar.addEventListener("click", function () {
            tarefaEmEdicao = tarefa;
            tituloFormularioTarefa.textContent = "Editar tarefa";

            tituloTarefa.value = tarefa.titulo;
            descricaoTarefa.value = tarefa.descricao;
            prazoTarefa.value = tarefa.prazo;

            formularioTarefa.style.display = "flex";
            tituloTarefa.focus();

            salvarTarefa.textContent = "Salvar alterações";
        });


        const apagar = document.createElement("button");
        apagar.type = "button";
        apagar.classList.add("apagar-tarefa");
        apagar.textContent = "×";
        apagar.title = "Excluir tarefa";

        apagar.addEventListener("click", function () {
            tarefaParaApagar = tarefa;
            materiaDaTarefaParaApagar = materiaAtual;
            modalExcluirTarefa.style.display = "flex";
        });

        item.appendChild(checkbox);
        item.appendChild(conteudo);
        item.appendChild(editar);
        item.appendChild(apagar);

        listaTarefas.appendChild(item);
    });
}



tituloTarefa.addEventListener("input", function () {
    if (tituloTarefa.value.trim() !== "") {
        erroTarefa.classList.remove("visivel");
    }
});


cancelarExcluirTarefa.addEventListener("click", function () {
    modalExcluirTarefa.style.display = "none";
    tarefaParaApagar = null;
    materiaDaTarefaParaApagar = null;
});

confirmarExcluirTarefa.addEventListener("click", async function () {
    if (tarefaParaApagar && materiaDaTarefaParaApagar) {
        const { error } = await clienteSupabase
            .from("tarefas")
            .delete()
            .eq("id", tarefaParaApagar.id);

        if (error) {
            console.error("Erro ao excluir tarefa:", error);
            alert("Não foi possível excluir a tarefa.");
            return;
        }
        materiaDaTarefaParaApagar.tarefas =
            materiaDaTarefaParaApagar.tarefas.filter(function (tarefa) {
                return tarefa !== tarefaParaApagar;
            });

        if (materiaAtual === materiaDaTarefaParaApagar) {
            renderizarTarefas();
        }
    }

    modalExcluirTarefa.style.display = "none";
    tarefaParaApagar = null;
    materiaDaTarefaParaApagar = null;
});


// Abrir formulário de exercício
botaoNovoExercicio.addEventListener("click", function () {
    exercicioEmEdicao = null;
    imagemExercicioAtual = null;
    removerImagemExercicio = false;

    previaImagemExercicio.innerHTML = "";
    imagemExercicio.value = "";
    btnRemoverImagemExercicio.style.display = "none";

    tituloFormularioExercicio.textContent = "Novo exercício";
    formularioExercicio.style.display = "flex";
});

// Prévia da imagem do exercício
imagemExercicio.addEventListener("change", function () {
    previaImagemExercicio.innerHTML = "";
    btnRemoverImagemExercicio.style.display = "none";

    const arquivo = imagemExercicio.files[0];

    if (!arquivo) return;

    if (erroExercicio.textContent === "Selecione um arquivo de imagem.") {
        erroExercicio.textContent = "";
        erroExercicio.classList.remove("visivel");
    }

    if (!arquivo.type.startsWith("image/")) {
        erroExercicio.textContent = "Selecione um arquivo de imagem.";
        erroExercicio.classList.add("visivel");

        erroExercicio.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        imagemExercicio.value = "";
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function () {
        imagemExercicioAtual = leitor.result;
        removerImagemExercicio = false;

        const imagem = document.createElement("img");
        imagem.src = imagemExercicioAtual;
        imagem.classList.add("imagem-previa-exercicio");

        previaImagemExercicio.appendChild(imagem);

        btnRemoverImagemExercicio.style.display = "block";
    };

    leitor.readAsDataURL(arquivo);
});

btnRemoverImagemExercicio.addEventListener("click", function () {
    imagemExercicioAtual = null;
    removerImagemExercicio = true;

    imagemExercicio.value = "";
    previaImagemExercicio.innerHTML = "";

    btnRemoverImagemExercicio.style.display = "none";
});

// Cancelar cadastro de exercício
cancelarExercicio.addEventListener("click", function () {
    formularioExercicio.style.display = "none";

    tituloExercicio.value = "";
    enunciadoExercicio.value = "";
    tipoExercicio.value = "multipla";
    respostaCorreta.value = "";
    imagemExercicio.value = "";
    previaImagemExercicio.innerHTML = "";
    imagemExercicioAtual = null;

    erroExercicio.classList.remove("visivel");
});

async function enviarImagemExercicio(arquivo) {

    const { data: dadosUsuario, error: erroUsuario } =
        await clienteSupabase.auth.getUser();

    if (erroUsuario || !dadosUsuario.user) {
        throw new Error("Não foi possível identificar o usuário.");
    }

    const extensao = arquivo.name.split(".").pop();

    const caminho = `${dadosUsuario.user.id}/${materiaAtual.dataset.id}/${crypto.randomUUID()}.${extensao}`;

    const { error } = await clienteSupabase.storage
        .from("arquivos-write-study")
        .upload(caminho, arquivo);

    if (error) {
        throw error;
    }

    return caminho;
}

function renderizarExercicios() {
    listaExercicios.innerHTML = "";

    if (!materiaAtual) return;

    if (!materiaAtual.exercicios) {
        materiaAtual.exercicios = [];
    }

    materiaAtual.exercicios.forEach(function (exercicio) {
        const card = document.createElement("div");
        card.classList.add("card-exercicio");

        const titulo = document.createElement("h4");
        titulo.textContent = exercicio.titulo;

        const enunciado = document.createElement("p");
        enunciado.textContent = exercicio.enunciado;

        const areaResposta = document.createElement("div");
        areaResposta.classList.add("area-resposta-exercicio");

        card.appendChild(titulo);

        if (exercicio.imagem) {
            const imagem = document.createElement("img");
            imagem.src = exercicio.imagem;
            imagem.classList.add("imagem-exercicio-card");

            card.appendChild(imagem);
        }

        card.appendChild(enunciado);
        card.appendChild(areaResposta);

        if (exercicio.tipo === "multipla") {
            const alternativasResposta = document.createElement("div");
            alternativasResposta.classList.add("alternativas-resposta");

            exercicio.alternativas.forEach(function (alternativa, indice) {
                if (alternativa) {
                    const opcao = document.createElement("label");
                    const radio = document.createElement("input");

                    radio.type = "radio";
                    radio.name = `resposta-${materiaAtual.exercicios.indexOf(exercicio)}`;
                    radio.value = String.fromCharCode(65 + indice);

                    opcao.appendChild(radio);
                    opcao.appendChild(document.createTextNode(
                        ` ${String.fromCharCode(65 + indice)}) ${alternativa}`
                    ));

                    alternativasResposta.appendChild(opcao);
                }
            });

            areaResposta.appendChild(alternativasResposta);
            const verificar = document.createElement("button");
            verificar.type = "button";
            verificar.textContent = "Verificar sua resposta";

            const resultado = document.createElement("p");
            resultado.classList.add("resultado-resposta");

            verificar.addEventListener("click", function () {
                const selecionada = alternativasResposta.querySelector(
                    'input[type="radio"]:checked'
                );

                if (!selecionada) {
                    resultado.textContent = "Selecione uma alternativa primeiro.";
                    resultado.classList.add("mensagem-orientacao");

                    setTimeout(function () {
                        resultado.textContent = "";
                        resultado.classList.remove("mensagem-orientacao");
                    }, 3000);

                    return;
                }

                if (selecionada.value === exercicio.resposta) {
                    resultado.textContent = "Parabéns! Você acertou!";
                    resultado.classList.remove("resposta-incorreta");
                    resultado.classList.add("resposta-correta");
                } else {
                    resultado.textContent = "Não foi dessa vez. Tente novamente!";
                    resultado.classList.remove("resposta-correta");
                    resultado.classList.add("resposta-incorreta");
                }

                setTimeout(function () {
                    resultado.textContent = "";
                    resultado.classList.remove("resposta-correta", "resposta-incorreta");
                }, 3000);
            });

            areaResposta.appendChild(verificar);
            areaResposta.appendChild(resultado);
        }

        if (exercicio.tipo === "verdadeiro-falso") {
            const alternativasVF = document.createElement("div");
            alternativasVF.classList.add("alternativas-resposta");

            ["Verdadeiro", "Falso"].forEach(function (valor) {
                const opcao = document.createElement("label");
                const radio = document.createElement("input");

                radio.type = "radio";
                radio.name = `resposta-vf-${materiaAtual.exercicios.indexOf(exercicio)}`;
                radio.value = valor;

                opcao.appendChild(radio);
                opcao.appendChild(document.createTextNode(` ${valor}`));

                alternativasVF.appendChild(opcao);
            });

            const verificar = document.createElement("button");
            verificar.type = "button";
            verificar.textContent = "Verificar resposta";

            const resultado = document.createElement("p");
            resultado.classList.add("resultado-resposta");

            verificar.addEventListener("click", function () {
                const selecionada = alternativasVF.querySelector(
                    'input[type="radio"]:checked'
                );

                if (!selecionada) {
                    resultado.textContent = "Selecione uma alternativa primeiro.";
                    resultado.classList.add("mensagem-orientacao");

                    setTimeout(function () {
                        resultado.textContent = "";
                        resultado.classList.remove("mensagem-orientacao");
                    }, 3000);

                    return;
                }

                if (selecionada.value === exercicio.resposta) {
                    resultado.textContent = "Parabéns! Você acertou!";
                    resultado.classList.remove("resposta-incorreta");
                    resultado.classList.add("resposta-correta");
                } else {
                    resultado.textContent = "Não foi dessa vez. Tente novamente!";
                    resultado.classList.remove("resposta-correta");
                    resultado.classList.add("resposta-incorreta");
                }

                setTimeout(function () {
                    resultado.textContent = "";
                    resultado.classList.remove("resposta-correta", "resposta-incorreta");
                }, 3000);
            });

            areaResposta.appendChild(alternativasVF);
            areaResposta.appendChild(verificar);
            areaResposta.appendChild(resultado);
        }

        if (exercicio.tipo === "aberta") {
            const campoResposta = document.createElement("textarea");
            campoResposta.placeholder = "Digite sua resposta...";
            campoResposta.classList.add("campo-resposta-aberta");

            const verificar = document.createElement("button");
            verificar.type = "button";
            verificar.textContent = "Enviar resposta";

            const resultado = document.createElement("p");
            resultado.classList.add("resultado-resposta");

            verificar.addEventListener("click", function () {
                if (!campoResposta.value.trim()) {
                    resultado.textContent = "Digite sua resposta primeiro.";
                    resultado.classList.add("mensagem-orientacao");

                    setTimeout(function () {
                        resultado.textContent = "";
                        resultado.classList.remove("mensagem-orientacao");
                    }, 3000);

                    return;
                }

                resultado.textContent = "Resposta registrada! Consulte o gabarito para comparar.";
                resultado.classList.add("mensagem-orientacao");

                setTimeout(function () {
                    resultado.textContent = "";
                    resultado.classList.remove("mensagem-orientacao");
                }, 4000);
            });

            areaResposta.appendChild(campoResposta);
            areaResposta.appendChild(verificar);
            areaResposta.appendChild(resultado);
        }

        const botaoResposta = document.createElement("button");
        botaoResposta.textContent = "Ver resposta correta";
        botaoResposta.type = "button";

        const resposta = document.createElement("p");
        resposta.style.display = "none";

        if (exercicio.tipo === "multipla") {
            resposta.textContent = `Resposta correta: ${exercicio.resposta}`;
        } else {
            resposta.textContent = `Resposta: ${exercicio.resposta}`;
        }

        botaoResposta.addEventListener("click", function () {
            if (resposta.style.display === "none") {
                resposta.style.display = "block";
                botaoResposta.textContent = "Ocultar resposta";
            } else {
                resposta.style.display = "none";
                botaoResposta.textContent = "Ver resposta";
            }
        });

        card.appendChild(botaoResposta);
        card.appendChild(resposta);
        const editar = document.createElement("button");
        editar.type = "button";
        editar.textContent = "✏️";
        editar.title = "Editar exercício";
        editar.setAttribute("aria-label", "Editar exercício");

        editar.addEventListener("click", function () {
            exercicioEmEdicao = exercicio;

            imagemExercicioAtual = exercicio.imagem || null;
            removerImagemExercicio = false;

            previaImagemExercicio.innerHTML = "";
            btnRemoverImagemExercicio.style.display = imagemExercicioAtual ? "block" : "none";

            if (imagemExercicioAtual) {
                const imagem = document.createElement("img");
                imagem.src = imagemExercicioAtual;
                imagem.classList.add("imagem-previa-exercicio");

                previaImagemExercicio.appendChild(imagem);
            }

            tituloExercicio.value = exercicio.titulo;
            enunciadoExercicio.value = exercicio.enunciado;
            tipoExercicio.value = exercicio.tipo;
            tipoExercicio.dispatchEvent(new Event("change"));

            if (exercicio.tipo === "multipla") {
                const alternativas = document.querySelectorAll(".alternativa-exercicio");

                alternativas.forEach(function (campo, indice) {
                    campo.value = exercicio.alternativas[indice] || "";
                });

                document.querySelectorAll('input[name="gabaritoMultipla"]').forEach(function (radio) {
                    radio.checked = radio.value === exercicio.resposta;
                });
            }

            else if (exercicio.tipo === "verdadeiro-falso") {
                document.querySelectorAll(".opcao-vf").forEach(function (botao) {
                    botao.classList.toggle(
                        "selecionado",
                        botao.dataset.valor === exercicio.resposta
                    );
                });

                respostaCorreta.value = exercicio.resposta;
            }

            else if (exercicio.tipo === "aberta") {
                respostaCorreta.value = exercicio.resposta;
            }

            tituloFormularioExercicio.textContent = "Editar exercício";
            formularioExercicio.style.display = "flex";

            formularioExercicio.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
        card.appendChild(editar);

        const excluir = document.createElement("button");
        excluir.type = "button";
        excluir.textContent = "🗑️";
        excluir.title = "Excluir exercício";
        excluir.setAttribute("aria-label", "Excluir exercício");

        excluir.addEventListener("click", function () {
            exercicioParaExcluir = exercicio;
            modalExcluirExercicio.style.display = "flex";
        });

        card.appendChild(excluir);
        listaExercicios.appendChild(card);
    });
}

// Salvar exercício
document.getElementById("salvarExercicio").addEventListener("click", async function () {

    if (salvandoExercicio) return;

    salvandoExercicio = true;
    const botaoSalvarExercicio = document.getElementById("salvarExercicio");
    botaoSalvarExercicio.disabled = true;

    try {

        const titulo = tituloExercicio.value.trim();
        const enunciado = enunciadoExercicio.value.trim();

        if (!materiaAtual) {
            mostrarErroExercicio("Selecione uma matéria antes de salvar o exercício.");
            return;
        }

        function mostrarErroExercicio(mensagem) {
            erroExercicio.textContent = mensagem;
            erroExercicio.classList.add("visivel");

            erroExercicio.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        if (!titulo && !enunciado) {
            mostrarErroExercicio("O título e o enunciado da questão são obrigatórios. Preencha os dois campos.");
            return;
        }

        if (!titulo) {
            mostrarErroExercicio("O campo Título é obrigatório. Informe um título para o exercício.");
            return;
        }

        if (!enunciado) {
            mostrarErroExercicio("O campo Enunciado é obrigatório. Digite a pergunta que deseja praticar.");
            return;
        }

        if (tipoExercicio.value === "multipla") {
            const alternativas = Array.from(
                document.querySelectorAll(".alternativa-exercicio")
            );

            const preenchidas = alternativas.filter(function (campo) {
                return campo.value.trim() !== "";
            });

            const gabaritoSelecionado = document.querySelector(
                'input[name="gabaritoMultipla"]:checked'
            );

            const alternativaCorreta = gabaritoSelecionado
                ? gabaritoSelecionado.closest(".campo-alternativa")
                    .querySelector(".alternativa-exercicio")
                : null;

            if (preenchidas.length < 2) {
                mostrarErroExercicio("Preencha pelo menos duas alternativas.");
                return;
            }

            if (!gabaritoSelecionado || !alternativaCorreta.value.trim()) {
                mostrarErroExercicio("Marque uma alternativa preenchida como correta.");
                return;
            }
        }

        else if (tipoExercicio.value === "verdadeiro-falso") {
            if (!respostaCorreta.value.trim()) {
                mostrarErroExercicio("Selecione Verdadeiro ou Falso como resposta correta.");
                return;
            }
        }

        else if (tipoExercicio.value === "aberta") {
            if (!respostaCorreta.value.trim()) {
                mostrarErroExercicio("Preencha a resposta esperada.");
                return;
            }
        }

        erroExercicio.classList.remove("visivel");

        if (!materiaAtual.exercicios) {
            materiaAtual.exercicios = [];
        }

        let caminhoImagem = null;

        if (imagemExercicio.files[0]) {
            try {
                caminhoImagem = await enviarImagemExercicio(
                    imagemExercicio.files[0]
                );
            } catch (erro) {
                console.error("Erro ao enviar imagem:", erro);
                mostrarErroExercicio("Não foi possível enviar a imagem.");
                return;
            }
        }

        const novoExercicio = {
            titulo: titulo,
            enunciado: enunciado,
            tipo: tipoExercicio.value,

            resposta: tipoExercicio.value === "multipla"
                ? document.querySelector('input[name="gabaritoMultipla"]:checked').value
                : respostaCorreta.value.trim(),

            alternativas: Array.from(
                document.querySelectorAll(".alternativa-exercicio")
            ).map(function (campo) {
                return campo.value.trim();
            }),

            imagem: imagemExercicioAtual,
            imagem_url: caminhoImagem
        };

        if (exercicioEmEdicao) {
            const indice = materiaAtual.exercicios.indexOf(exercicioEmEdicao);
            if (!caminhoImagem && !removerImagemExercicio) {
                novoExercicio.imagem_url = exercicioEmEdicao.imagem_url;
            }

            if (!imagemExercicioAtual && !removerImagemExercicio) {
                novoExercicio.imagem = exercicioEmEdicao.imagem;
            }

            const { error } = await clienteSupabase
                .from("exercicios")
                .update({
                    titulo: novoExercicio.titulo,
                    enunciado: novoExercicio.enunciado,
                    tipo: novoExercicio.tipo,
                    resposta: novoExercicio.resposta,
                    alternativas: novoExercicio.alternativas,
                    imagem_url: novoExercicio.imagem_url
                })
                .eq("id", exercicioEmEdicao.id);

            if (error) {
                console.error("Erro ao atualizar exercício:", error);
                mostrarErroExercicio("Não foi possível atualizar o exercício.");
                return;
            }

            materiaAtual.exercicios[indice] = novoExercicio;

            exercicioEmEdicao = null;
        } else {

            const { data, error } = await clienteSupabase
                .from("exercicios")
                .insert({
                    materia_id: materiaAtual.dataset.id,
                    titulo: novoExercicio.titulo,
                    enunciado: novoExercicio.enunciado,
                    tipo: novoExercicio.tipo,
                    resposta: novoExercicio.resposta,
                    alternativas: novoExercicio.alternativas,
                    imagem_url: novoExercicio.imagem_url
                })
                .select()
                .single();

            if (error) {
                console.error("Erro ao salvar exercício:", error);
                mostrarErroExercicio("Não foi possível salvar o exercício.");
                return;
            }

            novoExercicio.id = data.id;
            materiaAtual.exercicios.push(novoExercicio);
        }

        renderizarExercicios();

        formularioExercicio.style.display = "none";
        tituloExercicio.value = "";
        enunciadoExercicio.value = "";
        tipoExercicio.value = "multipla";
        tipoExercicio.dispatchEvent(new Event("change"));

        document.querySelectorAll('input[name="gabaritoMultipla"]').forEach(function (radio) {
            radio.checked = false;
        });

        document.querySelectorAll(".opcao-vf").forEach(function (botao) {
            botao.classList.remove("selecionado");
        });


        respostaCorreta.value = "";
        imagemExercicio.value = "";
        previaImagemExercicio.innerHTML = "";
        imagemExercicioAtual = null;
        document.querySelectorAll(".alternativa-exercicio").forEach(function (campo) {
            campo.value = "";
        });

        erroExercicio.classList.remove("visivel");

    } finally {
        salvandoExercicio = false;
        botaoSalvarExercicio.disabled = false;
    }

});

// SELETOR PERSONALIZADO - TIPO DE QUESTÃO
botaoTipo.addEventListener("click", function () {
    seletorTipo.classList.toggle("aberto");
});

function atualizarSeletorTipo() {
    const opcaoSelecionada = tipoExercicio.options[tipoExercicio.selectedIndex];

    textoTipo.textContent = opcaoSelecionada.textContent;

    opcoesTipo.querySelectorAll("button").forEach(function (botao) {
        botao.classList.toggle(
            "selecionado",
            botao.dataset.valor === tipoExercicio.value
        );
    });
}

opcoesTipo.querySelectorAll("button").forEach(function (botao) {
    botao.addEventListener("click", function () {
        tipoExercicio.value = botao.dataset.valor;

        tipoExercicio.dispatchEvent(new Event("change"));

        atualizarSeletorTipo();
        seletorTipo.classList.remove("aberto");
    });
});

tipoExercicio.addEventListener("change", atualizarSeletorTipo);

document.addEventListener("click", function (evento) {
    if (!seletorTipo.contains(evento.target)) {
        seletorTipo.classList.remove("aberto");
    }
});

atualizarSeletorTipo();


// Alterar campos conforme o tipo de exercício
tipoExercicio.addEventListener("change", function () {
    camposAlternativas.style.display = "none";
    alternativasVerdadeiroFalso.style.display = "none";
    campoGabarito.style.display = "none";

    respostaCorreta.value = "";

    document.querySelectorAll(".opcao-vf").forEach(function (botao) {
        botao.classList.remove("selecionado");
    });

    document.querySelectorAll('input[name="gabaritoMultipla"]').forEach(function (radio) {
        radio.checked = false;
    });

    if (tipoExercicio.value === "multipla") {
        camposAlternativas.style.display = "flex";
    }

    else if (tipoExercicio.value === "verdadeiro-falso") {
        alternativasVerdadeiroFalso.style.display = "block";
    }

    else if (tipoExercicio.value === "aberta") {
        campoGabarito.style.display = "block";
    }
});

// Selecionar resposta de verdadeiro ou falso
document.querySelectorAll(".opcao-vf").forEach(function (botao) {
    botao.addEventListener("click", function () {
        document.querySelectorAll(".opcao-vf").forEach(function (outroBotao) {
            outroBotao.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");
        respostaCorreta.value = botao.dataset.valor;
    });
});

cancelarExcluirExercicio.addEventListener("click", function () {
    modalExcluirExercicio.style.display = "none";
    exercicioParaExcluir = null;
});

confirmarExcluirExercicio.addEventListener("click", async function () {
    if (exercicioParaExcluir) {
        const indice = materiaAtual.exercicios.indexOf(exercicioParaExcluir);
        const { error } = await clienteSupabase
            .from("exercicios")
            .delete()
            .eq("id", exercicioParaExcluir.id);

        if (exercicioParaExcluir.imagem_url) {

            const { error: erroImagem } = await clienteSupabase.storage
                .from("arquivos-write-study")
                .remove([exercicioParaExcluir.imagem_url]);

            if (erroImagem) {
                console.error("Erro ao excluir imagem:", erroImagem);
            }
        }

        if (error) {
            console.error("Erro ao excluir exercício:", error);
            alert("Não foi possível excluir o exercício.");
            return;
        }

        if (indice !== -1) {
            materiaAtual.exercicios.splice(indice, 1);
        }

        renderizarExercicios();
    }

    modalExcluirExercicio.style.display = "none";
    exercicioParaExcluir = null;
});

// Alternar entre login e cadastro

document.getElementById("irCadastro").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("telaCadastro").style.display = "flex";
});

document.getElementById("irLogin").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("telaCadastro").style.display = "none";
    document.getElementById("telaLogin").style.display = "flex";
});

// Cadastro de usuário
async function cadastrarUsuario() {

    const nome = document.getElementById("nomeCadastro").value.trim();
    const email = document.getElementById("emailCadastro").value.trim();
    const senha = document.getElementById("senhaCadastro").value;

    const mensagem = document.getElementById("mensagemCadastro");

    mensagem.textContent = "";
    if (!nome || !email || !senha) {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "#d9534f";
        return;
    }

    const { data, error } = await clienteSupabase.auth.signUp({
        email: email,
        password: senha,
        options: {
            data: {
                nome: nome
            }
        }
    });

    if (error) {

        let textoErro = "Não foi possível criar sua conta. Tente novamente.";

        if (error.message.includes("Password should be at least 6 characters")) {
            textoErro = "A senha precisa ter pelo menos 6 caracteres.";
        }
        else if (error.message.includes("Invalid email")) {
            textoErro = "Digite um endereço de e-mail válido.";
        }
        else if (error.message.includes("User already registered")) {
            textoErro = "Este e-mail já possui uma conta cadastrada.";
        }

        mensagem.textContent = textoErro;
        mensagem.style.color = "#d9534f";
        return;
    }

    mensagem.textContent = "Cadastro realizado! Verifique seu e-mail para confirmar a conta.";
    mensagem.style.color = "green";

}

document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

// Login de usuário
async function entrarUsuario() {

    const email = document.getElementById("emailLogin").value.trim();
    const senha = document.getElementById("senhaLogin").value;

    const mensagem = document.getElementById("mensagemLogin");

    mensagem.textContent = "";

    if (!email || !senha) {
        mensagem.textContent = "Informe seu e-mail e sua senha.";
        mensagem.style.color = "#d9534f";
        return;
    }

    const { data, error } = await clienteSupabase.auth.signInWithPassword({
        email: email,
        password: senha
    });

    if (error) {
        mensagem.textContent = "E-mail ou senha incorretos.";
        mensagem.style.color = "#d9534f";
        return;
    }

    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "green";

    await carregarMaterias();
    await carregarTextoImportante();

    document.getElementById("telaLogin").style.display = "none";
    document.querySelector(".layout").style.display = "flex";

}

document.getElementById("btnEntrar").addEventListener("click", entrarUsuario);

// Verificar sessão ao abrir o site
async function verificarSessao() {

    const { data, error } = await clienteSupabase.auth.getSession();

    if (error) {
        console.error("Erro ao verificar sessão:", error);

        document.getElementById("telaCarregamento").style.display = "none";
        document.getElementById("telaCadastro").style.display = "none";
        document.getElementById("telaLogin").style.display = "flex";

        return;
    }

    if (data.session) {
        await carregarMaterias();
        await carregarTextoImportante();
        document.getElementById("telaCarregamento").style.display = "none";

        document.getElementById("telaLogin").style.display = "none";
        document.getElementById("telaCadastro").style.display = "none";
        document.querySelector(".layout").style.display = "flex";

    } else {

        document.getElementById("telaCarregamento").style.display = "none";
        document.getElementById("telaCadastro").style.display = "none";
        document.getElementById("telaLogin").style.display = "flex";
        document.querySelector(".layout").style.display = "none";

    }
}

verificarSessao();

// Abrir e fechar configurações

const btnConfiguracoes = document.getElementById("btnConfiguracoes");
const opcoesConfiguracoes = document.getElementById("opcoesConfiguracoes");
const setaConfiguracoes = document.getElementById("setaConfiguracoes");

btnConfiguracoes.addEventListener("click", function () {

    if (opcoesConfiguracoes.style.display === "flex") {

        opcoesConfiguracoes.style.display = "none";
        setaConfiguracoes.textContent = "⌄";

    } else {

        opcoesConfiguracoes.style.display = "flex";
        setaConfiguracoes.textContent = "⌃";

    }

});

// Confirmação de logout

const modalSair = document.getElementById("modalSair");
const cancelarSair = document.getElementById("cancelarSair");
const confirmarSair = document.getElementById("confirmarSair");

// Abrir confirmação
document.getElementById("btnSair").addEventListener("click", function () {
    modalSair.style.display = "flex";
});

// Cancelar logout
cancelarSair.addEventListener("click", function () {
    modalSair.style.display = "none";
});

// Confirmar logout
confirmarSair.addEventListener("click", async function () {

    const { error } = await clienteSupabase.auth.signOut();

    if (error) {
        alert("Não foi possível sair da conta.");
        return;
    }

    modalSair.style.display = "none";
    document.querySelector(".layout").style.display = "none";
    document.getElementById("telaCadastro").style.display = "none";
    document.getElementById("telaLogin").style.display = "flex";

});

// Janela Minha Conta

const modalConta = document.getElementById("modalConta");
const fecharModalConta = document.getElementById("fecharModalConta");
const btnExcluirConta = document.getElementById("btnExcluirConta");
const modalExcluirConta = document.getElementById("modalExcluirConta");
const senhaExcluirConta = document.getElementById("senhaExcluirConta");
const erroExcluirConta = document.getElementById("erroExcluirConta");
const cancelarExclusaoConta = document.getElementById("cancelarExclusaoConta");
const confirmarExclusaoConta = document.getElementById("confirmarExclusaoConta");

document.getElementById("btnConta").addEventListener("click", async function () {

    modalConta.style.display = "flex";

    const { data, error } = await clienteSupabase.auth.getUser();

    if (error || !data.user) {
        document.getElementById("nomeUsuarioConta").textContent = "Não disponível";
        document.getElementById("emailUsuarioConta").textContent = "Não disponível";
        return;
    }

    const usuario = data.user;

    document.getElementById("nomeUsuarioConta").textContent =
        usuario.user_metadata.nome || "Nome não informado";

    document.getElementById("emailUsuarioConta").textContent =
        usuario.email || "E-mail não disponível";

});

fecharModalConta.addEventListener("click", function () {

    modalConta.style.display = "none";

});

btnExcluirConta.addEventListener("click", function () {

    modalConta.style.display = "none";
    modalExcluirConta.style.display = "flex";

    senhaExcluirConta.value = "";
    erroExcluirConta.textContent = "";

});

cancelarExclusaoConta.addEventListener("click", function () {

    modalExcluirConta.style.display = "none";
    senhaExcluirConta.value = "";
    erroExcluirConta.textContent = "";

});

senhaExcluirConta.addEventListener("input", function () {

    erroExcluirConta.textContent = "";

});

confirmarExclusaoConta.addEventListener("click", async function () {

    if (salvandoExclusaoConta) return;

    salvandoExclusaoConta = true;
    confirmarExclusaoConta.disabled = true;
    cancelarExclusaoConta.disabled = true;


    try {

        const senha = senhaExcluirConta.value;
        erroExcluirConta.textContent = "";

        if (!senha) {
            erroExcluirConta.textContent = "Digite sua senha para continuar.";
            senhaExcluirConta.focus();
            return;
        }
        let resultado;

        try {
            resultado = await clienteSupabase.functions.invoke("delete-account", {
                body: {
                    password: senha
                }
            });
        } catch (erro) {
            console.error("Erro ao chamar a função:", erro);
            erroExcluirConta.textContent =
                "Não foi possível conectar ao servidor. Tente novamente.";
            return;
        }

        const { error } = resultado;

        if (error) {

            let mensagem = "Não foi possível excluir sua conta. Tente novamente.";

            try {
                const resposta = error.context instanceof Response
                    ? await error.context.json()
                    : null;

                if (resposta.error) {
                    mensagem = resposta.error;
                }
            } catch {
                // Mantém a mensagem padrão.
            }

            erroExcluirConta.textContent = mensagem;
            return;
        }

        const { error: erroSaida } = await clienteSupabase.auth.signOut({
            scope: "local"
        });

        if (erroSaida) {
            console.error("Erro ao encerrar sessão:", erroSaida);
        }

        modalExcluirConta.style.display = "none";
        senhaExcluirConta.value = "";

        document.querySelector(".layout").style.display = "none";
        document.getElementById("telaCadastro").style.display = "none";
        document.getElementById("telaLogin").style.display = "flex";

        document.getElementById("mensagemLogin").textContent =
            "Sua conta foi excluída com sucesso.";
        document.getElementById("mensagemLogin").style.color = "#2e9d50";

    } finally {
        salvandoExclusaoConta = false;
        confirmarExclusaoConta.disabled = false;
        cancelarExclusaoConta.disabled = false;
    }

});
