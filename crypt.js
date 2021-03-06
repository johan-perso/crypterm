// Dépendances
const Cryptr = require('cryptr'); // https://www.npmjs.com/package/cryptr
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const clipboardy = require('clipboardy'); // https://www.npmjs.com/package/clipboardy
const moment = require('moment') // https://momentjs.com/
const fs = require('fs'); // Intregré dans NodeJS
const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch


module.exports.crypt = function (text, type, key) { 

    // Type de chiffrage : Classique
    if(type === "classic"){
        const cryptr = new Cryptr(key) // Défini la clé de chiffrage
        const texte = cryptr.encrypt(text) // Chiffre le texte
            .replace(/a/g, "@")
            .replace(/b/g, "(")
            .replace(/c/g, "#")
            .replace(/d/g, ")");
    
        term("\nVotre texte est désormais chiffré : ") // Donne le texte
        term.cyan("\n" + texte) // Donne le texte aussi
        clipboardy.writeSync(texte); // Met le texte dans le presse papier
        var htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n<meta charset=\"utf-8\">\n<meta content=\"width=device-width, initial-scale=\"1.0\" name=\"viewport\">\n<title>Partage de message chiffré</title>\n</head>\n\n<body>\n<h1>Clé de chiffrement</h1>\n<p>" + key + "</p>\n<h1>Texte chiffré</h1>\n<p>" + texte + "</p>\n<h1>Méthode de chiffrement</h1>\n<p>aes-256-gcm-ct / classic</p>\n<h3>Déchiffrable avec <a href=\"https://github.com/johan-perso/crypterm\">Crypterm</a>.</h3>\n</body>\n\n<style>\n    h1,h2,h3,p,a {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #000\n    }\n    body {\n        background-color: #4a348c;\n    }\n</style>" // Contenu du fichier HTML a crée
        if(!fs.existsSync(__dirname + "/Partage")) fs.mkdirSync(__dirname + "/Partage") // Crée un dossier partage si il n'existe pas
        fs.writeFile(__dirname + "/Partage/" + moment().format('YYYY.MM.DD-HH.mm.ss') + ".html", htmlContent, function (err) { // Crée un fichier de partage
            if(err) return term.red(err) // Si il y a une erreur, La donner
            process.exit() // Arrête le processus
         });
    }

    // Type de chiffrage : Classique-kad
    if(type === "classic-kad"){
        const cryptr = new Cryptr("\x61\x65\x73\x2D\x32\x35\x36\x2D\x67\x63\x6D\x2D\x63\x74\x6B\x61\x64") // Défini la clé de chiffrage (Obfusqué)
        const texte = cryptr.encrypt(text) // Chiffre le texte
            .replace(/a/g, "@")
            .replace(/b/g, "(")
            .replace(/c/g, "#")
            .replace(/d/g, ")");
    
        term("\nVotre texte est désormais chiffré : ") // Donne le texte
        term.cyan("\n" + texte) // Donne le texte aussi
        clipboardy.writeSync(texte); // Met le texte dans le presse papier
        var htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n<meta charset=\"utf-8\">\n<meta content=\"width=device-width, initial-scale=\"1.0\" name=\"viewport\">\n<title>Partage de message chiffré</title>\n</head>\n\n<body>\n<h1>Clé de chiffrement</h1>\n<p>" + key + "</p>\n<h1>Texte chiffré</h1>\n<p>" + texte + "</p>\n<h1>Méthode de chiffrement</h1>\n<p>aes-256-gcm-ctkad / classic-kad</p>\n<h3>Déchiffrable avec <a href=\"https://github.com/johan-perso/crypterm\">Crypterm</a>.</h3>\n</body>\n\n<style>\n    h1,h2,h3,p,a {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #000\n    }\n    body {\n        background-color: #4a348c;\n    }\n</style>" // Contenu du fichier HTML a crée
        if(!fs.existsSync(__dirname + "/Partage")) fs.mkdirSync(__dirname + "/Partage") // Crée un dossier partage si il n'existe pas
        fs.writeFile(__dirname + "/Partage/" + moment().format('YYYY.MM.DD-HH.mm.ss') + ".html", htmlContent, function (err) { // Crée un fichier de partage
            if(err) return term.red(err) // Si il y a une erreur, La donner
            process.exit() // Arrête le processus
         });
    }

    // Type de chiffrage : aio
    if(type === "aio"){
        const keyG = "ChiffrerAvecCrypterm" + Math.floor(Math.random() * (99999999999 - 10000000000) + 10000000000) // Génère une clé
        const cryptr = new Cryptr(keyG) // Défini la clé de chiffrage
        const texteA = cryptr.encrypt(text) // Chiffre le texte
        .replace(/a/g, "#")
        .replace(/b/g, ")")
        .replace(/c/g, "(")
        .replace(/d/g, "@")
        .replace(/e/g, "]")
        .replace(/f/g, "[")
        .replace(/1/g, "{")
        .replace(/2/g, "²")
        .replace(/3/g, "}")
        .replace(/4/g, "!")
        .replace(/5/g, "?")
        .replace(/6/g, "§")
        .replace(/7/g, ";")
        .replace(/8/g, "_")
        .replace(/10/g, "*")
        .replace(/0/g, "|");

        const texte = keyG + "~~~" + texteA // Défini le texte avec clé (le texte final)
        term("\nVotre texte est désormais chiffré : ") // Donne le texte
        term.cyan("\n" + texte) // Donne le texte aussi
        clipboardy.writeSync(texte); // Met le texte dans le presse papier
        var htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n<meta charset=\"utf-8\">\n<meta content=\"width=device-width, initial-scale=\"1.0\" name=\"viewport\">\n<title>Partage de message chiffré</title>\n</head>\n\n<body>\n</p>\n<h1>Texte chiffré</h1>\n<p>" + texte + "</p>\n<h1>Méthode de chiffrement</h1>\n<p>aes-256-gcm-aio / aio</p>\n<h3>Déchiffrable avec <a href=\"https://github.com/johan-perso/crypterm\">Crypterm</a>.</h3>\n</body>\n\n<style>\n    h1,h2,h3,p,a {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #000\n    }\n    body {\n        background-color: #4a348c;\n    }\n</style>" // Contenu du fichier HTML a crée
        if(!fs.existsSync(__dirname + "/Partage")) fs.mkdirSync(__dirname + "/Partage") // Crée un dossier partage si il n'existe pas
        fs.writeFile(__dirname + "/Partage/" + moment().format('YYYY.MM.DD-HH.mm.ss') + ".html", htmlContent, function (err) { // Crée un fichier de partage
            if(err) return term.red(err) // Si il y a une erreur, La donner
            process.exit() // Arrête le processus
         });
    }

    // Type de chiffrage : Binaire
    if(type === "binary"){
        fetch('https://no-api-key.com/api/v1/binary?text=' + text) // Fetch une API en JSON
            .then(res => res.json())
            .then(json => {
                if(json.error === "missing binary query") return term.red("Veuillez entrer un texte à chiffrer.") && process.exit()
                if(json.error === "missing text query") return term.red("Veuillez entrer un texte à chiffrer.") && process.exit()
                if(json.error) return term.red("Une erreur inconnu s'est produite : " + json.error) && process.exit()
                var texte = json.binary
                term("\nVotre texte est désormais chiffré : ") // Donne le texte
                term.cyan("\n" + texte) // Donne le texte aussi
                clipboardy.writeSync(texte); // Met le texte dans le presse papier
                var htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n<meta charset=\"utf-8\">\n<meta content=\"width=device-width, initial-scale=\"1.0\" name=\"viewport\">\n<title>Partage de message chiffré</title>\n</head>\n\n<body>\n<h1>Texte chiffré</h1>\n<p>" + texte + "</p>\n<h1>Méthode de chiffrement</h1>\n<p>Binaire</p>\n<h3>Déchiffrable avec <a href=\"https://github.com/johan-perso/crypterm\">Crypterm</a>.</h3>\n</body>\n\n<style>\n    h1,h2,h3,p,a {\n        font-family: Arial, Helvetica, sans-serif;\n        color: #000\n    }\n    body {\n        background-color: #4a348c;\n    }\n</style>" // Contenu du fichier HTML a crée
                if(!fs.existsSync(__dirname + "/Partage")) fs.mkdirSync(__dirname + "/Partage") // Crée un dossier partage si il n'existe pas
                fs.writeFile(__dirname + "/Partage/" + moment().format('YYYY.MM.DD-HH.mm.ss') + ".html", htmlContent, function (err) { // Crée un fichier de partage
                    if(err) return term.red(err) // Si il y a une erreur, La donner
                    process.exit() // Arrête le processus
                 });
            })
            .catch(err => term.red("\nUne erreur inconnu s'est produite : Veuillez vous connecter à Internet ou vous assurer que l'API fonctionne correctement : https://no-api-key.com.") && process.exit());
    }
};

