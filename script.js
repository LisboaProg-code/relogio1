
/* variaveis hora, minuto e segundo */

function atualizarHorario(){
     /* Hora, minuto , segundo do sistema*/
     const agora = new Date()
     const hora_agora = agora.getHours()
     const min_agora = agora.getMinutes()
     const seg_agora = agora.getSeconds()

     const hh = document.getElementById('hh')
     const mm = document.getElementById('mm')
     const ss = document.getElementById('ss')
     
     const hora_dot = document.getElementsByClassName('hora_dot')[0]
     const min_dot = document.getElementsByClassName('min_dot')[0]
     const seg_dot = document.getElementsByClassName('seg_dot')[0]
     
     /* Hora, minuto e segundo no site */
     hora.innerText = `${hora_agora < 10 ? '0' : '' }${hora_agora}`
     minuto.innerText = `${min_agora < 10 ? '0' : '' }${min_agora}`
     segundo.innerText = `${seg_agora < 10 ? '0': '' }${seg_agora}`

     hh.style.strokeDashoffset = 440 - (440 * hora_agora) / 24
     mm.style.strokeDashoffset = 440 - (440 * min_agora) / 60
     ss.style.strokeDashoffset = 440 - (440 * seg_agora) / 60


}

/* Vai chamar a função a cada segundo */
setInterval(atualizarHorario, 1000)

/* Vai chamar a função ao carregar a pagina */
atualizarHorario()