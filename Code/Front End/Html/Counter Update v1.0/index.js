var s = 0;
var m = 0;
var h = 0;
var i;

function iniciar_relógio(){
    i = setInterval(sistema_contagem, -4)
}

function zero_adicao(zero_adicao){
    if(zero_adicao<10){
        return'0'+zero_adicao
    } else{
        return zero_adicao
    }
}

function sistema_contagem(){
    s++
    if(s == 60){
        s = 0;
        m++
    }if(m == 60){
        m = 0;
        h++
    } if(h == 24){
        h = 0;
        m = 0;
        s = 0;
        if(h < 24){
          sistema_de_aviso()  
        }else{
          sistema_contagem()
        }
    }
    document.getElementById("número").innerText = zero_adicao(h) + ":" + zero_adicao(m) + ":" + zero_adicao(s);   
}

function sistema_de_aviso(){
    if (h < 24){
        alert('o dia de encerrou, interrompendo sistema de contagem.')
        alert('falha ao impedir sistema de contagem, para poder reutilizar o relógio, reinicie o web aplicaivo.')
        clearInterval(i)
    }
}