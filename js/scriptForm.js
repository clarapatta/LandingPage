document.addEventListener('DOMContentLoaded', () => {

    // --- SELETORES DO FORMULÁRIO ---
    const form = document.querySelector('.form');
    if (!form) return; // Se não houver formulário na página, não faz nada

    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const termsCheckbox = document.getElementById('terms');
    const submitBtn = document.getElementById('submit-btn');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const termsError = document.getElementById('terms-error');

    // --- FUNÇÕES DE VALIDAÇÃO ---
    const validators = {
        name: () => {
            const isValid = nameInput.value.trim().length >= 3;
            nameError.textContent = isValid ? '' : 'O nome deve ter no mínimo 3 caracteres.';
            return isValid;
        },
        email: () => {
            // Expressão regular simples para validar o formato do e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(emailInput.value);
            emailError.textContent = isValid ? '' : 'Por favor, insira um e-mail válido.';
            return isValid;
        },
        terms: () => {
            const isValid = termsCheckbox.checked;
            termsError.textContent = isValid ? '' : 'Você deve concordar com os termos.';
            return isValid;
        }
    };

    // --- FUNÇÃO PARA VERIFICAR TODO O FORMULÁRIO E ATIVAR/DESATIVAR O BOTÃO ---
    const validateForm = () => {
        const isNameValid = validators.name();
        const isEmailValid = validators.email();
        const isTermsValid = validators.terms();

        // O botão só é habilitado se TODOS os campos forem válidos
        if (isNameValid && isEmailValid && isTermsValid) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    };

    // --- EVENT LISTENERS (VALIDAÇÃO EM TEMPO REAL) ---
    // Usamos 'input' para validar enquanto o usuário digita
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    // Usamos 'change' para o checkbox
    termsCheckbox.addEventListener('change', validateForm);

    // --- EVENT LISTENER PARA O ENVIO DO FORMULÁRIO ---
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real da página

        // Uma última verificação antes de "enviar"
        validateForm();
        if (submitBtn.disabled) {
            console.error('Tentativa de envio com o formulário inválido.');
            return;
        }

        // Se tudo estiver OK, exibe uma mensagem de sucesso
        form.innerHTML = `
        <div>
            <h2 class="success-title">Inscrição Realizada!</h2>
            <p class="success-message">Obrigado por se inscrever no TechForward 2025. Nos vemos no evento!</p>
        </div>
        `;
    });
});