function veri(){
    let ini = document.querySelector('input#inicio') // Pegando as Informaçoes do Input e passando para a Variavel 'ini' 
    let fi = document.querySelector('input#fim') // Pegando as Informaçoes do Input e passando para a Variavel 'fi' 
    let pass = document.querySelector('input#passo') // Pegando as Informaçoes do Input e passando para a Variavel 'pass' 
    let res = document.querySelector('div#res') // Pegando as Informaçoes da Div e passando para a Variavel 'res' 

    res.innerHTML = ' ' // Limpando a Variavel res

    if ( ini.value.length == 0 || fi.value.length == 0 || pass.value.length == 0){ //validação de espaços em brancos
        res.innerHTML = 'Impossivel Contar! Faltando Dados!'
    }else{
        let i = Number(ini.value) // Convertendo Valores Strings em Number
        let f = Number(fi.value) // Convertendo Valores Strings em Number
        let p = Number(pass.value) // Convertendo Valores Strings em Number

        if( p <= 0){ // Validando para Não Ser Passado Valores Negativos ou Valor 0 
            alert('Passo Invalido! Considerando Passo 1')
            p = 1 // Atribuindo Automaticamente Valor 1
        }

        if ( i < f ){
            //Estrutura de Repedição com For 
            //For Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}` // \u{1f449} == emoticon || Mudando a Variavel res
            }
        }else{
            //For Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }





}