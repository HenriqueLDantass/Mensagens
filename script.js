var m1 = '<i>Os problemas são oportunidades para se mostrar o que sabe.</i>'
var m2 = '<i>Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.”</i>'
var m3 = '<i>Tente de novo. Fracasse de novo. Mas fracasse melhor</i>'
var m4 = '<i>É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo</i>'
var m5 = '<i>O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido</i>'
var m6 = '<i>Cada cliente é como se fosse primeiro e único.</i>'
var m7 ='<i>Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer</i>'
var m8 ='<i>Vender é construir uma ponte entre você e seu cliente e fazê-lo atravessar para o seu lado.</i>'
var m9 = '<i>Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos</i>'
var m10 ='<i>A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz</i>'

const mens = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10];

    function gerar(){
        let mensagens  = Math.floor(Math.random() * 10);
        aleatorio = mens[mensagens];
        document.querySelector('#area-texto').innerHTML = aleatorio;
    }
    