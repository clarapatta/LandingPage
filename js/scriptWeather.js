document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAÇÃO DA API E LOCALIZAÇÃO ---
    const apiKey = 'b1a95d0366f076ed785f47c856c5a953';
    const city = 'São Paulo';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    // --- ELEMENTOS DO DOM ---
    const container = document.getElementById('weather-container');
    const statusMessage = document.getElementById('weather-status-message');
    
    // Mapeamento de IDs para os elementos que receberão os dados
    const elements = {
        cityName: document.getElementById('weather-city-name'),
        description: document.getElementById('weather-description'),
        mainIcon: document.getElementById('weather-main-icon'),
        mainTemp: document.getElementById('weather-main-temp'),
        feelsLike: document.getElementById('weather-feels-like'),
        humidity: document.getElementById('weather-humidity'),
        wind: document.getElementById('weather-wind'),
        pressure: document.getElementById('weather-pressure'),
        visibility: document.getElementById('weather-visibility'),
        clouds: document.getElementById('weather-clouds'),
        sunrise: document.getElementById('weather-sunrise'),
        sunset: document.getElementById('weather-sunset'),
    };

    // --- FUNÇÕES AUXILIARES ---

    /**
     * Formata um timestamp UNIX para uma string de tempo (HH:MM).
     * @param {number} unixTimestamp - O timestamp em segundos.
     * @returns {string} O tempo formatado.
     */
    const formatTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // --- FUNÇÃO PRINCIPAL ---

    /**
     * Busca os dados da API, processa e atualiza o DOM.
     */
    const fetchWeather = async () => {
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error(`Erro de rede: ${response.statusText}`);
            }
            const data = await response.json();

            // Atualiza o DOM com os dados recebidos
            elements.cityName.textContent = `${data.name}, ${data.sys.country}`;
            elements.description.textContent = data.weather[0].description;
            elements.mainIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            elements.mainTemp.textContent = `${Math.round(data.main.temp)}°C`;
            elements.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
            elements.humidity.textContent = `${data.main.humidity}%`;
            elements.wind.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
            elements.pressure.textContent = `${data.main.pressure} hPa`;
            elements.visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
            elements.clouds.textContent = `${data.clouds.all}%`;
            elements.sunrise.textContent = formatTime(data.sys.sunrise);
            elements.sunset.textContent = formatTime(data.sys.sunset);

            // Esconde a mensagem de "carregando" e exibe o container com os dados
            statusMessage.style.display = 'none';
            container.classList.remove('hidden');

        } catch (error) {
            console.error('Falha ao buscar dados do clima:', error);
            statusMessage.textContent = 'Não foi possível carregar os dados do clima. Tente novamente mais tarde.';
        }
    };

    // --- INICIALIZAÇÃO ---
    fetchWeather();
});