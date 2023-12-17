class Route extends DecorElement
{
    constructor(nbLignePave, hauteurPave, largeurPave, nbPaveLargeur)
    {
        super((nbPaveLargeur * largeurPave) + (nbPaveLargeur - 1), (nbLignePave * hauteurPave) + (nbLignePave - 1), 1, "route_pave");
        this.nbLignePave = nbLignePave;
        this.hauteurPave = hauteurPave;
        this.largeurPave = largeurPave;
        this.nbPaveLargeur = nbPaveLargeur;
    }

    generer()
    {
        let result = this.genererDecorElementHtml();
        for (let i = 0; i < this.nbLignePave; i++)
        {
            let ligne = Utils.divAvecClasse("pave_ligne");
            let nbPave = this.nbPaveLargeur;
            if (i % 2 != 0)
            {
                nbPave--;
            }
            for (let j = 0; j < nbPave; j++)
            {
                let pave = (Utils.divAvecClasse("pave"));
                if (i % 2 != 0)
                {
                    pave.style.width = (this.largeurPave * 1.20) + "px";
                }
                else
                {
                    pave.style.width = this.largeurPave + "px";
                }
                pave.style.height = this.hauteurPave + "px";
                ligne.appendChild(pave);
            }
            result.appendChild(ligne);
        }
        return result;
    }
}