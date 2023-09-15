"use strict";

// Générer les tâches de base
// Création d'un tableau contenant les tâches de base
var baseTasks = ["Buy groceries", "Call mom", "Finish project"];

// Boucle pour parcourir le tableau et ajouter chaque tâche à la liste "à faire"
for (var i = 0; i < baseTasks.length; i++) {
	// Ajout des tâches de base à la liste "à faire" (#tasks-to-do)
	$("#tasks-to-do").append(
		'<li class="task"><input type="checkbox" class="task-checkbox">' +
			"<span>" +
			baseTasks[i] +
			"</span>" +
			' <button class="delete">Delete</button></li>',
	);
}

// Ajouter une nouvelle tâche
// Fonction exécutée lorsque l'utilisateur clique sur le bouton "Add"
$("#add-task").click(function () {
	// Récupération du contenu du champ texte #new-task
	var newTask = $("#new-task").val();

	// Vérification que le champ n'est pas vide
	if (newTask !== "") {
		// Ajout de la nouvelle tâche à la liste "à faire"
		$("#tasks-to-do").append(
			'<li class="task"><input type="checkbox" class="task-checkbox">' +
				"<span>" +
				baseTasks[i] +
				"</span>" +
				' <button class="delete">Delete</button></li>',
		);

		// Effacement du champ texte pour la prochaine tâche
		$("#new-task").val("");
	}
});

// Gérer le changement d'état d'une tâche (effectuée ou non)
// Fonction exécutée lorsque l'état d'une checkbox est modifié
$("#todo-list").on("change", ".task-checkbox", function () {
	// Récupération de l'élément <li> parent de la checkbox
	var taskElement = $(this).parent();

	// Si la checkbox est cochée
	if ($(this).is(":checked")) {
		// Ajout de la classe "task--done" pour styliser la tâche comme "terminée"
		taskElement.addClass("task--done");

		// Déplacement de la tâche vers la liste des tâches terminées
		taskElement.appendTo("#tasks-done");
	} else {
		// Retrait de la classe "task--done" car la tâche n'est plus terminée
		taskElement.removeClass("task--done");

		// Retour de la tâche dans la liste des tâches "à faire"
		taskElement.appendTo("#tasks-to-do");
	}
});

// Supprimer une tâche
// Fonction exécutée lorsque l'utilisateur clique sur le bouton "Delete"
$("#todo-list").on("click", ".delete", function () {
	// Suppression de l'élément <li> parent du bouton "Delete"
	$(this).parent().remove();
});
