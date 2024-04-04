const formContato = document.getElementById('form-control');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const campoInput = document.getElementById('campo');
const listaDadosElement = document.getElementById('mens-list');
const limparDadosButton = document.getElementById('limpar-dados');
const messagesKey = 'messages';
const mensagemElement = document.getElementById('mensagem');

// Função para poder exibir as mensagens na página
function exibirMensagens() {

    let messages = JSON.parse(localStorage.getItem(messagesKey)) || [];

    let messageHTML = '';
    if (messages.length > 0) {
        messages.forEach(function (message) {
            messageHTML += `
                <div class="mensagem-item">
                    <strong class="text-itens">Nome:</strong> ${message.name}<br>
                    <strong class="text-itens">E-mail:</strong> ${message.email}<br>
                    <strong class="text-itens">Mensagem:</strong> ${message.message}
                </div>            
            `;
        });
    } else {
        messageHTML = '<div>Nenhuma mensagem encontrada.</div>';
    }

    listaDadosElement.innerHTML = messageHTML;
}

function exibirMensagem(text, element) {
    element.textContent = text;
    element.classList.add('show');
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000);
}

// Função que adicionaa o envio do formulario
formContato.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: campoInput.value
    };

    let messages = JSON.parse(localStorage.getItem(messagesKey)) || [];

    messages.push(formData);

    localStorage.setItem(messagesKey, JSON.stringify(messages));

    nameInput.value = '';
    emailInput.value = '';
    campoInput.value = '';

    exibirMensagem('Mensagem enviada com sucesso!', mensagemElement);

    exibirMensagens();
});

limparDadosButton.addEventListener('click', function () {
    localStorage.removeItem(messagesKey);
    listaDadosElement.innerHTML = '';
    exibirMensagem('Mensagens limpas com sucesso!', mensagemElement);
});

exibirMensagens();