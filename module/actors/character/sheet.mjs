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
  width: 420,
  height: 700,
  resizable: false
  };
  // Ajoute les listeners pour rendre les puces interactives
  activateListeners(html) {
    super.activateListeners(html);
    // Méthode Vampire : colorer dynamiquement les puces et gérer le clic
      // Colore dynamiquement les puces selon la valeur courante (lecture directe du champ input)
      function updateDots() {
        html.find('.dots').each(function() {
          const $dots = $(this);
          // Trouve le champ input numérique juste après le groupe de puces
          const $input = $dots.closest('.carac-row').find('input[type="number"]');
          const value = Number($input.val());
          $dots.find('.dot').each(function() {
            const idx = Number($(this).attr('data-index'));
            if (idx <= value) {
              $(this).addClass('filled');
            } else {
              $(this).removeClass('filled');
            }
          });
        });
      }
      updateDots();
    // Délégation d'événement sur .dot (méthode Vampire)
      // Listener sur les puces : clic = update de la valeur
      html.off('click', '.dot').on('click', '.dot', async (event) => {
        event.preventDefault();
        const dot = event.currentTarget;
        const value = Number(dot.dataset.index);
        const attr = dot.closest('.dots').dataset.attr;
        if (!attr) return;
        await this.document.update({ [attr]: value });
      });
      // Recalcule les puces après chaque render
      this.on('render', () => updateDots());
    // Onglets interactifs
    html.find('.tabs .item').off('click').on('click', function () {
      const tab = $(this).data('tab');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      const container = $(this).closest('.fiche-tabs');
      container.find('.tab').removeClass('active');
      container.find('.tab[data-tab="' + tab + '"]').addClass('active');
    });
  }
}