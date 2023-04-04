var form = document.getElementById('formulario')
var t_busca = document.getElementById('busca')

const result_lista = [
    {
    'nome': 'Gustavo',
    'numero_pro': '19442023',
    'data': '10/02/2023'
    },
    {
        'nome': 'Joao',
        'numero_pro': '78232023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Maria',
        'numero_pro': '87652023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Gustavo',
        'numero_pro': '19442023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Joao',
        'numero_pro': '78232023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Maria',
        'numero_pro': '87652023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Gustavo',
        'numero_pro': '19442023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Joao',
        'numero_pro': '78232023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Maria',
        'numero_pro': '87652023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Gustavo',
        'numero_pro': '19442023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Joao',
        'numero_pro': '78232023',
        'data': '10/02/2023'
    },
    {
        'nome': 'Maria',
        'numero_pro': '87652023',
        'data': '10/02/2023'
    }
]
const resultado = ''
var res = document.getElementById('resultado')
var texto_fim = document.getElementById('fim')
res.style.border = 'none'
texto_fim.style.visibility = 'hidden'


form.addEventListener('submit', function(e) { 
    // alerta o valor do t_busca
    // alert(t_busca.value);

    // impede o envio do form
    e.preventDefault();

    console.log(t_busca.value) 
    main();

    /*
    // altera texto caso não seja vazio
    if (t_busca.value != '') {
        if (t_busca.value == lista.nome || t_busca.value == lista.numero_pro || t_busca.value == lista.data)
            nome[0].innerText = 'Nome Interessado: ' + lista.nome
            num[0].innerText = 'Numero Processo: ' + lista.numero_pro
            data[0].innerText = 'Data: ' + lista.data
    }
    */
})

function main() {
    if (result_lista.length > 0) {
        res.style.border = '2px solid black'
        texto_fim.style.visibility = 'visible'
        res.innerHTML = `<div class="resultado_quant"><p>Foram encontrados: ${result_lista.length} processos.</p></div>`
        construir();
    }
}

function construir() {

    for (var i = 0; i < result_lista.length; i++) {
        res.innerHTML += `<div>
            <button class="resultado_indi">
                <div class="resultado_indi_informacoes">
                    <p class="resultado_nome">${result_lista[i].nome}</p>
                    <p class="resultado_numero">${result_lista[i].numero_pro}</p>
                    <p class="resultado_data">${result_lista[i].data}</p>
                </div>
                <div class="resultado_indi_icone">
                    <img src="./assets/img/seta-para-a-direita.png" alt="Icone Seta">
                </div>
            </button>
        </div>`
    } 

    //identificandoDivs()
}


$("button").click(function() {
    var t = $(this).attr('id');
    console.log(text("ID = " + t))
})

function pagina_processo(n_proc) {
    console.log(n_proc)
}
