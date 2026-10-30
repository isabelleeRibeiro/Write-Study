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
const respostaCorreta = document.getElementById("respostaCorreta");
const imagemExercicio = document.getElementById("imagemExercicio");
const previaImagemExercicio = document.getElementById("previaImagemExercicio");
const erroExercicio = document.getElementById("erroExercicio");

const listaExercicios = document.getElementById("listaExercicios");

const camposAlternativas = document.getElementById("camposAlternativas");

const alternativasVerdadeiroFalso = document.getElementById("alternativasVerdadeiroFalso");

const campoGabarito = document.getElementById("campoGabarito");

let tarefaParaApagar = null;
let materiaDaTarefaParaApagar = null;

let materiaAtual = null;
let anotacaoAtual = null;
let anotacaoParaApagar = null;

let materiaParaApagar = null;

let tarefaEmEdicao = null;
let exercicioEmEdicao = null;

// Abre o campo para adicionar uma matéria
botao.addEventListener("click", function () {
    campo.style.display = "block";
    input.focus();
});


// Cria uma nova matéria
function criarMateria() {
    const materia = input.value.trim();

    if (materia === "") {
        input.focus();
        return;
    }

    const novaMateria = document.createElement("div");
    novaMateria.classList.add("materia-item");

    novaMateria.anotacoes = [];
    novaMateria.exercicios = [];

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

    const opcoes = ["Anotações", "Atividades", "Conteúdo"];


    opcoes.forEach(function (opcao) {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.classList.add("opcao-materia");
        botaoOpcao.textContent = opcao;
        botaoOpcao.type = "button";

        botaoOpcao.addEventListener("click", function (evento) {
            evento.stopPropagation();


            if (opcao === "Anotações") {

                areaAtividades.style.display = "none";
                // Se clicar novamente na mesma matéria, fecha as anotações
                if (
                    materiaAtual === novaMateria &&
                    areaAnotacoes.style.display === "flex"
                ) {
                    areaAnotacoes.style.display = "none";
                    areaAtividades.style.display = "none";
                    inicio.style.display = "flex";

                    materiaAtual = null;
                    anotacaoAtual = null;

                    listaAnotacoes.innerHTML = "";
                    mostrarEditorVazio();

                    return;
                }

                // Abre as anotações da matéria selecionada
                inicio.style.display = "none";
                areaAnotacoes.style.display = "flex";

                materiaAtual = novaMateria;
                anotacaoAtual = null;

                renderizarAnotacoes();
                mostrarEditorVazio();
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
                areaAnotacoes.style.display = "none";
                areaAtividades.style.display = "flex";

                materiaAtual = novaMateria;
                anotacaoAtual = null;

                listaTarefas.innerHTML = "";
                renderizarTarefas();

                listaExercicios.innerHTML = "";
                renderizarExercicios();

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

    // Adiciona a matéria à lista
    lista.appendChild(novaMateria);

    // Limpa e fecha o campo de criação
    input.value = "";
    campo.style.display = "none";
}


// Confirma a criação pelo botão Adicionar
confirmarMateria.addEventListener("click", criarMateria);


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
confirmarApagar.addEventListener("click", function () {
    if (materiaParaApagar) {

        // Verifica se a matéria apagada está aberta nas anotações
        if (materiaParaApagar === materiaAtual) {
            areaAnotacoes.style.display = "none";
            inicio.style.display = "flex";
            areaAtividades.style.display = "none";

            materiaAtual = null;
            anotacaoAtual = null;

            listaAnotacoes.innerHTML = "";
            mostrarEditorVazio();
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

        selecionar.addEventListener("click", function () {
            salvarCamposAtuais();
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

function criarAnotacao() {
    if (!materiaAtual) return;

    const nova = {
        titulo: "",
        texto: ""
    };

    materiaAtual.anotacoes.push(nova);
    anotacaoAtual = nova;

    renderizarAnotacoes();
    abrirEditor();

    document.getElementById("tituloAnotacaoEditor").focus();
}


function abrirEditor() {
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
        { comando: "highlight", simbolo: "🖍️", titulo: "Marca-texto amarelo" }
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
        botaoFerramenta.textContent = item.simbolo;
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
    });

    texto.addEventListener("input", function () {
        anotacaoAtual.texto = texto.innerHTML;
    });

    editorAnotacao.appendChild(titulo);
    editorAnotacao.appendChild(ferramentas);
    editorAnotacao.appendChild(texto);
}



function salvarCamposAtuais() {
    if (!anotacaoAtual) return;

    const titulo = document.getElementById("tituloAnotacaoEditor");
    const texto = document.getElementById("conteudoAnotacaoEditor");

    if (titulo) anotacaoAtual.titulo = titulo.value;
    if (texto) anotacaoAtual.texto = texto.innerHTML;
}


function atualizarTituloNaLista() {
    renderizarAnotacoes();
}

botaoNovaAnotacao.addEventListener("click", function () {
    salvarCamposAtuais();
    criarAnotacao();
});

cancelarExcluirAnotacao.addEventListener("click", function () {
    modalExcluirAnotacao.style.display = "none";
    anotacaoParaApagar = null;
});

confirmarExcluirAnotacao.addEventListener("click", function () {
    if (materiaAtual && anotacaoParaApagar) {
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




salvarTarefa.addEventListener("click", function () {
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
        alert("Selecione uma matéria antes de salvar a tarefa.");
        return;
    }

    if (tarefaEmEdicao) {
        // Atualiza a tarefa existente
        tarefaEmEdicao.titulo = titulo;
        tarefaEmEdicao.descricao = descricao;
        tarefaEmEdicao.prazo = prazo;
    } else {
        // Cria uma nova tarefa
        if (!materiaAtual.tarefas) {
            materiaAtual.tarefas = [];
        }

        materiaAtual.tarefas.push({
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
});


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


        checkbox.addEventListener("change", function () {
            tarefa.concluida = checkbox.checked;
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

confirmarExcluirTarefa.addEventListener("click", function () {
    if (tarefaParaApagar && materiaDaTarefaParaApagar) {
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

    formularioExercicio.style.display = "flex";
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

    erroExercicio.classList.remove("visivel");
});

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

        card.appendChild(titulo);
        card.appendChild(enunciado);

        if (exercicio.alternativas && exercicio.tipo === "multipla") {
            exercicio.alternativas.forEach(function (alternativa, indice) {
                if (alternativa) {
                    const opcao = document.createElement("p");
                    opcao.textContent = `${String.fromCharCode(65 + indice)}) ${alternativa}`;
                    card.appendChild(opcao);
                }
            });
        }

        const botaoResposta = document.createElement("button");
        botaoResposta.textContent = "Ver resposta";
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

            tituloExercicio.value = exercicio.titulo;
            enunciadoExercicio.value = exercicio.enunciado;
            tipoExercicio.value = exercicio.tipo;

            formularioExercicio.style.display = "flex";
        });

        listaExercicios.appendChild(card);
    });
}

// Salvar exercício
document.getElementById("salvarExercicio").addEventListener("click", function () {
    const titulo = tituloExercicio.value.trim();
    const enunciado = enunciadoExercicio.value.trim();

    if (!materiaAtual) {
        alert("Selecione uma matéria primeiro.");
        return;
    }

    function mostrarErroExercicio(mensagem) {
        erroExercicio.textContent = mensagem;
        erroExercicio.classList.add("visivel");
    }

    if (!titulo || !enunciado) {
        mostrarErroExercicio("Preencha o título e o enunciado da questão.");
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

        imagem: null
    };

    materiaAtual.exercicios.push(novoExercicio);

    renderizarExercicios();

    formularioExercicio.style.display = "none";
    tituloExercicio.value = "";
    enunciadoExercicio.value = "";
    tipoExercicio.value = "multipla";
    respostaCorreta.value = "";
    imagemExercicio.value = "";
    previaImagemExercicio.innerHTML = "";
    document.querySelectorAll(".alternativa-exercicio").forEach(function (campo) {
        campo.value = "";
    });

    erroExercicio.classList.remove("visivel");
});

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