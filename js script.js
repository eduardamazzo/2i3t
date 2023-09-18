escrever = msg => alert(msg);
let a = 0;
let b= 0;
let resultado = 0;
let executar = "";
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div= (a,b) => a / b;
raiz = a => Math.sqrt(a);
equaçao2Grau = (a,b,c) => {
    let delta = sub(mult(b,b) ,mult(4,mult(a,c)));
    if (delta < 0 ) return "Nao possui raiz real.";
    if (delta == 0) return div (-b,mult(2,a)) ;
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a) ) +
            "x2 ="    + div (sub(-b,raiz(delta)),mult(2,a));

}
const set_resultado = document.getElementById("resultado").value = resultado;


function calcular (){
    if(executar != ""){
    if(executar = "+") mostrar_resultado (soma(a,b));
    if(executar = "-") mostrar_resultado (sub(a,b));
    if(executar = "/") mostrar_resultado (div(a,b));
    if(executar = "*") mostrar_resultado (mult(a,b));
    }
}

function digitando(tecla){
    if(executar == ""){
        a += tecla;
        alert
 } else{
    b 
    }
}

