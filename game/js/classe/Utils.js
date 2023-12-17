class Utils
{
    static nombreAleatoire(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static divAvecClasse(classeNom)
    {
        let result = document.createElement("div");
        if (classeNom != "")
        {
            result.classList.add(classeNom);
        }
        return result;
    }
}