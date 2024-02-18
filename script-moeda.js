function convertCurrency() {
    const amountInput = document.getElementById('amount');
    const currencySelect = document.getElementById('currency');
    const convertedAmountSpan = document.getElementById('converted-amount');

    const amount = parseFloat(amountInput.value);
    const targetCurrency = currencySelect.value;

    // Substitua 'SUA_API_KEY' pela chave real fornecida pela ExchangeRate-API
    const apiKey = '3f28bc8d2efdc3be92fe2f9d';
    const endpoint = `https://open.er-api.com/v6/latest/BRL`;

    fetch(`${endpoint}?apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[targetCurrency];
            const convertedAmount = (amount / exchangeRate).toFixed(2);
            convertedAmountSpan.textContent = `${convertedAmount} ${targetCurrency}`;
        })
        .catch(error => console.error('Erro ao obter taxa de câmbio:', error));
}

function openModal() {
    // Lógica para abrir o modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    // Lógica para fechar o modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Fechar o modal se clicar fora dele
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};