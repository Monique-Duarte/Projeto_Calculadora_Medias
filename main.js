const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji comemorando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>'
const spanreprovado = '<span class ="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

//adicionando linhas e colunas
let linhas = ' ';

form.addEventListener('submit',function(e){
    e.preventDefault();  
        
    adicionaLinha();
    atualizaTabela();
    atualizaMedia ();
});

function adicionaLinha () {
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    if(atividades.includes(inputNome.value)){
        alert(`A atividade: ${inputNome.value} já foi cadastrada`);
    }else {
    atividades.push(inputNome.value);
    notas.push(parseFloat(inputNota.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= notaMinima ? imgAprovado: imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputNota.value = '';
    }
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia () {
    const mediaFinal = calculaMedia ();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanreprovado;
}

function calculaMedia () {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i ++){
        somaNotas += notas [i];
    }
        return somaNotas / notas.length;
}