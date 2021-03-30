#!/usr/bin/env node

// Dépendances
var term = require('terminal-kit').terminal; // https://www.npmjs.com/package/terminal-kit
const crypterm = require('./crypt.js'); // Fichier local

// Partie principale du code
term("Que voulez vous faire ?") // Demande ce qu'on veut faire

term.singleColumnMenu(["Chiffrer","Déchiffrer"], function(error, response){
        if(response.selectedIndex === 0) var method = "crypt" // Définir METHOD avec la méthode
        if(response.selectedIndex === 1) var method = "uncrypt" // Définir METHOD avec la méthode

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
