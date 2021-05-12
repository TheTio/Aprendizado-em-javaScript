function tabuada(){
    let num = document.getElementById('txtn') // Declarando o Input na Variavel 'num'
    let tab = document.getElementById('seltab') // Declarando o Select na Variavel 'tab'
    
    //validação
    if (num.value.length == 0){   //validadando se  o Input Esta Vazio
        alert('Erro! Digite Um Numero!')        
    }else{
        let n = Number(num.value) // Converte a String em Number
        let c = 1
        tab.innerHTML = ' ' // Esvazia o Select
        while (c <=10){
            let item =document.createElement('option') // Cria um elemento no Select
            item.text = `${n} X ${c} = ${n*c}` // Adiciona no Select e já Calcula
            tab.appendChild(item) // Adiciona no Select 
            c++
        }

    }
}
