let decor;

class ElementDecor
{
    constructor(largeur, hauteur, classCss, taillePixel)
    {
        this.classCss = classCss;
        this.largeur = largeur * taillePixel;
        this.hauteur = hauteur * taillePixel;
        this.taillePixel = taillePixel;
        this.largeurDebut = 0;
        this.hauteurDebut = 0;
        this.largeurFin = largeur * taillePixel;
        this.hauteurFin = hauteur * taillePixel;
    }

    getHauteur()
    {
        return this.hauteur;
    }

    getLargeur()
    {
        return this.largeur
    }

    getTaillePixel()
    {
        return this.taillePixel;
    }

    definirPosition(largeurDebut, hauteurDebut)
    {
        this.largeurDebut = largeurDebut;
        this.hauteurDebut = hauteurDebut;
        this.largeurFin = largeurDebut + this.largeur;
        this.hauteurFin = hauteurDebut + this.hauteur;
    }

    conflitAvecAutreElementDecor(elementDecor)
    {
        /*console.log("moi " + this.classCss);
        console.log("[" + this.largeurDebut + ";" + this.hauteurDebut + "] - [" + this.largeurFin + ";" + this.hauteurFin + "]");
        console.log("lui " + elementDecor.classCss);
        console.log("[" + elementDecor.largeurDebut + ";" + elementDecor.hauteurDebut + "] - [" + elementDecor.largeurFin + ";" + elementDecor.hauteurFin + "]");*/
        //Vérification du coin haut gauche
        if ((elementDecor.largeurDebut >= this.largeurDebut && elementDecor.largeurDebut <= this.largeurFin) && (elementDecor.hauteurDebut >= this.hauteurDebut && elementDecor.hauteurDebut <= this.hauteurFin))
        {
            return true;
        }
        //Vérification du coin haut droit
        if ((elementDecor.largeurFin >= this.largeurDebut && elementDecor.largeurFin <= this.largeurFin) && (elementDecor.hauteurDebut >= this.hauteurDebut && elementDecor.hauteurDebut <= this.hauteurFin))
        {
            return true;
        }
        //Vérification du coin bas gauche
        if ((elementDecor.largeurDebut >= this.largeurDebut && elementDecor.largeurDebut <= this.largeurFin) && (elementDecor.hauteurFin >= this.hauteurDebut && elementDecor.hauteurFin <= this.hauteurFin))
        {
            return true;
        }
        //Vérification du coin bas droit
        if ((elementDecor.largeurFin >= this.largeurDebut && elementDecor.largeurFin <= this.largeurFin) && (elementDecor.hauteurFin >= this.hauteurDebut && elementDecor.hauteurFin <= this.hauteurFin))
        {
            return true;
        }
        return false;
    }

    genererElementHtml()
    {
        let decorDiv = document.createElement("div");
        decorDiv.classList.add(this.classCss);
        decorDiv.style.position = "absolute";
        decorDiv.style.left = this.largeurDebut;
        decorDiv.style.top = this.hauteurDebut;
        return decorDiv;
    }

    static aleatoire()
    {
        let alea = Math.random();
        if (alea >= 0 && alea < 0.50)
        {
            return new Herbe();
        }
        else
        {
            return new Fleur();
        }
    }
}

class Herbe extends ElementDecor
{
    constructor() {
        super(7, 5, "herbe", 5);
    }
}

class Fleur extends ElementDecor
{
    constructor() {
        super(3, 4, "fleur", 5);
    }
}

function genererDecor()
{
    decor = document.getElementById("decor");
    let personnageHabbo = new PixelArt(89, 31, 1,"habbo_personnage", JSONHabboPersonnage.frames[0].grid);
    let personnageHabboHtmlElement = personnageHabbo.htmlElement();
    let listeMessage = document.createElement("div");
    listeMessage.classList.add("message_liste");
    personnageHabboHtmlElement.appendChild(listeMessage);
    decor.appendChild(personnageHabboHtmlElement);
    let hauteurZone = decor.offsetHeight / 10;
    let largeurZone = decor.offsetWidth / 10;
    //On parcours des "sous-zones"
    for (let i = 0; i < decor.offsetHeight; i += hauteurZone)
    {//Parcours des lignes
        let hauteurFin = i + hauteurZone;
        for (let j = 0; j < decor.offsetWidth; j += largeurZone)
        {//Parcours des colonnes
            let decorListe = new Array();
            let largeurFin = j + largeurZone;
            //On créer un objet décor
            for (let k = 0; k < 5; k++)
            {
                let decorActuel = ElementDecor.aleatoire();
                //On calcul au hasard les coordonnées de départ (selon un interval max)
                decorActuel.definirPosition(nombreAleatoire(j, largeurFin - decorActuel.getLargeur() - decorActuel.getTaillePixel()), nombreAleatoire(i, hauteurFin - decorActuel.getHauteur() - decorActuel.getTaillePixel()));
                //On regarde les décors déjà positionnées
                let index = 0;
                let stop = false;
                while (stop == false && index < decorListe.length)
                {
                    stop = decorListe.at(index).conflitAvecAutreElementDecor(decorActuel) || decorActuel.conflitAvecAutreElementDecor(decorListe.at(index));
                    index++;
                }
                if (stop == false)
                { //On peut ajouter le décor !
                    let html = decorActuel.genererElementHtml()
                    decor.appendChild(html);
                    decorListe.push(decorActuel);
                }
            }
        }
    }
}