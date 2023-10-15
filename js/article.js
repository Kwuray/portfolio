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

    decor.addEventListener("animationend", function ()
    {
        if (decor.classList.contains("afficher"))
        {
            decor.classList.remove("afficher");
        }
    })

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
    decor.classList.add("cacher");
    articleActuel.classList.add("afficher");
}

function cacherArticle()
{
    ombre.getAnimations()[0].reverse();
    ombre.classList.replace("afficher", "cacher");
    decor.getAnimations()[0].reverse();
    decor.classList.replace("cacher", "afficher");
    articleActuel.classList.replace("afficher", "cacher");
    articleActuel.getAnimations()[0].reverse();
}