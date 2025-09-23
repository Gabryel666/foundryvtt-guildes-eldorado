/**
 * @file Définit le modèle de données pour le type "character".
 * @author Gabryel
 */

/**
 * La classe `CharacterData` hérite de `foundry.abstract.TypeDataModel`.
 */
export class CharacterData extends foundry.abstract.TypeDataModel {

  /**
   * Définit le schéma de données.
   * Cette méthode statique retourne un objet décrivant tous les champs,
   * leurs types, et leurs contraintes.
   * @returns {object}
   */
  static defineSchema() {
    // Raccourci vers l'objet `fields` de Foundry
    const fields = foundry.data.fields;

    // La structure de données est retournée sous forme d'un objet.
    return {
      // 'attributes' est un groupe de champs pour les caractéristiques principales.
      // Un 'SchemaField' est un objet qui contient d'autres champs, créant une hiérarchie.
      attributes: new fields.SchemaField({
        // Sous-groupe pour les caractéristiques physiques.
        physical: new fields.SchemaField({
          // 'agile' est un champ de type numérique ('NumberField').
          agile: new fields.NumberField({ 
            required: true,      // Ce champ est obligatoire.
            initial: 1,          // La valeur par défaut à la création.
            min: 1,              // La valeur minimale autorisée.
            max: 6,              // La valeur maximale autorisée.
            integer: true,       // Le nombre doit être un entier.
            label: "Agile"       // Un label interne pour ce champ.
          }),
          fort: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Fort" }),
          resistant: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Résistant" }),
          observateur: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Observateur" }),
        }),
        // Sous-groupe pour les caractéristiques mentales.
        mental: new fields.SchemaField({
          charmeur: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Charmeur" }),
          ruse: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Rusé" }),
          savant: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Savant" }),
          talentueux: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Talentueux" }),
        })
      }),

      // Groupe de champs pour les Arts, les attributs dérivés.
      arts: new fields.SchemaField({
        guerrier: new fields.SchemaField({
          value: new fields.NumberField({ required: true, initial: 1, integer: true, label: "Art Guerrier" }),
          physA: new fields.StringField({ initial: "agile", label: "Physique A" }),
          physB: new fields.StringField({ initial: "fort", label: "Physique B" }),
          mentalW: new fields.StringField({ initial: "charmeur", label: "Mental W" })
        }),
        etrange: new fields.SchemaField({
          value: new fields.NumberField({ required: true, initial: 1, integer: true, label: "Art Étrange" }),
          physC: new fields.StringField({ initial: "resistant", label: "Physique C" }),
          mentalX: new fields.StringField({ initial: "ruse", label: "Mental X" }),
          mentalY: new fields.StringField({ initial: "savant", "label": "Mental Y" })
        }),
        guildien: new fields.SchemaField({
          value: new fields.NumberField({ required: true, initial: 1, integer: true, label: "Art Guildien" }),
          physD: new fields.StringField({ initial: "observateur", label: "Physique D" }),
          mentalZ: new fields.StringField({ initial: "talentueux", label: "Mental Z" })
        })
      }),

      // Groupe de champs pour les attributs vitaux comme les points de vie.
      health: new fields.SchemaField({
        value: new fields.NumberField({ required: true, initial: 10, integer: true, label: "Points de Vie" }),
        max: new fields.NumberField({ required: true, initial: 10, integer: true, label: "Points de Vie Max" })
      })
    };
  }
}