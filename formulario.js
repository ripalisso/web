function funcao_callback(conteudo) {
    // console.log(conteudo)
    document.getElementById('rua').value = conteudo.logradouro
    document.getElementById('bairro').value = conteudo.bairro
    document.getElementById('cidade').value = conteudo.localidade
    document.getElementById('uf').value = conteudo.uf
    document.getElementById('ibge').value = conteudo.ibge
}

/*
    Expressões Regulares:

    / Começa e termina uma expressão regular
    [] Define um conjunto 
    {} Define uma propiedade
    () Defune um grupo
    /+* Quantificadores
    . Curinga = corresponde a qualquer careactere
    ^ Define inicio de um padrão e também serve para negra um grupo
    $ Define o final de um padrão
    \d corresponde a um caractere numérico (digito).
    \D corresponde a um caractere nção numérico (letra)
    \w corresponde a qualquer caractere alfanumérico: A-Z, a-z, 0-9
    \W corresponde a qualquer caractere nãoalfanumérico.
    \s corresponde a um caractere espaço, tab, quebra de linha
    \S corresponde a qualquer caractere que não seja espaço, tab, ...
    \n quebra de linha
    \t tab
    \0 null
    [^] corresponde a qualquer caractere, incluindo quebra de linha

    g determina que a busca deve retornar todos os padrões encontrados
    i determina que a busca não deve diferenciar letras maiúsculas de minúsculas
    u permite suporte a caracteres padrão unicode

    Métodos que utilizam expressões regulares.
    replace faz uma pesquisa na string pela correspondência do padrão
            e substitui por outra string
    test    Faz uma pesquisa pela string e retorna true ou false caso não tenha encontrado o padrão
    exec    Faz uma pesquisa pela string e retorna null ou um array contendo a posição do padrão na string

*/

function limpa_formulario() {
    document.getElementById("rua").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("uf").value = ""
    document.getElementById("ibge").value = ""

}

function pesquisarcep(valor) {

    var cep = valor.replace(/\D/g, "")

    if (cep != "") {

        // Expressão regular para validar o CEP
        var validacep = /^[0-9]{8}$/

        // valida o formato do cep usando a expressão
        if (validacep.test(cep)) {


            document.getElementById("rua").placeholder = "..."
            document.getElementById("bairro").placeholder = "..."
            document.getElementById("cidade").placeholder = "..."
            document.getElementById("uf").placeholder = "..."
            document.getElementById("ibge").placeholder = "..."

            // cria um elemento javscript
            var script = document.createElement("script")

            // sincroniza com o callback
            script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=funcao_callback"

            // insere o script no documento e carrega o conteúdo
            document.body.appendChild(script)


        } else {
            // o cep é inválido
            limpa_formulario()
            alert("Formato de CEP inválido")
        }
    } else {
        // cep vazio, limpa o formulário
        limpa_formulario()
    }
}

