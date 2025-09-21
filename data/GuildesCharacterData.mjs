/**
 * Le modèle de données pour un acteur de type "personnage".
 */
export class GuildesCharacterData extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;

    return {
      // Caractéristiques Principales
      attributes: new fields.SchemaField({
        physical: new fields.SchemaField({
          agile: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Agile" }),
          fort: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Fort" }),
          resistant: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Résistant" }),
          observateur: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Observateur" }),
        }),
        mental: new fields.SchemaField({
          charmeur: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Charmeur" }),
          ruse: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Rusé" }),
          savant: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Savant" }),
          talentueux: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true, label: "Talentueux" }),
        })
      }),

      // Arts (Attributs dérivés)
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
          mentalY: new fields.StringField({ initial: "savant", label: "Mental Y" })
        }),
        guildien: new fields.SchemaField({
          value: new fields.NumberField({ required: true, initial: 1, integer: true, label: "Art Guildien" }),
          physD: new fields.StringField({ initial: "observateur", label: "Physique D" }),
          mentalZ: new fields.StringField({ initial: "talentueux", label: "Mental Z" })
        })
      }),

      // Autres attributs vitaux (exemples)
      health: new fields.SchemaField({
        value: new fields.NumberField({ required: true, initial: 10, integer: true, label: "Points de Vie" }),
        max: new fields.NumberField({ required: true, initial: 10, integer: true, label: "Points de Vie Max" })
      })
    };
  }
}