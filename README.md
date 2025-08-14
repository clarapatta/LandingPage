### Nome do Projeto: TechForward 2025 - Landing Page

-----

### Descrição

Esta é a landing page oficial para o evento **TechForward 2025**. O projeto foi construído usando HTML, CSS e JavaScript puro para ser leve, rápido e com uma estética futurista. A página inclui um menu responsivo, um formulário de inscrição com validação em tempo real, um contador regressivo para o evento e uma seção de previsão do tempo, que busca dados da API do OpenWeatherMap.

-----

### Funcionalidades

  * **Design Responsivo**: O layout se adapta a diferentes tamanhos de tela (desktops, tablets e celulares).
  * **Contador Regressivo**: Um contador dinâmico mostra o tempo restante para o início do evento (26 de Outubro de 2025).
  * **Menu Lateral (Sidebar)**: Um menu hambúrguer para navegação em dispositivos móveis e uma sidebar para navegação.
  * **Formulário de Inscrição**: Um formulário simples com validação de campos (nome, e-mail e termos de uso) em tempo real.
  * **Previsão do Tempo**: Uma seção que exibe a previsão do tempo para a cidade de São Paulo, consumindo a API do OpenWeatherMap.

-----

### Estrutura de Arquivos

A estrutura do projeto é a seguinte:

```
├── css/
│   └── style.css
├── img/
│   ├── Ada.jpg
│   ├── Alan.jpg
│   ├── Grace.jpg
│   ├── Hendy.jpg
│   ├── Kath.jpg
│   ├── Logo.jpg
│   └── Xaden.jpg
├── js/
│   ├── scriptCountdown.js
│   ├── scriptForm.js
│   ├── scriptLayout.js
│   ├── scriptMenu.js
│   └── scriptWeather.js
└── index.html
```

-----

### Tecnologias Utilizadas

  * **HTML5**: Para a estrutura semântica da página.
  * **CSS3**: Para estilização, layout e animações.
  * **JavaScript (ES6+)**: Para adicionar interatividade, como o menu hambúrguer, validação do formulário, contador regressivo e a busca da API do clima.

-----

### Instalação

Como este é um projeto de landing page estática, a instalação é muito simples.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/techforward-landing-page.git
    ```
2.  **Abra o arquivo `index.html`:**
    Basta abrir o arquivo `index.html` em qualquer navegador web moderno para visualizar a landing page.

-----

### Configuração da API do OpenWeatherMap

A seção de previsão do tempo utiliza a API do OpenWeatherMap. Para que ela funcione, você precisa de uma chave de API.

1.  Crie uma conta no [OpenWeatherMap](https://openweathermap.org/api).
2.  Obtenha sua chave de API.
3.  Abra o arquivo `js/scriptWeather.js`.
4.  Substitua a chave de API na linha abaixo pela sua:
    ```javascript
    const apiKey = 'SUA_CHAVE_DE_API_AQUI'; // Substitua por sua chave
    ```

-----

### Contribuição

Contribuições, issues e sugestões de melhorias são sempre bem-vindas. Sinta-se à vontade para abrir uma issue ou enviar um pull request.

-----

### Licença

Este projeto está licenciado sob a licença **MIT**. Para mais detalhes, consulte o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) na raiz do projeto.
