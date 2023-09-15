"use strict";


/*************************** 
		Demo exemple 
****************************/
// let branches = $("<ul></ul>");

// $("body").html(branches);

// let brol;

// $.ajax({
// 	url: "https://api.github.com/repos/dotnet/AspNetCore.Docs/branches",

// 	type: "GET",

// 	// body: jsonBody,

// 	success: function (data) {
// 		$.each(data, function (index, element) {
// 			console.log(element.name);

// 			branches.append("<li>" + element.name + "</li>");

// 			brol = element.name;
// 		});
// 	},
// });


/*************************** 
		Exo Pokemon 
****************************/
// Fonction AJAX pour récupérer les données des Pokémon depuis la PokeAPI
$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon?limit=10",  // Limite à 10 Pokémon pour cet exemple
    type: "GET",
    success: function(data) {
        // Boucle à travers chaque Pokémon
        $.each(data.results, function(index, pokemon) {
            // Récupérer des informations supplémentaires pour chaque Pokémon
            $.ajax({
                url: pokemon.url,
                type: "GET",
                success: function(pokeData) {
                    // Création d'une nouvelle ligne de tableau pour ce Pokémon
                    let newRow = $("<tr></tr>");
                    
                    // Ajout de l'ID, du nom et de l'image du Pokémon à la nouvelle ligne
                    newRow.append("<td>" + pokeData.id + "</td>");
                    newRow.append("<td>" + pokeData.name + "</td>");
                    newRow.append("<td><img src='" + pokeData.sprites.front_default + "' /></td>");
                    
                    // Ajout de la nouvelle ligne au tableau
                    $("#pokemon-table tbody").append(newRow);
                }
            });
        });
    }
});
