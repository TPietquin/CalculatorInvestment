Calculateur d'Investissement

Ce projet est une application web développée avec React qui permet aux utilisateurs de calculer le rendement potentiel de leurs investissements sur une période donnée. L'application fournit une interface interactive pour saisir les données d'investissement et visualiser les résultats.
Fonctionnalités

Saisie des paramètres d'investissement:

Investissement initial
Investissement annuel
Rendement attendu (%)
Durée (en années)


Calcul automatique des résultats basé sur les entrées
Affichage détaillé des résultats année par année
Visualisation des intérêts générés et de la valeur de l'investissement

Technologies utilisées

React.js
JavaScript (ES6+)
CSS pour le stylage
Vite comme outil de build

Installation
Pour exécuter ce projet localement, suivez ces étapes:

Clonez ce dépôt sur votre machine locale
Copiergit clone https://github.com/votre-nom-utilisateur/calculateur-investissement.git

Naviguez dans le répertoire du projet
Copiercd calculateur-investissement

Installez les dépendances
Copiernpm install

Lancez le serveur de développement
Copiernpm run dev

Ouvrez votre navigateur et accédez à http://localhost:5173

Comment utiliser l'application

Entrez votre montant d'investissement initial
Spécifiez le montant que vous prévoyez d'investir chaque année
Définissez le taux de rendement annuel attendu (en pourcentage)
Choisissez la durée de votre investissement en années
Les résultats se mettront à jour automatiquement, montrant la croissance de votre investissement année par année

Fonctionnement du calcul
Le calcul du rendement de l'investissement est basé sur la formule d'intérêt composé avec des ajouts annuels constants. Pour chaque année:

Les intérêts sont calculés sur la valeur actuelle de l'investissement
L'investissement annuel est ajouté après le calcul des intérêts
La nouvelle valeur totale est utilisée pour calculer les intérêts de l'année suivante

Contribution
Les contributions à ce projet sont les bienvenues. Pour contribuer:

Forkez le projet
Créez votre branche de fonctionnalité (git checkout -b feature/AmazingFeature)
Committez vos changements (git commit -m 'Add some AmazingFeature')
Poussez vers la branche (git push origin feature/AmazingFeature)
Ouvrez une Pull Request

Contact
tanguy@tanguypietquin.dev
