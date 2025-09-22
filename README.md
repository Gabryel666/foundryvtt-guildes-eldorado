# Foundry VTT : Système Guildes El Dorado

<p align="center">
  <a href="https://foundryvtt.com/releases/13" target="_blank">
    <img src="https://img.shields.io/badge/Foundry%20VTT-v13-F7762A" alt="Compatibilité Foundry VTT">
  </a>
  <a href="https://github.com/Gabryel666/foundryvtt-guildes-eldorado/releases" target="_blank">
    <img src="https://img.shields.io/github/v/release/Gabryel666/foundryvtt-guildes-eldorado" alt="Dernière Version">
  </a>
  <a href="https://github.com/Gabryel666/foundryvtt-guildes-eldorado/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/Gabryel666/foundryvtt-guildes-eldorado" alt="Licence">
  </a>
  <!-- Mettez ici le lien d'invitation de votre serveur Discord si vous en avez un -->
  <a href="https://discord.gg/CrfgXxhu95" target="_blank">
    <img src="https://img.shields.io/badge/Discord-Rejoignez_nous-7289DA?logo=discord&logoColor=white" alt="Invitation Discord">
  </a>
</p>

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
