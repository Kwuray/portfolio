class DecorElement
{
    constructor(largeur, hauteur, taillePixel, nomClasse)
    {
        this.nomClasse = nomClasse;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.taillePixel = taillePixel;
        this.largeurDebut = 0;
        this.hauteurDebut = 0;
        this.largeurFin = largeur;
        this.hauteurFin = hauteur;
    }

    definirPosition(largeurDebut, hauteurDebut)
    {
        this.largeurDebut = largeurDebut;
        this.hauteurDebut = hauteurDebut;
        this.largeurFin = largeurDebut + (this.largeur * this.taillePixel);
        this.hauteurFin = hauteurDebut + (this.hauteur * this.taillePixel);
    }

    conflitAvecAutreElementDecor(elementDecor)
    {
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

    genererDecorElementHtml()
    {
        let decorDiv = Utils.divAvecClasse(this.nomClasse);
        decorDiv.style.position = "absolute";
        decorDiv.style.left = this.largeurDebut;
        decorDiv.style.top = this.hauteurDebut;
        return decorDiv;
    }
}



