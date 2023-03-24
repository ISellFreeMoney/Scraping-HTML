## **A lire pour comprendre comment fonctionne le programme**
Ce programme permet de convertir un fichier CSV en fichier JSON pour qu'il soit lisible dans un site web.
Pour ce faire, il y a plusieurs étapes a suivre. En premier lieu, il faut ouvrir le fichier CSV dans un ligiciel type excel. 
Retirer toutes les colonnes inutiles, puis il faut changer tous les **|||** en **^**. Il faut ensuite modifier le fichier est **"Listing.csv"**. Ces points sont évidemment facilement modifiables dans le code. 

Après avoir cloné le répo, il va falloir exécuter la commande:

    > npm install

Toutes les dépendances pour le bon fonctionnement du programme sont installées. Il va enfin, falloir placer le fichier CSV modifié précédemment à la racine du programme. Et executer la commande:

    > node ./excel.js

Un fichier json devrait apparaitre à la racine du programme. Il suffit enfin de lancer la page internet "index.html"
Et cliquer sur le bouton ***"Créer la table à partir des données"***
