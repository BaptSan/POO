function addMarq(){
	if ($('#addM').val() != '') {
		$('#addM').val();
		$('#myUl').append('<li>'+$('#addM').val()+'</li>');
		$('#addM').val('');
	}
}
$('#myBtn').click(addMarq);

function addProduit(){
	if ($('addP').val() & $('addPr').val() & $('addQ').val() != '') {
		$('addP').val();
		$('addPr').val();
		$('addQ').val();
		
	}
}



/*var produit = {
	init: function(nom, prix, quantite){
	this.nom = '',
	this.prix = '',
	this.quantite: 0 ,
}
}
var marque = {
	nom:'Addidas',
	produits:'',
}*/







