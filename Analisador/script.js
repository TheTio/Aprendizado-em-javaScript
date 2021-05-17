let num = [] //Array Vazio!
let res = document.querySelector('div#res')
let adc = document.querySelector('input#txtn')
let tab = document.querySelector('select#seltab')

function isNumero(n){ // Validando os Valores que São Passados pelo Input
    if (Number(n) >= 1 && Number(n) <= 100){ 
        return true
    }else{
        return false
    }
}

function inLista(n, l){ // Buscando no Array se o Numero Ja Existe
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){ // Adicionando Valores no Array
    if(isNumero(adc.value) && !inLista(adc.value, num)){  
        num.push(Number(adc.value))
        let item = document.createElement('option')
        item.text = `Valor ${adc.value} Adicionado.`
        tab.appendChild(item)
        res.innerHTML = ' '
    }else{
        alert('Valor Inválido ou Já Encontrado na Lista!')
    }
    adc.value = ' '
    adc.focus()
}

function Resultado(){ //Mostra de dados!
    if(num.length ==  0){
        alert('Insira Dados Antes de Finalizar!')
    }else{

        let tot = num.length
        let maior = num[0]
        let menor = num[0]
        let soma = 0
        let media

        for(let pos in num){
            soma += num[pos]
            if(num[pos] > maior){
                maior = num[pos]
            }
            if(num[pos] < menor){
                menor = num[pos]
            }
        }
        media = soma / tot

        res.innerHTML = `Ao Todo Temos ${tot} Números Informados <br>`
        res.innerHTML += `O Maior Valor é ${maior} <br>`
        res.innerHTML += `O Menor Valor é ${menor}<br>`
        res.innerHTML += `Somando Todos os Valores Temos ${soma} <br>`
        res.innerHTML += `A Média dos Valores é: ${media}`   
    }
}

function deletaOption(){
    
    for (let cont in num){   
    
        for (cont ; cont <= num[cont]; cont++){ // Limpando o Option do Select
            tab.remove('option')    
        } 
        cont = -1
    }
    
}

function LimparArray(){ // Função para limpar Array
    let cont = -1

    for ( cont in num){ 

        if (cont = num){
            num.splice(cont)    
       }
    }  
}

function Limpar(){
    if (num.length == 0){

        alert('Já esta Limpo!')

    }else{
        num.sort()
        deletaOption()
        LimparArray()
        res.innerHTML = 'Analisando...'
    }
} 