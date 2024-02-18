// 1. Langage interprété et orienté objet
// 2. Syntaxe basée sur ECMAScript
// 3. Variables et types de données
// 4. Fonctions
// 5. Portée des variables
// 6. Asynchronicité et callbacks
// 7. Manipulation du DOM
// 8. Gestion des erreurs
// 9. Modules et importations
// 10. Programmation orientée événement

// Exemple de variables
var a = 5;
let b = "Bonjour";
const PI = 3.14159;

// Exemple de fonction
function afficherMessage(message) {
    console.log(message);
}

// Appel de la fonction
afficherMessage("Hello from JavaScript   cccc!");

// Manipulation du DOM
document.getElementById("message").innerHTML = "Manipulation du DOM avec JavaScript";

// Gestion des erreurs
try {
    // Générer une erreur
    throw new Error("Une erreur s'est produite!");
} catch (error) {
    console.error("Erreur capturée:", error.message);
}

// Programmation orientée événement
document.getElementById("clickMe").addEventListener("click", function() {
    alert("Bouton cliqué!");
});
/* Ajout de styles pour l'icône maison */
.home-link {
    position: fixed;
    top: 10px;
    left: 10px;
    text-decoration: none;
}

.home-link img {
    width: 30px; /* Ajustez la taille de l'icône selon vos besoins */
    height: 30px;
}