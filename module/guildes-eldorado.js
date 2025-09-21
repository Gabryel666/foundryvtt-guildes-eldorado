// On importe la classe de base pour notre modèle de données
import { GuildesCharacterData } from "./data/GuildesCharacterData.mjs";

/**
 * Initialisation du système.
 */
Hooks.once("init", () => {
  console.log("Guildes El Dorado | Initialisation du système");

  // On assigne notre modèle de données au type d'acteur "character".
  CONFIG.Actor.systemDataModels.character = GuildesCharacterData;

  // Optionnel mais bonne pratique : on peut aussi définir un label plus joli pour ce type d'acteur.
  CONFIG.Actor.typeLabels.character = "Personnage";
});