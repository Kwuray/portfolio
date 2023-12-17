class SceneAccueil
{
    constructor()
    {
        this.personnageHabbo = new PersonnageHabbo("Nicolas");
        this.root = document.querySelectorAll(".scene, .accueil")[0];
        this.prairie = this.root.getElementsByClassName("prairie")[0];
        this.dejaInitilise = false;
    }

    afficher()
    {
        this.root.classList.add("selection");
        if (this.dejaInitilise == false)
        {
            this.initialiser();
        }
    }

    masquer()
    {
        this.root.classList.remove("selection");
    }

    decorAleatoire()
    {
        //Initialisation de tous les décors possibles
        let fleur = new PixelArt(3, 4, 2, "fleur", JSONFleur.frames[0].grid);
        let herbe = new PixelArt(7, 5, 2, "herbe", JSONHerbe.frames[0].grid);
        let listeDecorElement = new Array(fleur, herbe);
        return listeDecorElement[Utils.nombreAleatoire(0, listeDecorElement.length - 1)]
    }
    
    genererPrairie()
    {
        let hauteurZone = this.prairie.offsetHeight / 10;
        let largeurZone = this.prairie.offsetWidth / 10;
        let prairieHtml = "";
        //On parcours des "sous-zones"
        for (let i = 0; i < this.prairie.offsetHeight; i += hauteurZone)
        {//Parcours des lignes
            let hauteurFin = i + hauteurZone;
            for (let j = 0; j < this.prairie.offsetWidth; j += largeurZone)
            {//Parcours des colonnes
                let decorationListe = new Array();
                let largeurFin = j + largeurZone;
                //On créer un objet décor
                for (let k = 0; k < 2; k++)
                {
                    let decorActuel = this.decorAleatoire();
                    //On calcul au hasard les coordonnées de départ (selon un interval max)
                    decorActuel.definirPosition(Utils.nombreAleatoire(j, largeurFin - (decorActuel.largeur * decorActuel.taillePixel)), Utils.nombreAleatoire(i, hauteurFin - (decorActuel.hauteur * decorActuel.taillePixel)));
                    //On regarde les décors déjà positionnées
                    let index = 0;
                    let stop = false;
                    while (stop == false && index < decorationListe.length)
                    {
                        stop = decorationListe.at(index).conflitAvecAutreElementDecor(decorActuel) || decorActuel.conflitAvecAutreElementDecor(decorationListe.at(index));
                        index++;
                    }
                    if (stop == false)
                    { //On peut ajouter le décor !
                        let html = document.createElement("div");
                        html.appendChild(decorActuel.getPixelArtHtmlElement());
                        prairieHtml += html.innerHTML;
                        decorationListe.push(decorActuel);
                    }
                }
            }
        }
        this.prairie.innerHTML += prairieHtml;
    }

    modifierServiettesPlage()
    {
        let servietteListe = this.root.getElementsByClassName("serviette");
        let couleurListe = new Array("cadetblue", "brown", "cornflowerblue", "darkorange");
        for (const serviette of servietteListe)
        {
            serviette.style.left = Utils.nombreAleatoire(0, 75) + "px";
            serviette.style.top = Utils.nombreAleatoire(-8, 8) + "px";
            for (const element of serviette.querySelectorAll("div"))
            {
                element.style.backgroundColor = couleurListe[Utils.nombreAleatoire(0, couleurListe.length - 1)]
            }
        }
    }
    initialiser()
    {
        let route1 = new Route(18, 5, 10, 4);
        this.genererPrairie();
        this.modifierServiettesPlage();
        //Gestion du clic sur le personnage
        let lignePersonnageHabbo = document.getElementById("habbo_personnage").getElementsByClassName("pixel_art")[0].getElementsByTagName("div");
        for (const ligne of lignePersonnageHabbo)
        {
            ligne.addEventListener("click", ev =>
            {
                afficherArticle("presentation");
            })
        }
        this.personnageHabbo.parler("Bonjour et bienvenue sur mon portfolio :)");
        this.personnageHabbo.parler("Je m'appelle Nicolas, je suis actuellement en 2e année de BUT Informatique en alternance.")
        this.personnageHabbo.parler("J'ai repris mes études suite à un bilan de compétences, et j'ai enfin trouvé un domaine qui me passionne.")
        this.personnageHabbo.parler("J'ai réalisé ce portfolio sous forme de \"tableau\" artistique pour montrer ce qui me représente et ce que j'apprécie.");
        this.personnageHabbo.parler("C'est également un défi pour moi car c'est un moyen de me perfectionner en HTML/CSS en utilisant un angle différent.");
<<<<<<< HEAD:js/classe/SceneAccueil.js
        this.personnageHabbo.parler("Vous pouvez cliquer sur mon personnage pour en savoir plus sur mon parcours, et mes différents projets. Bonne découverte !");
=======
        this.personnageHabbo.parler("Vous pouvez cliquer sur mon personnage pour en savoir plus sur mon parcours, et mes différents projet. Bonne découverte !");
>>>>>>> a69d2e7 (portfolio pour presentation):game/js/classe/SceneAccueil.js
        this.dejaInitilise = true;
    }
}