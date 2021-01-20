# Crypterm

## Prérequis

  - Environ 100 mo d'espace disque
  - Un terminal compatible avec terminal-kit
  - Quelques connaissances
  

## Installer Crypterm

### Installation classique (Compatible avec la plupart des OS)
Installez Node.js depuis le site de [nodejs](https://nodejs.org/) ou un autre endroit tierce ayant npm embarqué, Créez un dossier "Crypterm", Ouvrez un invite de commande / terminal depuis ce dossier puis faites cette commande pour installez toutes les dépendance `npm i terminal-kit clipboardy cryptr`. Téléchargez le fichier zip correspondant à la dernière version et extrayer le dossier "classic" et "classic-kad" dans le dossier précédemment créé. Une fois ceci fait tout est bon : Rendez vous à l'étape pour chiffrer / déchiffrer du texte avec Crypterm.


### Installation rapide (Compatible avec la plupart des distributions Linux et MacOS)
Installez [nodejs](https://nodejs.org/) puis faites cette commande dans un terminal
```
Bientôt disponible...
```


## Utilisation de Crypterm

Ouvrez un invite de commande / terminal dans le dossier que vous avez créé lors de l'installation.

### Chiffrer un texte | classic

Entrez la commande `node classic/crypt.js` puis entrer la clé qui permettra de déchiffrer votre fichier plus tard, Ensuite entrer un texte que vous voulez chiffrer. Le texte chiffré est mit automatiquement dans votre presse papier.

### Déchiffrer un texte | classic

Entrez la commande `node classic/uncrypt.js` puis entrer la clé qui permet de déchiffrer votre fichier, Ensuite entrer le texte déjà chiffré. Le texte déchiffré est mit automatiquement dans votre presse papier.


### Chiffrer un texte | classic-kad

Entrez la commande `node classic-kad/crypt.js` puis entrer un texte que vous voulez chiffrer. Le texte chiffré est mit automatiquement dans votre presse papier.

### Déchiffrer un texte | classic-kad

Entrez la commande `node classic-kad/uncrypt.js` puis entrer le texte déjà chiffré. Le texte déchiffré est mit automatiquement dans votre presse papier.


## J'ai besoin d'aide

Si vous avez besoin d'aide, Venez m'envoyer un message privé sur Discord ou Twitter (https://twitter.com/Johan_Perso) (Johan#8021). Vous pouvez aussi utiliser les issues disponible sur GitHub pour signaler un problème.
