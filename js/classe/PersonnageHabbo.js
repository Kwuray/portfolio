class PersonnageHabbo extends PixelArt
{
    constructor(personnageRoot, listeMessageRoot, nom)
    {
        super(31, 89, 2,"habbo_personnage", JSONHabboPersonnage.frames[0].grid);
        this.personnageRoot = personnageRoot;
        this.listeMessageRoot = listeMessageRoot;
        this.nom = nom;
        personnageRoot.style.height = this.hauteur * this.taillePixel + "px";
        personnageRoot.style.width = this.largeur * this.taillePixel + "px";
    }

    bulleMessage()
    {
        let root = Utils.divAvecClasse("bulle_habbo_root");

        let bulle = Utils.divAvecClasse("bulle_habbo");
        let teteBulle = Utils.divAvecClasse("tete_bulle_habbo");
        teteBulle.appendChild(Utils.divAvecClasse("habbo_tete"));

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
        let messageElement = this.bulleMessage();
        messageElement.getElementsByClassName("message")[0].getElementsByTagName("p")[0].innerHTML = "<span>" + this.nom + ": " + "</span>" +  message;
        //On arrête l'animation de la dernière bulle
        let listeMessage = this.listeMessageRoot.getElementsByClassName("bulle_habbo_root");
        if (listeMessage.length > 0)
        {
            let dernierMessage = listeMessage[listeMessage.length - 1];
            dernierMessage.style.animationPlayState = "paused";
            dernierMessage.style.paddingBottom = getComputedStyle(dernierMessage).paddingBottom;
        }
        this.listeMessageRoot.appendChild(messageElement);
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
    }
}