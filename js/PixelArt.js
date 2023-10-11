class PixelArt
{
    constructor(hauteur, largeur, taillePixel, nomClasse, grid)
    {
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.taillePixel = taillePixel;
        this.nomClasse = nomClasse;
        this.grid = grid;
    }

    debutLigne(numLigne)
    {
        let fini = false;
        let i = 0;
        while (!fini && i < this.largeur)
        {
            fini = this.grid[(numLigne * this.largeur) + i] != "";
            if (!fini)
            {
                i++;
            }
        }
        return i;
    }

    finLigne(numLigne)
    {
        let fini = false;
        let i = this.largeur - 1;
        while (!fini && i > 0)
        {
            fini = this.grid[(numLigne * this.largeur) + i] != "";
            if (!fini)
            {
                i--;
            }
        }
        return i;
    }

    htmlElement()
    {
        let resultat = document.createElement("div");
        resultat.classList.add("pixel_art");
        resultat.classList.add(this.nomClasse);
        resultat.style.height = "" + (this.hauteur * this.taillePixel);
        resultat.style.width = "" + (this.largeur * this.taillePixel);
        for (let i = 0; i < this.hauteur; i++)
        {//Pour chaque ligne
            let debut = this.debutLigne(i);
            let fin = this.finLigne(i);
            let ligne = document.createElement("div");
            ligne.style.top = (i * this.taillePixel) + "px";
            ligne.style.left = (debut * this.taillePixel) + "px";
            ligne.style.width = fin - debut + 1;
            ligne.style.height = this.taillePixel;
            for (let j = debut; j <= fin; j++)
            {
                let couleur = this.grid[(i * this.largeur) + j];
                if (couleur == "")
                {
                    couleur = "transparent";
                }
                let pixel = document.createElement("div");
                pixel.style.height = this.taillePixel;
                pixel.style.width = this.taillePixel;
                pixel.style.left = ((j - debut) * this.taillePixel) + "px";
                pixel.style.backgroundColor = couleur;
                ligne.appendChild(pixel);
            }
            resultat.appendChild(ligne);
        }
        return resultat;
    }
}