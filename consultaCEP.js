import axios from 'axios';

export default class ConsultaCep {

	static get apiDeCEP() {
		return 'http://api.postmon.com.br/v1/cep';
	}

	static buscar(cep) {
		const cepSemMascara = cep.replace('-', '');
		return new Promise((resolve, reject) => {
			axios.get(`${this.apiDeCEP}/${cepSemMascara}`)
				.then((resultadoDaPesquisa) => {
					const enderecoParaRetornar = this.criarEnderecoParaRetornar(resultadoDaPesquisa.data);
					resolve(enderecoParaRetornar);
				})
				.catch((erro) => {
					reject(erro);
				});
		});
	}

	static criarEnderecoParaRetornar(resultadoDaPesquisa) {
		let endereco = {
			bairro: resultadoDaPesquisa.bairro,
			cidade: resultadoDaPesquisa.cidade, 
			logradouro: resultadoDaPesquisa.logradouro, 
			estado_info: {
				area_km2: resultadoDaPesquisa.estado_info.area_km2, 
				codigo_ibge: resultadoDaPesquisa.estado_info.codigo_ibge, 
				nome: resultadoDaPesquisa.estado_info.nome
			}, 
			cep: resultadoDaPesquisa.cep, 
			cidade_info: {
				area_km2: resultadoDaPesquisa.cidade_info.area_km2, 
				codigo_ibge: resultadoDaPesquisa.cidade_info.codigo_ibge
			}, 
			estado: resultadoDaPesquisa.estado
		};
		return endereco;
	}
}