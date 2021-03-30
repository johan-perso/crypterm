#!/usr/bin/env node

// Dépendances
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const crypterm = require('./crypt.js'); // Fichier local

// Partie principale du code
term("Que voulez vous faire ?") // Demande ce qu'on veut faire

term.singleColumnMenu(["Chiffrer","Déchiffrer","Informations sur Crypterm"], function(error, response){
        if(response.selectedIndex === 0) var method = "crypt" // Définir METHOD avec la méthode
        if(response.selectedIndex === 1) var method = "uncrypt" // Définir METHOD avec la méthode

        // Si la méthode est d'afficher des informations
        if(response.selectedIndex === 2){
            term("Crypterm est un projet crée par Johan (")
            term.cyan("https://bit.ly/johanstickman-home")
            term("). Ce projet permet de chiffrer et de déchiffrer du texte grâce à plusieurs méthode de chiffrement depuis un terminal. ")
            term("Johan possède aussi d'autres projet via terminal comme Twitterminal (")
            term.cyan("https://bit.ly/twitterminal-home")
            term("), Terminalchat (")
            term.cyan("https://bit.ly/terminalchat-home")
            term("), Rickdetect (")
            term.cyan("https://bit.ly/rickdetect-github")
            term("). Vous pouvez contacter Johan via Twitter (")
            term.cyan("https://bit.ly/johanstickman-twitter")
            term(") ou Discord (")
            term.cyan("Johan#8021")
            term("). Pour signaler un problème ou apporter son aide à Crypterm, veuillez vous rendre dans les issues de Crypterm (")
            term.cyan("http://bit.ly/crypterm-issue")
            term("). Il existe aussi un wiki (")
            term.cyan("http://bit.ly/crypterm-wiki")
            term(") pour Crypterm.")

            process.exit()
        }

        term("\nQuel type de chiffrement voulez vous utilisez ?") // Demande le type de chiffrement
        term.singleColumnMenu(["classic","classic-kad","Binaire (Bêta)","aio"], function(error, response){
            if(response.selectedIndex === 0) var type = "classic" // Définir TYPE avec le type de chiffrement
            if(response.selectedIndex === 1) var type = "classic-kad" // Définir TYPE avec le type de chiffrement
            if(response.selectedIndex === 2) var type = "binary" // Définir TYPE avec le type de chiffrement
            if(response.selectedIndex === 3) var type = "aio" // Définir TYPE avec le type de chiffrement

            if(response.selectedIndex === 0){
                
            term("\nVeuillez saisir une clé de chiffrement : ") // Demande de clé
            term.cyan() // Met le texte écrit par l'utilisateur en cyan
            term.inputField(function(error, key){
                // Obligé de choisir une clé
                if(key.length === 0){
                    term.red("\nVeuillez saisir une clé de chiffrement.")
                    return process.exit()
                }   
                // Demande une clé longue
                if(key.length < 5){
                    term.red("\nVeuillez saisir une clé de chiffrement plus longue.")
                    return process.exit()
                }  
                // Demande de ne pas mettre de balise HTML
                if(key.includes('<') && key.includes('/>')){
                    term.red("\nVous ne pouvez pas entrer de code HTML.")
                    return process.exit()
                }
                term("\nVeuillez saisir un texte à (dé)chiffré : ") // Demande de texte
                term.cyan() // Met le texte écrit par l'utilisateur en cyan
                term.inputField(function(error, text){
                    
                    if(method === "crypt"){ crypterm.crypt(text, type, key) } // Si la méthode est CRYPT, Dire à crypt.js de chiffrer avec les informations : text, type et key
                    if(method === "uncrypt"){ crypterm.uncrypt(text, type, key) } // Si la méthode est UNCRYPT, Dire à crypt.js de déchiffrer avec les informations : text, type et key

                }); 

            });    
        } else {
            if(response.selectedIndex === 1 || response.selectedIndex === 2 || response.selectedIndex === 3){  
                term("\nVeuillez saisir un texte à (dé)chiffré : ") // Demande de texte
                term.cyan() // Met le texte écrit par l'utilisateur en cyan
                term.inputField(function(error, text){
                    
                    if(method === "crypt"){ crypterm.crypt(text, type) } // Si la méthode est CRYPT, Dire à crypt.js de chiffrer avec les informations : text et type
                    if(method === "uncrypt"){ crypterm.uncrypt(text, type) } // Si la méthode est UNCRYPT, Dire à crypt.js de déchiffrer avec les informations : text et type

                }); 
            }
        }
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
