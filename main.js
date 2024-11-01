const apiKey = '17084ec6bb48396404463f04';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para buscar taxa de câmbio da API
async function getExchangeRAte(daMoeda, paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if(data.result === 'success'){
            return data.conversion_rates[paraMoeda];
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
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;
});