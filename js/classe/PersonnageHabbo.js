class PersonnageHabbo extends PixelArt
{
    constructor(nom)
    {
        super(31, 89, 1.5,"", JSONHabboPersonnage.frames[0].grid);
        let personnageRoot = document.getElementById("habbo_personnage");
        personnageRoot.appendChild(Utils.divAvecClasse("message_liste"));
        personnageRoot.style.height = this.hauteur * this.taillePixel + "px";
        personnageRoot.style.width = this.largeur * this.taillePixel + "px";
        personnageRoot.appendChild(this.getPixelArtHtmlElement());
        this.nom = nom;
    }

    tete()
    {
        let resultat = new PixelArt(27, 35, 1, "habbo_tete", JSONHabboTete.frames[0].grid)
        return resultat.getPixelArtHtmlElement();
    }

    bulleMessage()
    {
        let root = Utils.divAvecClasse("bulle_habbo_root");

        let bulle = Utils.divAvecClasse("bulle_habbo");
        let teteBulle = Utils.divAvecClasse("tete_bulle_habbo");
        teteBulle.appendChild(this.tete());

        let separation = Utils.divAvecClasse("separation");
        separation.appendChild(Utils.divAvecClasse("trait"));
        separation.appendChild(Utils.divAvecClasse("pointe"));

        let message = Utils.divAvecClasse("message");
        message.appendChild(document.createElement("p"));

        bulle.appendChild(teteBulle);
        bulle.appendChild(separation);
        bulle.appendChild(message);

        root.appendChild(bulle);

        return root;
    }

    parler(message)
    {
        let personnageRoot = document.getElementById("habbo_personnage");
        let messageElement = this.bulleMessage();
        messageElement.getElementsByClassName("message")[0].getElementsByTagName("p")[0].innerHTML = "<span>" + this.nom + ": " + "</span>" +  message;
        //On arrête l'animation de la dernière bulle
        let listeMessage = personnageRoot.getElementsByClassName("bulle_habbo_root");
        if (listeMessage.length > 0)
        {
            let dernierMessage = listeMessage[listeMessage.length - 1];
            dernierMessage.style.animationPlayState = "paused";
            dernierMessage.style.paddingBottom = getComputedStyle(dernierMessage).paddingBottom;
        }
        //Gestion de l'incrémentation du padding
        messageElement.addEventListener("animationiteration", function ()
        {
            let iterationCourante = Number(getComputedStyle(messageElement).getPropertyValue('--total-iteration'));
            iterationCourante++;
            let paddingDebut = iterationCourante * 40;
            let paddingFin = paddingDebut + 40;
            messageElement.style.setProperty('--padding-debut', paddingDebut + "px");
            messageElement.style.setProperty('--padding-fin', paddingFin + "px");
            messageElement.style.setProperty('--total-iteration', "" + iterationCourante);
        });
        personnageRoot.getElementsByClassName("message_liste")[0].appendChild(messageElement);
    }
}