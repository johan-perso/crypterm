// Dépendances
const Cryptr = require('cryptr'); // https://www.npmjs.com/package/cryptr
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const clipboardy = require('clipboardy'); // https://www.npmjs.com/package/clipboardy

// Parti principale du code
    const cryptr = new Cryptr("\x61\x65\x73\x2D\x32\x35\x36\x2D\x67\x63\x6D\x2D\x63\x74\x6B\x61\x64"); // Défini la clé de chiffrage (Obfusqué)

    term("Entrer le texte a déchiffré : ") // Demande d'entrer le texte
    term.cyan() // Met le texte a écrire en cyan
    term.inputField(function(error, input){
        const inputUncrypt = cryptr.decrypt(input.replace(/@/g, "a").replace(/\(/g, "b").replace(/#/g, "c").replace(/\)/g, "d")) // Déchiffre le texte
        term("\nVotre texte est celui ci : " + inputUncrypt) // Donne le texte
        clipboardy.writeSync(inputUncrypt); // Met le texte dans le presse papier
        process.exit() // Arrête le processus
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



