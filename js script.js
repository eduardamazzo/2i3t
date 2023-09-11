escrever = msg => alert(msg);
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
escrever(equaçao2Grau(2,3,5));
