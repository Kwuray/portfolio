//Lorsque la page est complètement chargée

let articleListe = new Map();
let articleActuel = null;
let sceneListe = new Map();
let sceneActuelle = null;
let ombre;
let infoListe;

function initialiserVariablesGlobales()
{

    for (const article of document.getElementsByTagName("article"))
    {
        articleListe.set(article.dataset["nom"], article);
    }
    ombre = document.getElementById("ombre");
    sceneListe.set("accueil", new SceneAccueil());
    infoListe = document.getElementsByClassName("info");
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

function initialiserInfos()
{
    for (const info of infoListe)
    {
        let parent = info.parentElement;
        parent.addEventListener("mousemove", (e) =>
        {
            info.style.left = e.screenX + 10 + "px";
            info.style.top = e.clientY + 10 + "px";
        })
        parent.addEventListener("mouseleave", (e) =>
        {
            info.classList.remove("afficher");
            info.style.left = "";
            info.style.top = "";
        })
        parent.addEventListener("mouseenter", (e) =>
        {
            info.classList.add("afficher");
            document.body.appendChild(info);
        })
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    initialiserVariablesGlobales();
    initialiserInfos();
    initialiserArticles();
    selectionnerScene("accueil");
});