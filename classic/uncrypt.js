// Dépendances
const Cryptr = require('cryptr'); // https://www.npmjs.com/package/cryptr
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const clipboardy = require('clipboardy'); // https://www.npmjs.com/package/clipboardy

// Parti principale du code
term("Entrer votre clé de déchiffrement : ") // Demande d'entrer la clé
term.cyan() // Met le texte a écrire en cyan
term.inputField(function(error, cryptKey){
    const cryptr = new Cryptr(cryptKey); // Défini la clé de chiffrage

    term("\nEntrer le texte a déchiffré : ") // Demande d'entrer le texte
    term.cyan() // Met le texte a écrire en cyan
    term.inputField(function(error, input){
        const inputUncrypt = cryptr.decrypt(input.replace(/@/g, "a").replace(/\(/g, "b").replace(/#/g, "c").replace(/\)/g, "d")) // Déchiffre le texte
        term("\nVotre texte est celui ci : " + inputUncrypt) // Donne le texte
        clipboardy.writeSync(inputUncrypt); // Met le texte dans le presse papier
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



