function carrega(){
    let msg = document.getElementById('msg') // Atribuindo a Div#msg a variavel 'msg'
    let foto = document.querySelector('div#foto') // Atribuindo a Div#foto a variavel 'foto'
    const data = new Date() // Importando a Bibilioteca Date 
    const hora = data.getHours() // Atribuindo a Hora na Variavel 'hora' 
    //var hora = 2 // variavel de teste dos horarios!

    
    msg.innerHTML = `Agora São ${hora} Hora.` // "Formatando" a Menssagem Com a Hora de Computador

    if (hora >= 0 && hora <= 6){ // Validação do Horario Para a Mudança do Plano de Fundo e Menssagem
        foto.innerHTML = 'Boa Madrugada!' // Mudando a Menssagem de Acordo Com a Hora do Dia 
        document.body.style.background = '#084b5f'
    }else if (hora >= 6 && hora <= 12){
        foto.innerHTML = 'Bom Dia!'
        document.body.style.background = '#e2cd9f'
    }else if (hora >=12 && hora <=18){
        foto.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#b9846f'
    }else {
        foto.innerHTML = 'Boa Noite!'
        document.body.style.background = '#515154'
    }

}
