//Lorsque la page est complètement chargée

let decor;
let personnageHabbo;
let articleListe = new Map();
let articleActuel = null;
let ombre;

function initialiserVariablesGlobales()
{
    personnageHabbo = new PersonnageHabbo("Nicolas");
    decor = document.getElementById("decor");
    for (const article of document.getElementsByTagName("article"))
    {
        articleListe.set(article.id, article);
    }
    ombre = document.getElementById("ombre");
}

document.addEventListener("DOMContentLoaded", function()
{
    initialiserVariablesGlobales();
    genererDecor();
    initialiserArticles();

    decor.appendChild(personnageHabbo.personnageRoot);

    //Gestion du clic sur le personnage
    let lignePersonnageHabbo = document.getElementById("habbo_personnage").getElementsByClassName("pixel_art")[0].getElementsByTagName("div");
    for (const ligne of lignePersonnageHabbo)
    {
        ligne.addEventListener("click", ev =>
        {
            afficherArticle("article_presentation");
        })
    }

    personnageHabbo.parler("Bonjour et bienvenue sur mon portfolio :)");
    personnageHabbo.parler("N'hésitez pas à cliquer sur moi pour en savoir plus !");
});