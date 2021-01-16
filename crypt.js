// Dépendances
const Cryptr = require('cryptr'); // https://www.npmjs.com/package/cryptr
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const clipboardy = require('clipboardy'); // https://www.npmjs.com/package/clipboardy

// Parti principale du code
term("Choisissez votre clé de chiffrement - Ne l'oublier pas car elle permettra d'accéder au texte non chiffré : ") // Demande de choisir une clé
term.cyan() // Met le texte a écrire en cyan
term.inputField(function(error, cryptKey){
    const cryptr = new Cryptr(cryptKey); // Défini la clé de chiffrage

    term("\nEntrer un texte a chiffré : ") // Demande d'entrer un texte
    term.cyan() // Met le texte a écrire en cyan
    term.inputField(function(error, input){
        const inputCrypt = cryptr.encrypt(input); // Chiffre le texte
        term("\nVotre texte est désormais chiffré : " + inputCrypt) // Donne le texte
        clipboardy.writeSync(inputCrypt); // Met le texte dans le presse papier
        process.exit() // Arrête le processus
    });
});

// Arrêter le processus avec CTRL_Z, CTRL_C ou CTRL_D
term.grabInput(true);
term.on('key', function(name, matches, data){
	if (name === 'CTRL_Z'){
		process.exit();
  } 
  if (name === 'CTRL_C'){
		process.exit();
  }
  if (name === 'CTRL_D'){
		process.exit();
	}
  });