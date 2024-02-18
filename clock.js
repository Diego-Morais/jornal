function updateClock() {
    var clockElement = document.getElementById('clock-widget');
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Adiciona um zero à esquerda se for menor que 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // Adiciona a data ao texto da hora
    formattedTime += " - " + currentDate.toLocaleDateString();

    // Atualiza o texto exibido com a hora e data atuais
    clockElement.textContent = formattedTime;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualiza o relógio quando a página é carregada
window.onload = function () {
    updateClock();
};
