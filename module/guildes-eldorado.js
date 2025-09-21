// On importe nos classes personnalisées
import { GuildesActor } from "./documents/actor.mjs";
import { GuildesCharacterData } from "./data/GuildesCharacterData.mjs";

/**
 * La classe principale du système de jeu Guildes : El Dorado.
 */
class GuildesElDorado extends foundry.abstract.System {

  /**
   * Une fonction d'initialisation appelée par le hook "init".
   */
  _initialize() {
    super._initialize();

    console.log("Guildes El Dorado | Initialisation via la Classe Système");

    // On assigne nos classes personnalisées à la configuration de Foundry
    CONFIG.Actor.documentClass = GuildesActor;
    CONFIG.Actor.systemDataModels.character = GuildesCharacterData;
    CONFIG.Actor.typeLabels.character = "Personnage";
  }
}

// On enregistre notre classe système auprès de Foundry
SYSTEM.register(GuildesElDorado);