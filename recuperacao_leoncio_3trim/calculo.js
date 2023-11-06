//as funções servem para executar tarefas que são chamadas por algum gatilho, nesse caso é chamada quando clica no botão que está no html
//tudo que ta dentro da função é o que vai acontecer quando o botão que chama ela for clicado
function InscreverEstudante(){
    //armazena em uma variavel o valor que o usuário digitar na janela de prompt que aparece quando clica no botão
    let idadeDoEstudante = prompt("Qual a idade do estudante?");
    let idadeDoEstudante = prompt ("16 até 17 anos");
    let idadeDoEstudante = prompt("14 até 15 anos"); 
    


    mostraResultado.textContent =("Se a idade do estudante é adequada");
}


//LEIA ANTES DE COMEÇAR:
//Como não estamos usando banco de dados, toda vez que o site for recarregado o valor das variáveis volta a ser zero, não se preocupe com isso
//para realizar o calculo de quantos times podem ser feitos, use o parseInt() para forçar o resultado ser um número inteiro e ignorar as sobras do cálculo.

