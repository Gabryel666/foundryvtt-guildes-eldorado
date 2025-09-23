/**
 * @file Définit la logique de la fiche de personnage pour les acteurs de type "character".
 * @author Gabryel
 */

/**
 * La classe `CharacterSheet` hérite de `ActorSheet`, la classe de base de Foundry.
 * Elle est responsable de l'affichage et des interactions de la fiche du personnage.
 */
export class CharacterSheet extends ActorSheet {

  /**
   * Options par défaut de la fiche de personnage.
   * @returns {object} Un objet contenant les options par défaut.
   */
  static get defaultOptions() {
    // `foundry.utils.mergeObject` permet de fusionner avec les options de base de `ActorSheet`.
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["guildes", "sheet", "actor", "character"], // Classes CSS pour styliser la fiche.
      width: 600, // Largeur par défaut de la fenêtre.
      height: 600, // Hauteur par défaut de la fenêtre.
      // Le chemin vers le fichier template HTML.
      template: "systems/guildes-eldorado/module/actors/character/sheet.html"
    });
  }

  /**
   * Prépare les données à envoyer au template HTML.
   * @returns {object}
   */
  getData(options) {
    const context = super.getData(options);

    // Affiche les données dans la console pour voir ce que le fichier html recoit
    console.log("Guildes El Dorado | Données envoyées à la fiche :", context);
    return context;
  }
}