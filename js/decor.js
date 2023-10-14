let decor;
let personnageHabbo;
function decorAleatoire()
{
    //Initialisation de tous les décors possibles
    let fleur = new PixelArt(3, 4, 5, "fleur", JSONFleur.frames[0].grid);
    let herbe = new PixelArt(7, 5, 5, "herbe", JSONHerbe.frames[0].grid);
    let listeDecorElement = new Array(fleur, herbe);
    return listeDecorElement[Utils.nombreAleatoire(0, listeDecorElement.length - 1)]
}

function genererDecor()
{
    personnageHabbo = new PersonnageHabbo(document.getElementById("habbo_personnage"), document.getElementById("habbo_personnage").getElementsByClassName("message_liste")[0], "Nicolas");
    decor = document.getElementById("decor");
    personnageHabbo.personnageRoot.appendChild(personnageHabbo.getPixelArtHtmlElement());
    let hauteurZone = decor.offsetHeight / 10;
    let largeurZone = decor.offsetWidth / 10;
    let decorHtml = "";
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
                let decorActuel = decorAleatoire();
                //On calcul au hasard les coordonnées de départ (selon un interval max)
                decorActuel.definirPosition(Utils.nombreAleatoire(j, largeurFin - decorActuel.largeur - decorActuel.taillePixel), Utils.nombreAleatoire(i, hauteurFin - decorActuel.hauteur - decorActuel.taillePixel));
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
                    let html = document.createElement("div");
                    html.appendChild(decorActuel.getPixelArtHtmlElement());
                    decorHtml += html.innerHTML;
                    decorListe.push(decorActuel);
                }
            }
        }
    }
    decor.innerHTML += decorHtml;
}