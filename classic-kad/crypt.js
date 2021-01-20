// Dépendances
const Cryptr = require('cryptr'); // https://www.npmjs.com/package/cryptr
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const clipboardy = require('clipboardy'); // https://www.npmjs.com/package/clipboardy
const moment = require('moment') // https://momentjs.com/
const fs = require('fs'); // Intregré dans NodeJS

// Parti principale du code
    const cryptr = new Cryptr("\x61\x65\x73\x2D\x32\x35\x36\x2D\x67\x63\x6D\x2D\x63\x74\x6B\x61\x64") // Défini la clé de chiffrage (Obfusqué)

    term("Entrer un texte a chiffré : ") // Demande d'entrer un texte
    term.cyan() // Met le texte a écrire en cyan
    term.inputField(function(error, input){
        const inputCrypt = cryptr.encrypt(input) // Chiffre le texte
        .replace(/a/g, "@") // Remplacement des A par des @ pour compliquer le déchiffrage sans Crypterm
        .replace(/b/g, "(") // Remplacement des B par des ( pour compliquer le déchiffrage sans Crypterm
        .replace(/c/g, "#") // Remplacement des C par des # pour compliquer le déchiffrage sans Crypterm
        .replace(/d/g, ")"); // Remplacement des D par des ) pour compliquer le déchiffrage sans Crypterm
        term("\nVotre texte est désormais chiffré : " + inputCrypt) // Donne le texte
        clipboardy.writeSync(inputCrypt); // Met le texte dans le presse papier
        var htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n<meta charset=\"utf-8\">\n<meta content=\"width=device-width, initial-scale=\"1.0\" name=\"viewport\">\n<title>Partage de message chiffré</title>\n</head>\n\n<body>\n<h1>Texte chiffré</h1>\n<p>" + inputCrypt + "</p>\n<h1>Méthode de chiffrement</h1>\n<p>aes-256-gcm-ctkad / classic-kad</p>\n<h3>Déchiffrable avec <a href=\"https://github.com/johan-perso/crypterm\">Crypterm</a>.</h3>\n</body>\n\n<style>\n    h1,h2,h3,p,a {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #000\n    }\n    body {\n        background-color: #4a348c;\n    }\n</style>" // Contenu du fichier HTML a crée
        if(!fs.existsSync(__dirname + "/../Partage")) fs.mkdirSync(__dirname + "/../Partage") // Crée un dossier partage si il n'existe pas
        fs.writeFile(__dirname + "/../Partage/" + moment().format('YYYY.MM.DD-HH.mm.ss') + ".html", htmlContent, function (err) { // Crée un fichier de partage
            if(err) return term.red(err) // Si il y a une erreur, La donner
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