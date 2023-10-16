let lista_nome = [];
function atualizar_lista(){
    let nomes = "";
    if(lista_nome.length > 0){
        for(let i=0; i < lista_nome.length; i++){
            nomes += lista_nome[i] + "<br>";
        }
        document.getElementById("lista").innerHTML = nomes;
        return;
    }
    document.getElementById("lista").innerHTML = "Lista Vazia";
}

function insere_ultimo (){
    let nome = document.getElementById("nome").value;
    if(nome != ""){
        lista_nome.push(nome);
        atualizar_lista();

    }
}
function inserir_inicio (){
    let nome = document.getElementById("nome").value;
    if (nome != "") {
        lista_nome.unshift(nome);
        atualizar_lista();
    }
}

        
        function deletar_ultimo() {
            lista_nome.pop();
            atualizar_lista();
        }
        function deletar_inicio() {
            lista_nome.shift();
            atualizar_lista();
        }
        function limpar_lista(){
            lista_nome = [];
            atualizar_lista ();
            
        }
        
        function ordena_az() {
         lista_nome.sort();
         atualizar_lista();
        }

function ordena_za() {
    lista_nome.reverse();
    atualizar_lista();
}
