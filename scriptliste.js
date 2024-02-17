// Fonction pour ajouter une tâche à la liste
function addTask(taskText) {
     const taskList = document.getElementById("taskList");
 
     // Créer un nouvel élément li
     const newTaskItem = document.createElement("li");
     newTaskItem.textContent = taskText;
 
     // Ajouter un gestionnaire de clic pour marquer/démarquer la tâche comme terminée
     newTaskItem.addEventListener("click", function() {
         newTaskItem.classList.toggle("completed");
     });
 
     // Ajouter l'élément li à la liste
     taskList.appendChild(newTaskItem);
 }
 
 // Gestionnaire d'événement pour le formulaire d'ajout de tâches
 document.getElementById("taskForm").addEventListener("submit", function(event) {
     event.preventDefault(); // Empêcher le formulaire de se soumettre
 
     const newTaskInput = document.getElementById("newTask");
     const newTaskText = newTaskInput.value.trim();
 
     if (newTaskText !== "") {
         addTask(newTaskText);
         newTaskInput.value = ""; // Effacer le champ après l'ajout
     }
 });
 