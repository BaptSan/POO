var marque = [];
var laMarque = "";
var maPlace = -1;


// function Produit (nomP, prix, quantite){
// 	this.nomProduit = nom;
// 	this.prix = prix;
// 	this.quantite = quantite;
// }

$('#myBtn').click(ajoutMarque);
$('#myBtnProduit').click(ajoutProduits);

function init(){
	$('.ligneMarque').click(selectionnerMarque);	
}

function selectionnerMarque(){
	laMarque = $(this).html();
	$('#titreMarque').html(laMarque);
	$('#infoProduits').css("display","block");
}

function ajoutMarque(){
	marque.push( new Marque($('#addM').val()));
	afficherMarques();
	init();
}

function afficherMarques(){
	$('#myUl').html("");
	for (var i = 0 ; i < marque.length ; i++){
		$('#myUl').append('<li class="ligneMarque">'+marque[i].nom+'</li>');
	}
}

function ajoutProduits(){
	for (var i = 0 ; i < marque.length ; i++){
		if (marque[i].nom == laMarque){
			maPlace = i;
		}
	}
}

function Produit (nomP,prixP,qteP){
	this.nomProduit = nomP;
	this.prixProduit = prixP;
	this.qteProduit= qteP;
}

function Marque(nomM) {
	this.nom = nomM;
	this.produits = [];
}





