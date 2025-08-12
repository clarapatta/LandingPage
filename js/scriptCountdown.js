document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ALVO DO EVENTO ---
    // Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
    const targetDate = new Date(2025, 9, 26, 9, 0, 0).getTime(); // 26 de Outubro de 2025, 09:00

    // --- SELETORES DOS ELEMENTOS DO HTML ---
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownDisplay = document.querySelector('.countdown-display');

    // --- FUNÇÃO PARA FORMATAR O TEMPO (adiciona um zero à esquerda se for menor que 10) ---
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    // --- FUNÇÃO PRINCIPAL DO COUNTDOWN ---
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Se a contagem regressiva terminou
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.innerHTML = `<h3 style="color: var(--color-primary);">O evento começou!</h3>`;
            return;
        }

        // Cálculos de tempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza o HTML com os novos valores
        daysEl.textContent = formatTime(days);
        hoursEl.textContent = formatTime(hours);
        minutesEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);
    };

    // --- INICIALIZAÇÃO ---
    // Inicia o contador imediatamente e depois atualiza a cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

});