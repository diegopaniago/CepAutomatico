# CepAutomatico
## Uma biblioteca para consulta de endereço informando o CEP utilizando a API Postmon.

### Essa biblioteca retorna os dados no seguinte formato:
  ```
    {
			bairro: bairro,
			cidade: cidade, 
			logradouro: logradouro, 
			estado_info: {
				area_km2: area_km2, 
				codigo_ibge: codigo_ibge, 
				nome: nome
			}, 
			cep: cep, 
			cidade_info: {
				area_km2: area_km2, 
				codigo_ibge: codigo_ibge
			}, 
			estado: estado
		}
  ```
  
  - Referência da API https://github.com/PostmonAPI/postmon
