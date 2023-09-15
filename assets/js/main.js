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
// Tableau pour stocker les lignes du tableau
let tableRows = [];

// Fonction AJAX pour récupérer les données des Pokémon depuis la PokeAPI
$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon?limit=10",
    type: "GET",
    success: function(data) {
        // Boucle à travers chaque Pokémon
        $.each(data.results, function(index, pokemon) {
            // Récupérer des informations supplémentaires pour chaque Pokémon
            $.ajax({
                url: pokemon.url,
                type: "GET",
                success: function(pokeData) {
                    // Récupérer le nom et le flavor_text en français
                    $.ajax({
                        url: pokeData.species.url,
                        type: "GET",
                        success: function(speciesData) {
                            const frenchName = speciesData.names.find(name => name.language.name === 'fr').name;
                            const frenchFlavorText = speciesData.flavor_text_entries.find(text => text.language.name === 'fr');

                            // Création d'une nouvelle ligne de tableau pour ce Pokémon
                            let newRow = $("<tr></tr>");

                            // Ajout de l'ID, du nom, du nom en français, du flavor_text et de l'image du Pokémon à la nouvelle ligne
                            newRow.append("<td>" + pokeData.id + "</td>");
                            newRow.append("<td>" + pokeData.name + "</td>");
                            newRow.append("<td>" + frenchName + "</td>");
                            newRow.append("<td>" + (frenchFlavorText ? frenchFlavorText.flavor_text : 'N/A') + "</td>");
                            newRow.append("<td><img src='" + pokeData.sprites.front_default + "' /></td>");

                            // Ajout de la nouvelle ligne au tableau de lignes
                            tableRows.push({id: pokeData.id, row: newRow});

                            // Vérifie si toutes les lignes ont été créées
                            if (tableRows.length === data.results.length) {
                                // Trie les lignes par ID
                                tableRows.sort((a, b) => a.id - b.id);

                                // Ajoute les lignes triées au tableau
                                tableRows.forEach(rowObj => {
                                    $("#pokemon-table tbody").append(rowObj.row);
                                });
                            }
                        }
                    });
                }
            });
        });
    }
});



