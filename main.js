const apiKey = '17084ec6bb48396404463f04';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para buscar taxa de câmbio da API
async function getExchangeRate(moedaOrigem, moedaDestino){
    try{
        const response = await fetch(`${apiURL}${moedaOrigem}`);
        const data = await response.json();

        if(data.result === 'success'){
            return data.conversion_rates[moedaDestino];
            }else{
                throw new Error('Erro ao buscar a taxa de câmbio');
            }

    }catch(error){
        console.error("Erro: ", error);
        return null;
    }
}

document.getElementById('conversor-Form').addEventListener('submit', async function(event){
    event.preventDefault();

    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
    
    // Função para buscar câmbio de APi
    const exchangeRate = await getExchangeRate(moedaOrigem, moedaDestino);

    if(exchangeRate){
        const convertedValue = valor * exchangeRate;
        //Exibir o resultado
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${moedaDestino}`;

    }else{
        alert("Erro ao buscar a cotação informada. Tente novamente")
    }
});


