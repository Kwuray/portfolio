function initialiserLignes()
{
    listeLigne = document.getElementsByClassName("ligne");
    for (const ligne of listeLigne)
    {
        if (ligne.classList.contains("haut") || ligne.classList.contains("bas"))
        {
            ligne.classList.add("verticale");
        }
        else if (ligne.classList.contains("gauche") || ligne.classList.contains("droite"))
        {
            ligne.classList.add("horizontale");
        }
    }
}

//Lorsque la page est complètement chargée
document.addEventListener("DOMContentLoaded", function()
{
    initialiserLignes();
});