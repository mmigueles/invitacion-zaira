const fecha = new Date("December 12, 2026 21:30:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fecha - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferencia % (1000*60*60))/(1000*60));

    const segundos = Math.floor((diferencia % (1000*60))/1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

},1000);