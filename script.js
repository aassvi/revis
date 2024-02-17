document.addEventListener('DOMContentLoaded', function () {
     // Exemple : Changez le texte du paragraphe avec l'id "exempleParagraphe1"
     var exempleParagraphe1 = document.getElementById('exempleParagraphe1');
 
     if (exempleParagraphe1) {
         exempleParagraphe1.textContent = 'Le texte du paragraphe 1 a été modifié avec JavaScript!';
         console.log('Le script a été exécuté.');
     }
 
     // Récupérer l'élément paragraphe avec l'id "exempleParagraphe2"
     var exempleParagraphe2 = document.getElementById('exempleParagraphe2');
 
     // Vérifier si l'élément existe
     if (exempleParagraphe2) {
         // Récupérer le bouton
         var changeTextButton = document.getElementById('changeTextButton');
 
         // Ajouter un gestionnaire d'événement clic au bouton
         changeTextButton.addEventListener('click', function () {
             // Demander à l'utilisateur d'entrer du texte
             var userInput = prompt('Entrez du texte pour le paragraphe 2 :');
 
             // Mettre à jour le contenu du paragraphe avec la réponse de l'utilisateur
             if (userInput !== null) {
                 exempleParagraphe2.textContent = 'Vous avez saisi : ' + userInput;
                 console.log('Le script a été exécuté.');
             } else {
                 console.log('L\'utilisateur a annulé ou entré une valeur vide.');
             }
         });
     }
 
     // Tableau pour stocker les objets
     var objectsArray = [];
 
     // Vérifier si les éléments existent pour la troisième section
     var createObjectButton = document.getElementById('createObjectButton');
     var objectPropertiesParagraph = document.getElementById('objectProperties');
 
     if (createObjectButton && objectPropertiesParagraph) {
         createObjectButton.addEventListener('click', function () {
             // Appeler la fonction pour créer un objet et l'ajouter au tableau
             createAndAddObject();
         });
     }
     
     // Récupérer les éléments de la quatrième section
     var addObjectButton = document.getElementById('addObjectButton');
     var objectTableParagraph = document.getElementById('objectTable');
 
     // Vérifier si les éléments existent pour la quatrième section
     if (addObjectButton && objectTableParagraph) {
         addObjectButton.addEventListener('click', function () {
             // Appeler la fonction pour ajouter un nouvel objet au tableau
             addObjectToTable();
         });
     }
     // Fonction pour ajouter un nouvel objet au tableau
function addObjectToTable() {
     // Avant l'ajout
     var beforeAddition = 'Avant ajout : ' + objectsArray.map(obj => obj.property + ': ' + obj.value).join(' | ');
 
     // Demander à l'utilisateur de définir les propriétés et les valeurs du nouvel objet
     var newProperty = prompt('Entrez le nom de la propriété :');
     var newValue = prompt('Entrez la valeur de la propriété :');
 
     // Créer un nouvel objet JavaScript avec les propriétés définies par l'utilisateur
     var newObject = {
         property: newProperty,
         value: newValue
     };
 
     // Ajouter le nouvel objet au tableau
     objectsArray.push(newObject);
 
     // Après l'ajout
     var afterAddition = 'Après ajout : ' + getPropertiesValues(objectsArray).join(', ');
 
     // Afficher le contenu du tableau avant et après l'ajout dans le paragraphe
     objectTableParagraph.textContent = beforeAddition + '\n' + afterAddition;
 
     // Mettre à jour l'affichage des objets
     displayObjectsArray();
 }
 
 
     // Récupérer les éléments pour la cinquième section
     var removeObjectButton = document.getElementById('removeObjectButton');
     var removeObjectInput = document.getElementById('removeObjectInput');
     var removeObjectTableParagraph = document.getElementById('objectTableRemove');
 
     // Vérifier si les éléments existent pour la cinquième section
     if (removeObjectButton && removeObjectInput && removeObjectTableParagraph) {
         removeObjectButton.addEventListener('click', function () {
             // Appeler la fonction pour supprimer une propriété ou une valeur du tableau
             removeObjectFromTable();
         });
     }
 
     // Fonction pour créer un objet et l'ajouter au tableau
     function createAndAddObject() {
         var property1 = prompt('Entrez le nom de la propriété 1 :');
         var value1 = prompt('Entrez la valeur de la propriété 1 :');
         var property2 = prompt('Entrez le nom de la propriété 2 :');
         var value2 = prompt('Entrez la valeur de la propriété 2 :');
 
         var userDefinedObject = {
             [property1]: value1,
             [property2]: value2
         };
 
         var propertiesArray = Object.keys(userDefinedObject);
         var valuesArray = Object.values(userDefinedObject);
 
         objectPropertiesParagraph.textContent = 'Propriétés : ' + propertiesArray.join(', ') +
             '\nValeurs : ' + valuesArray.join(', ');
 
         propertiesArray.forEach(function (property) {
             var existingIndex = objectsArray.findIndex(function (obj) {
                 return obj.property === property;
             });
 
             if (existingIndex !== -1) {
                 var keepOldValue = confirm('La propriété ' + property + ' existe déjà. Voulez-vous conserver la valeur existante?');
                 if (keepOldValue) {
                     objectsArray[existingIndex].value += ', ' + userDefinedObject[property];
                 } else {
                     objectsArray[existingIndex].value = userDefinedObject[property];
                 }
             } else {
                 objectsArray.push({ property: property, value: userDefinedObject[property] });
             }
         });
 
         displayObjectsArray();
     }
 
    // Fonction pour ajouter un nouvel objet au tableau
function addObjectToTable() {
     // Avant l'ajout
     var beforeAddition = 'Avant ajout : ' + objectsArray.map(obj => obj.property + ': ' + obj.value).join(' | ');
 
     // Demander à l'utilisateur de définir les propriétés et les valeurs du nouvel objet
     var newProperty = prompt('Entrez le nom de la propriété :');
     var newValue = prompt('Entrez la valeur de la propriété :');
 
     // Créer un nouvel objet JavaScript avec les propriétés définies par l'utilisateur
     var newObject = {
         property: newProperty,
         value: newValue
     };
 
     // Ajouter le nouvel objet au tableau
     objectsArray.push(newObject);
 
     // Après l'ajout
     var afterAddition = 'Après ajout : ' + getPropertiesValues(objectsArray).join(', ');
 
     // Afficher le contenu du tableau avant et après l'ajout dans le paragraphe
     objectTableParagraph.textContent = beforeAddition + '\n' + afterAddition;
 
     // Mettre à jour l'affichage des objets
     displayObjectsArray();
 }
 
 
     // Fonction pour supprimer une propriété ou une valeur du tableau
     function removeObjectFromTable() {
         // Ajouter la définition de removeValueFromProperty
     // Fonction pour supprimer une propriété ou une valeur du tableau
 
    // Fonction pour supprimer une propriété ou une valeur du tableau
    function removeValueFromProperty(property, value) {
     for (var i = 0; i < objectsArray.length; i++) {
         if (objectsArray[i].property === property) {
             // Supprimer la valeur spécifique de la propriété
             var values = objectsArray[i].value.split(', ');
             var index = values.indexOf(value);
             if (index !== -1) {
                 values.splice(index, 1);
                 objectsArray[i].value = values.join(', ');

                 // Supprimer la propriété si toutes les valeurs ont été supprimées
                 if (values.length === 0) {
                     objectsArray.splice(i, 1);
                 }
             }

             // Ajouter des messages de débogage
             console.log('Valeur à supprimer de la propriété :', value);
             console.log('Tableau après suppression de la valeur :', objectsArray);

             displayObjectsArray();
             return;
         }
     }

     console.log('Propriété non trouvée :', property);
 }

 // Fonction pour supprimer toute la propriété (ajout fictif)
 function removeProperty(property) {
     // Ajoutez ici le code pour supprimer toute la propriété du tableau
     console.log('Supprimer toute la propriété :', property);
 }
 
         // Avant la suppression
         var beforeRemoval = 'Avant suppression : ' + getPropertiesValues(objectsArray).join(', ');
 
         var input = removeObjectInput.value.trim();
         var [propertyToRemove, valueToRemove] = input.split(':').map(item => item.trim());
 
         if (propertyToRemove && valueToRemove) {
             // Supprimer la valeur spécifique de la propriété
             removeValueFromProperty(propertyToRemove, valueToRemove);
         } else if (propertyToRemove) {
             // Supprimer toute la propriété
             removeProperty(propertyToRemove);
         } else {
             alert('Veuillez entrer la propriété et la valeur à supprimer.');
         }
 
         // Après la suppression
         var afterRemoval = 'Après suppression : ' + getPropertiesValues(objectsArray).join(', ');
 
         // Afficher le contenu du tableau avant et après la suppression dans le paragraphe
         removeObjectTableParagraph.textContent = beforeRemoval + '\n' + afterRemoval;
     }
 
    // Fonction pour afficher le contenu des objets et du tableau
function displayObjectsArray() {
     var objectsContentParagraph = document.getElementById('objectsContent');
     var objectsContent = 'Contenu des objets : ' + objectsArray.map(obj => obj.property + ': ' + (obj.value !== null ? obj.value : '')).join(' | ');
     var tableContent = 'Contenu du tableau : ' + getPropertiesValues(objectsArray).join(' | ');
 
     // Utiliser innerHTML au lieu de textContent pour interpréter les sauts de ligne
     objectsContentParagraph.innerHTML = objectsContent + '<br>' + tableContent;
 }
 

 // Fonction pour récupérer les propriétés et les valeurs du tableau
 function getPropertiesValues(array) {
     var propertiesValuesArray = [];
     var uniqueProperties = Array.from(new Set(array.map(obj => obj.property)));

     uniqueProperties.forEach(function (property) {
         var values = array.filter(obj => obj.property === property).map(obj => obj.value).join(', ');
         propertiesValuesArray.push(property + ': ' + values);
     });

     return propertiesValuesArray;
 }
 
     // Appeler la fonction pour afficher le contenu des objets et du tableau après le chargement du DOM
     displayObjectsArray();


 var navLinks = document.querySelector('.nav-links');
 var menuIcon = document.querySelector('.menu-icon');

 menuIcon.addEventListener('click', function () {
     navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
 });

 navLinks.addEventListener('mouseover', function () {
     showNav();
 });

 navLinks.addEventListener('mouseout', function () {
     hideNav();
 });

 function showNav() {
     navLinks.style.display = 'flex';
     menuIcon.classList.add('hidden');
 }

 function hideNav() {
     navLinks.style.display = 'none';
     menuIcon.classList.remove('hidden');
 }
});