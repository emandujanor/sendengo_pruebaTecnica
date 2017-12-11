const formPublica = document.getElementById("form_publica");
const formRegistra = document.getElementById("form_registra");
const textPrincipal = document.getElementById("principal_text")
const btnPublica = document.getElementById("btn_publica");
const btnRegistra = document.getElementById("btn_registraflota");
const btnCerrarPublica = document.getElementById("cerrar_publica");
const btnCerrarRegistra = document.getElementById("cerrar_registra");
$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('select').material_select();
	Materialize.updateTextFields();
})
//muestra formulario Publica tu Carga
function mostrarFormPublica() {
	formPublica.style.display = "block";
	textPrincipal.style.display = "none";
	formRegistra.style.display = "none";
}
//muestra formulario Registra tu Flota
function mostrarFormRegistra() {
	formRegistra.style.display = "block";
	textPrincipal.style.display = "none";
	formPublica.style.display = "none";
}
//oculta los formularios y muestra el texto principal
function mostrartextPrincipal() {
	formRegistra.style.display = "none";
	textPrincipal.style.display = "block";
	formPublica.style.display = "none";
}
btnPublica.addEventListener("click", mostrarFormPublica)
btnRegistra.addEventListener("click", mostrarFormRegistra)
btnCerrarPublica.addEventListener("click", mostrartextPrincipal)
btnCerrarRegistra.addEventListener("click", mostrartextPrincipal)
