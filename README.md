## API Express-mongo rapide

1. Créer un dossier dog-express et dedans on fait un npm init -y
	
2. Ensuite faire un npm install de : express cors joi mongodb dotenv
	
3. Faire un npm install -D de @types/express @types/cors ts-node-dev
	
4. Créer un dossier src et dedans faire un fichier app.ts dans lequel on  charge dotenv, on crées une application express dans laquelle on fait un use du express.json() et un use du cors et on la fait écouter le port 8000 par défaut
	
5. On créer un fichier entities.ts dans le dossier src et on fait une interface Dog dedans qui aura donc un _id?:any, un name, une breed et une birthdate, le tout en string
	
6. On fait un fichier .env avec la connexion à la bdd dedans
	
7. On créer un fichier src/repository/dog-repository.ts et dedans on fait une instance de MongoClient, on se connecte à une bdd dog-express et on sélectionne une collection dog
	
8. On fait pour le moment juste un findAll et un persist
	
9. On crée un dossier controller et dedans on fait un contrôleur avec un GET et un POST pour la liste et le persist et de la validation pour le persist