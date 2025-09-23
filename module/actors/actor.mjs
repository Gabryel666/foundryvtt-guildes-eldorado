/**
 * @file Définit la classe de base GuildesActor, commune à tous les types d'acteurs du système.
 * @author Gabryel
 */

/**
 * La classe `GuildesActor` hérite de la classe `Actor` de Foundry.
 * Toutes les logiques de comportement partagées par les différents types d'acteurs
 * sont implémentées ici.
 */
export class GuildesActor extends Actor {

  /**
   * Méthode appelée pour préparer les données dérivées de l'acteur.
   * Les données dérivées sont des valeurs calculées à partir des données de base
   * Cette méthode sera appelée pour TOUS les types d'acteurs.
   */
  prepareDerivedData() {
    // Appelle la méthode parente pour assurer le fonctionnement de base de Foundry.
    super.prepareDerivedData();
  }
}