//Lorsque la page est complètement chargée

let articleListe;
let ombre;
document.addEventListener("DOMContentLoaded", function()
{
    genererDecor();
    articleListe = document.getElementsByClassName("article");
    ombre = document.getElementById("ombre");

    //Gestion du contenu d'un article
    for (const article of articleListe)
    {
        article.addEventListener("animationend", evt =>
        {
            if (article.classList.contains("montrer"))
            {
                article.getElementsByClassName("contenu")[0].style.display = "block";
            }
        })
    }

    //Gestion du flou
    decor.addEventListener("animationstart", e =>
    {
        if (decor.classList.contains("flouter"))
        {
            let articleCourant = document.querySelectorAll(".article, .selection")[0];
            articleCourant.classList.add("montrer");
        }
    });

    //Gestion du clic sur le personnage
    let lignePersonnageHabbo = document.getElementById("habbo_personnage").getElementsByClassName("pixel_art")[0].getElementsByTagName("div");
    for (const ligne of lignePersonnageHabbo)
    {
        ligne.addEventListener("click", ev =>
        {

            let articleCourant = document.getElementById("article_presentation");
            articleCourant.classList.add("selection");
            decor.classList.add("flouter");
            ombre.classList.add("afficher");
        })
    }
});