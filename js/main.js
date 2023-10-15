//Lorsque la page est complètement chargée

let articleListe = new Map();
let articleActuel = null;
let sceneListe = new Map();
let sceneActuelle = null;
let ombre;

function initialiserVariablesGlobales()
{

    for (const article of document.getElementsByTagName("article"))
    {
        articleListe.set(article.dataset["nom"], article);
    }
    ombre = document.getElementById("ombre");
    sceneListe.set("accueil", new SceneAccueil());
}

function selectionnerScene(nom)
{
    if (sceneActuelle != null)
    {
        sceneActuelle.masquer();
    }
    sceneActuelle = sceneListe.get(nom);
    sceneActuelle.afficher();
}

document.addEventListener("DOMContentLoaded", function()
{
    initialiserVariablesGlobales();
    initialiserArticles();
    selectionnerScene("accueil");
});