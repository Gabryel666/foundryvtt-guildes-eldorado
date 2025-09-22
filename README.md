# Foundry VTT : Système Guildes El Dorado

Ce dépôt contient le code source du système de jeu pour le jeu de rôle **Guildes : El Dorado**, développé pour Foundry Virtual Tabletop.

## 🏛️ Architecture du Système

```
[system.json] (Manifest)
 L--> [module/main.js] (Script principal)
      |
      +--> [/actors/]
      |    |
      |    +-- [actor.mjs] (Comportement Commun)
      |    |
      |    +-- [/character/] (Type: Personnage)
      |    |    L--> - data.mjs (données de l'acteur concerné)
      |    |    L--> - sheet.mjs (comportement de l'acteur concerné)
      |    |    L--> - sheet.html (Structure visuelle de l'acteur concerné)
      |    |
      |    L--> [...] (pnj/, guilde, etc.)
      |
      L--> [...] (items/, etc.)

```

## 🤝 Contribution

Les contributions, rapports de bugs et suggestions sont les bienvenus. Veuillez ouvrir une "Issue" sur ce dépôt GitHub pour toute discussion.

## 📜 Licence

Ce projet est distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus de détails.
