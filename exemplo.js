import consultaCep from './dist/consultaCEP';

export default class Exemplo {

    constructor() {
        document.getElementById('cep').addEventListener('blur', this.consultarCEP);
    }

    consultarCEP() {
        const cepInformado = document.getElementById('cep').value;
        consultaCep.buscar(cepInformado)
            .then((endereco) => {
                document.getElementById('logradouro').value = endereco.logradouro;
                document.getElementById('bairro').value = endereco.bairro;
                document.getElementById('cidade').value = endereco.cidade;
            })
            .catch(erro => console.error(erro));
    }

}

window.onload = () => {
    new Exemplo();
}