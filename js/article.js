function initialiserArticles()
{
    ombre.addEventListener("click", function ()
    {
        cacherArticle();
    })

    ombre.addEventListener("animationend", function ()
    {
        if (ombre.classList.contains("cacher"))
        {
            ombre.classList.remove("cacher");
        }
    })

    for (const scene of document.getElementsByClassName("scene"))
    {
        scene.addEventListener("animationend", function ()
        {
            if (scene.classList.contains("afficher"))
            {
                scene.classList.remove("afficher");
            }
        })
    }



    articleListe.forEach((value, key) =>
    {
        value.addEventListener("animationend", function ()
        {
            if (value.classList.contains("cacher"))
            {
                value.classList.remove("cacher");
            }
        })
    })
}

function afficherArticle(id)
{
    articleActuel = articleListe.get(id);
    ombre.classList.add("afficher");
    sceneActuelle.root.classList.add("cacher");
    articleActuel.classList.add("afficher");
}

function cacherArticle()
{
    ombre.getAnimations()[0].reverse();
    ombre.classList.replace("afficher", "cacher");
    sceneActuelle.root.getAnimations()[0].reverse();
    sceneActuelle.root.classList.replace("cacher", "afficher");
    articleActuel.classList.replace("afficher", "cacher");
    articleActuel.getAnimations()[0].reverse();
}