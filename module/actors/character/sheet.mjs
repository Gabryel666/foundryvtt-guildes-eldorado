// Fiche de personnage très simple pour Foundry v13
// Utilise le moteur Handlebars et le template HTML associé
const { ActorSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

export class CharacterSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  constructor(...args) {
    super(...args);
    console.log('CharacterSheet instanciée !');
  }
  // Indique le template HTML à utiliser pour cette fiche
  static PARTS = {
    BODY: {
      template: "systems/guildes-eldorado/module/actors/character/sheet.html"
    }
  };
  // Configuration de la fenêtre de la fiche
  static CONFIG = {
    ...super.CONFIG,
    width: 400,
    height: 300,
    resizable: true
  };
  // Ajoute les listeners pour rendre les puces interactives
  activateListeners(html) {
    super.activateListeners(html);
    this.element.find('.dot[data-attr]').css('cursor', 'pointer');
    this.element.on('click', '.dot[data-attr]', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const dot = event.currentTarget;
      const value = Number(dot.dataset.value);
      const attr = dot.dataset.attr;
      console.log('Dot clicked!', attr, value);
      if (!attr) return;
      await this.document.update({ [attr]: value });
    });
  }
}