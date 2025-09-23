/**
 * @file Point d'entrée principal du système
 * Gère l'initialisation et l'enregistrement des différentes classes du système.
 * @author Gabryel
 */

// Importe la classe de comportement COMMUNE à tous les acteurs.
import { GuildesActor } from "./actors/actor.mjs";
// Importe les plans de données à chaque type d'actor".
import { CharacterData } from "./actors/character/data.mjs";

/**
 * Classe principale du système de jeu.
 * Hérite de la classe de base `foundry.abstract.System`.
 */
class GuildesElDorado extends foundry.abstract.System {

  /**
   * Phase d'initialisation du système.
   * Cette méthode sert à configurer les éléments fondamentaux du système.
   */
    _initialize() {
    // Appelle la méthode d'initialisation de la classe parente pour assurer le fonctionnement de base.
    super._initialize();

    // Message console
    console.log("Guildes El Dorado | Initialisation du système");

    // Enregistre la classe `GuildesActor` comme classe de document par défaut pour tous les Acteurs.
    // Désormais, chaque fois que Foundry créera un acteur, il utilisera cette classe au lieu de sa classe Actor de base.
    CONFIG.Actor.documentClass = GuildesActor;

    // Enregistre le plan de données `CharacterData` par type d'acteur.
    CONFIG.Actor.systemDataModels.character = CharacterData;
  }
}

// Enregistre la classe `GuildesElDorado` auprès du core de Foundry.
// Active le système et déclenche l'appel à `_initialize`.
SYSTEM.register(GuildesElDorado);