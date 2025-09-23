/**
 * @file Point d'entrée principal du système
 * Gère l'initialisation et l'enregistrement des différentes classes du système.
 * @author Gabryel
 */

// Importe la classe de comportement COMMUNE à tous les acteurs.
import { GuildesActor } from "./actors/actor.mjs";
// Importe les plans de données à chaque type d'actor".
import { CharacterData } from "./actors/character/data.mjs";
// Importe la classe de la fiche SPÉCIFIQUE au type "personnage".
import { CharacterSheet } from "./actors/character/sheet.mjs";

// Classe principale du système de jeu.

class GuildesElDorado extends foundry.abstract.System {

    _initialize() {
      super._initialize();
      console.log("Guildes El Dorado | Initialisation du système");

      CONFIG.Actor.documentClass = GuildesActor;
      CONFIG.Actor.systemDataModels.character = CharacterData;

      Actors.unregisterSheet("core", ActorSheet);
      Actors.registerSheet("guildes-eldorado", CharacterSheet, { 
      types: ["character"],
      makeDefault: true,
      label: "Fiche de Personnage Guildes"
    });

  }
}



// Enregistre la classe `GuildesElDorado` auprès du core de Foundry.
// Active le système et déclenche l'appel à `_initialize`.
SYSTEM.register(GuildesElDorado);