// Fonction pour récupérer une citation aléatoire depuis une API
async function getRandomQuote() {
     try {
         const response = await fetch('https://api.quotable.io/random');
         const data = await response.json();
 
         return {
             text: data.content,
             author: data.author
         };
     } catch (error) {
         console.error('Erreur lors de la récupération de la citation', error);
         return null;
     }
 }
 
 // Fonction pour afficher une citation sur la page
 function displayQuote(quote) {
     const quoteTextElement = document.getElementById('quoteText');
     const authorElement = document.getElementById('author');
 
     quoteTextElement.textContent = quote.text;
     authorElement.textContent = `- ${quote.author}`;
 }
 
 // Gestionnaire d'événement pour le bouton "Nouvelle citation"
 document.getElementById('newQuoteBtn').addEventListener('click', async function () {
     const quote = await getRandomQuote();
 
     if (quote) {
         document.getElementById('quoteContainer').style.animation = 'none'; // Réinitialiser l'animation
         void document.getElementById('quoteContainer').offsetWidth; // Forcer un repaint pour relancer l'animation
         document.getElementById('quoteContainer').style.animation = 'fadeIn 1s ease-in-out'; // Appliquer à nouveau l'animation
         displayQuote(quote);
         announceNewQuote(); // Annoncer la nouvelle citation pour les utilisateurs de lecteurs d'écran
     }
 });
 
 // Charger une citation aléatoire au chargement de la page
 window.addEventListener('load', async function () {
     const quote = await getRandomQuote();
 
     if (quote) {
         displayQuote(quote);
     }
 });
 
 // Fonction pour annoncer la nouvelle citation aux utilisateurs de lecteurs d'écran
 function announceNewQuote() {
     const quoteContainer = document.getElementById('quoteContainer');
     const liveRegion = document.createElement('div');
     liveRegion.textContent = 'Nouvelle citation chargée.';
     liveRegion.style.position = 'absolute';
     liveRegion.style.width = '1px';
     liveRegion.style.height = '1px';
     liveRegion.style.overflow = 'hidden';
     liveRegion.style.clip = 'rect(1px, 1px, 1px, 1px)';
     quoteContainer.appendChild(liveRegion);
 
     // Supprimer l'élément liveRegion après une courte période
     setTimeout(() => {
         liveRegion.parentNode.removeChild(liveRegion);
     }, 1000);
 }
 