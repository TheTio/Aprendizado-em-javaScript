function verificar(){
    const data = new Date() // Importando a Bibilioteca Date
    const ano = data.getFullYear() // Atribuindo o Ano Atual na Variavel 'ano'
    let fano = document.querySelector('input#txtano') // Pegando do Input e Atribuindo na Variavel 'fano'
    let res = document.querySelector('div#res') //  Colocando a DIV na Variavel 'res'

    if (Number(fano.value) < 1930 || Number(fano.value) > ano){ // Limitando para Começar Apartir de 1930 e Não Passar do Ano Atual
        alert('[ERRO!] Verifique os Dados e Tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // Definindo o Sexo da Pessoas Por Radio
        var idade = ano - Number(fano.value)
        var gene = ''
        var tipo = ''
        if (fsex[0].checked){ //Validação Masculina
            gene = 'Homen'
            if (idade >=0 && idade < 10){
                tipo = 'Criança'
            }else if (idade < 21) {
                tipo = 'Jovem'
            }else if (idade < 50){
                tipo = 'Adulto'
            }else {
                tipo = 'Idoso'
            }
        }else if (fsex[1].checked){ //Validação Feminina
            gene = 'Mulher'
            if (idade >=0 && idade < 10){
                tipo = 'Criança'
            }else if (idade < 21) {
                tipo = 'Jovem'
            }else if (idade < 50){
                tipo = 'Adulta'
            }else {
                tipo = 'Idosa'
            }
        }
        res.innerHTML = `Idade: ${idade} <br> Sexo: ${gene} <br> Fase: ${tipo}` // Alterando a DIV com Novas Informações
    }
}