// Point d'entrée principal du système Guildes : El Dorado
// Ce fichier enregistre la classe d'acteur, le DataModel et la fiche de personnage personnalisée.

import { GuildesActor } from "./actors/actor.mjs";
import { CharacterData } from "./actors/character/data.mjs";
import { CharacterSheet } from "./actors/character/sheet.mjs";

Hooks.once("init", () => {
  // Helper Handlebars pour générer un tableau de nombres (range)
  if (typeof Handlebars !== 'undefined') {
    Handlebars.registerHelper('range', function(start, end) {
      let arr = [];
      for (let i = start; i <= end; i++) arr.push(i);
      return arr;
    });
  }
  console.log("Guildes El Dorado | Initialisation du système");


  // (Nettoyé) Plus de chargement dynamique de partials : tout est dans le HTML principal.

  // Enregistre la classe d'acteur personnalisée
  CONFIG.Actor.documentClass = GuildesActor;

  // Enregistre le DataModel pour le type "character"
  if (!CONFIG.Actor.dataModels) CONFIG.Actor.dataModels = {};
  CONFIG.Actor.dataModels.character = CharacterData;

  // Enregistre la fiche de personnage personnalisée (API v13+)
  foundry.documents.collections.Actors.unregisterSheet("core", foundry.appv1.sheets.ActorSheet);
  foundry.documents.collections.Actors.registerSheet("guildes-eldorado", CharacterSheet, {
    types: ["character"],
    makeDefault: true,
    label: "Fiche de Personnage Guildes"
  });
});