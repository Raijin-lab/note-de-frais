/* ================================================================
   CONFIGURATION — VERSION PARTAGÉE (équipe, comptable, patron)
   À remplir une seule fois par l'administrateur.
   Le logo : fichier  logo.png  dans ce même dossier.
   Le patron peut passer en mode privé local en cliquant 5 fois
   sur le titre « Note de frais » (il suffit de recliquer 5 fois
   pour revenir au mode partagé).
   ================================================================ */
window.SOCIETE = {
  nom: "A2CIM",
  adr: "Lot N°20 Zone Industrielle Ouled Salah - 27182 Bouskoura Casablanca- Maroc",
  contact: "www.a2cim.net",
  ids: "",

  patron: "BRUNO BORIAS",   // nom du patron : signature électronique de la Direction après validation

  mode: "shared",

  firebase: {
    apiKey: "AIzaSyBrakDXYb-vgTTgEoIjwIVaCttRrgwj4aU",
    authDomain: "note-de-frais-a2cim.firebaseapp.com",
    projectId: "note-de-frais-a2cim",
    storageBucket: "note-de-frais-a2cim.firebasestorage.app",
    messagingSenderId: "298324155092",
    appId: "1:298324155092:web:390481b64d14b316383941"
  },

  appCheckKey: "6LfmmPgtAAAAAFYAuMK-OEHB0M8PlWibs9h94GBJ",
  appCheckEnterprise: true,

  pays: {
  }
};
