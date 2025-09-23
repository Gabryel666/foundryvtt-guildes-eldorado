/**
 * @file Définit le modèle de données (DataModel) pour les acteurs de type "character".
 */
// Modèle de données minimal pour un personnage
// Ajoute ici les champs que tu veux voir apparaître sur la fiche
export class CharacterData extends foundry.abstract.DataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      nom: new fields.StringField({ required: true, initial: "" }),
      pv: new fields.NumberField({ required: true, initial: 10, min: 0 }),
      attributes: new fields.SchemaField({
        physical: new fields.SchemaField({
          agile: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true }),
          fort: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true }),
          resistant: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true }),
          observateur: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true })
        }),
        mental: new fields.SchemaField({
          charmeur: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true }),
          ruse: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true }),
          savant: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true }),
          talentueux: new fields.NumberField({ required: true, initial: 1, min: 1, max: 6, integer: true })
        })
      })
    };
  }
}