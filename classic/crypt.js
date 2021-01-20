// Dépendances
const Cryptr = require('cryptr'); // https://www.npmjs.com/package/cryptr
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const clipboardy = require('clipboardy'); // https://www.npmjs.com/package/clipboardy
const moment = require('moment') // https://momentjs.com/
const fs = require('fs'); // Intregré dans NodeJS

// Parti principale du code
term("Choisissez votre clé de chiffrement - Ne l'oublier pas car elle permettra d'accéder au texte non chiffré : ") // Demande de choisir une clé
term.cyan() // Met le texte a écrire en cyan
term.inputField(function(error, cryptKey){
    if(cryptKey.length === 0){
        term.red("Veuillez saisir une clé de chiffrement")
        return process.exit()
    }   
    if(cryptKey.length < 5){
        term.red("\nVeuillez saisir une clé de chiffrement plus longue")
        return process.exit()
    }  
    if(cryptKey.includes('<') && cryptKey.includes('>')){
        term.red("\nVous ne pouvez pas entrer de code HTML")
        return process.exit()
    }
    
    const cryptr = new Cryptr(cryptKey) // Défini la clé de chiffrage

    term("\nEntrer un texte a chiffré : ") // Demande d'entrer un texte
    term.cyan() // Met le texte a écrire en cyan
    term.inputField(function(error, input){
        const inputCrypt = cryptr.encrypt(input) // Chiffre le texte
        .replace(/a/g, "@") // Remplacement des A par des @ pour compliquer le déchiffrage sans Crypterm
        .replace(/b/g, "(") // Remplacement des B par des ( pour compliquer le déchiffrage sans Crypterm
        .replace(/c/g, "#") // Remplacement des C par des # pour compliquer le déchiffrage sans Crypterm
        .replace(/d/g, ")"); // Remplacement des D par des ) pour compliquer le déchiffrage sans Crypterm
        term("\nVotre texte est désormais chiffré : " + inputCrypt) // Donne le texte
        clipboardy.writeSync(inputCrypt); // Met le texte dans le presse papier
        var htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n<meta charset=\"utf-8\">\n<meta content=\"width=device-width, initial-scale=\"1.0\" name=\"viewport\">\n<title>Partage de message chiffré</title>\n</head>\n\n<body>\n<h1>Clé de chiffrement</h1>\n<p>" + cryptKey + "</p>\n<h1>Texte chiffré</h1>\n<p>" + inputCrypt + "</p>\n<h1>Méthode de chiffrement</h1>\n<p>aes-256-gcm-ct / classic</p>\n<h3>Déchiffrable avec <a href=\"https://github.com/johan-perso/crypterm\">Crypterm</a>.</h3>\n</body>\n\n<style>\n    h1,h2,h3,p,a {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #000\n    }\n    body {\n        background-color: #4a348c;\n    }\n</style>" // Contenu du fichier HTML a crée
        if(!fs.existsSync(__dirname + "/../Partage")) fs.mkdirSync(__dirname + "/../Partage") // Crée un dossier partage si il n'existe pas
        fs.writeFile(__dirname + "/../Partage/" + moment().format('YYYY.MM.DD-HH.mm.ss') + ".html", htmlContent, function (err) { // Crée un fichier de partage
            if(err) return term.red(err) // Si il y a une erreur, La donner
            process.exit() // Arrête le processus
         });
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