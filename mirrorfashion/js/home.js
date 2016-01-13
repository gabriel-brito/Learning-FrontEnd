document.querySelector('#form-busca').onsubmit = function() {
	if (document.querySelector('#q').value == '') { 
		document.querySelector('#form-busca').style.background = 'red';
		return false;
	}
}

document.querySelector('#form-busca').onsubmit = validaBusca;