module.exports.uncrypt = function (text, type, key) { 

    // Type de déchiffrage : Classique
    if(type === "classic"){
        const cryptr = new Cryptr(key); // Défini la clé de chiffrage

        const texte = cryptr.decrypt(text.replace(/@/g, "a").replace(/\(/g, "b").replace(/#/g, "c").replace(/\)/g, "d")) // Déchiffre le texte
        term("\nVotre texte est désormais déchiffré : ") // Donne le texte
        term.cyan("\n" + texte) // Donne le texte aussi
        clipboardy.writeSync(texte); // Met le texte dans le presse papier
        process.exit() // Arrête le processus
    }

    // Type de déchiffrage : Classique-kad
    if(type === "classic-kad"){
        const cryptr = new Cryptr("\x61\x65\x73\x2D\x32\x35\x36\x2D\x67\x63\x6D\x2D\x63\x74\x6B\x61\x64") // Défini la clé de chiffrage (Obfusqué)
        
        const texte = cryptr.decrypt(text.replace(/@/g, "a").replace(/\(/g, "b").replace(/#/g, "c").replace(/\)/g, "d")) // Déchiffre le texte
        term("\nVotre texte est désormais déchiffré : ") // Donne le texte
        term.cyan("\n" + texte) // Donne le texte aussi
        clipboardy.writeSync(texte); // Met le texte dans le presse papier
        process.exit() // Arrête le processus
    }

    // Type de déchiffrage : aio
    if(type === "aio"){
        var [keyG, textWithoutKey] = text.split("~~~") // Définition de la clé et du texte sans clé inclus
        const cryptr = new Cryptr(keyG) // Défini la clé de chiffrage
        
        const texte = cryptr.decrypt(textWithoutKey.replace(/#/g, "a").replace(/\)/g, "b").replace(/\(/g, "c").replace(/@/g, "d").replace(/]/g, "e").replace(/\[/g, "f").replace(/{/g, "1").replace(/²/g, "2").replace(/}/g, "3").replace(/!/g, "4").replace(/\?/g, "5").replace(/§/g, "6").replace(/;/g, "7").replace(/_/g, "8").replace(/\*/g, "9").replace(/\|/g, "0")) // Déchiffre le texte
        term("\nVotre texte est désormais déchiffré : ") // Donne le texte
        term.cyan("\n" + texte) // Donne le texte aussi
        clipboardy.writeSync(texte); // Met le texte dans le presse papier
        process.exit() // Arrête le processus
    }

    // Type de déchiffrage : Binaire
    if(type === "binary"){
        fetch('https://no-api-key.com/api/v1/binary-text?binary=' + text) // Fetch une API en JSON
            .then(res => res.json())
            .then(json => {
                if(json.error === "missing binary query") return term.red("Veuillez entrer un texte à chiffrer.") && process.exit()
                if(json.error === "missing text query") return term.red("Veuillez entrer un texte à chiffrer.") && process.exit()
                if(json.error) return term.red("Une erreur inconnu s'est produite : " + json.error) && process.exit()
                var texte = json.text.replace(/%E0/g, "à").replace(/%E9/g, "é").replace(/%E8/g, "è").replace(/%5C/g, "\\").replace(/%22/g, "\"")
                term("\nVotre texte est désormais déchiffré : ") // Donne le texte
                term.cyan("\n" + texte) // Donne le texte aussi
                clipboardy.writeSync(texte); // Met le texte dans le presse papier
                process.exit() // Arrête le processus
            })
            .catch(err => term.red("\nUne erreur inconnu s'est produite : Veuillez vous connecter à Internet ou vous assurer que l'API fonctionne correctement : https://no-api-key.com.") && process.exit());
    }
};
