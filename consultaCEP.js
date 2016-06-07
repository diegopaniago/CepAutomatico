function consultarCEP(){
	var cep = $('#cep').val();
	$.ajax({
		url: 'http://api.postmon.com.br/v1/cep/'+cep,
		type: 'GET'
	})
	.done(function(json) {
		$('#logradouro').val(json['logradouro']);
		$('#bairro').val(json['bairro']);
		$('#cidade').val(json['cidade']);
		$('#complemento').val(json['complemento']);
	})
	.fail(function() {
		var cep = $('#cep').val();
		console.log('Erro au consultar o CEP ' + cep);
	});	
}