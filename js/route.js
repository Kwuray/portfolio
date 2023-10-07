let listeRoute;

function fabriquerPave(largeur)
{
    let paveDiv = document.createElement("div");
    paveDiv.classList.add("pave_route");
    paveDiv.style.width = largeur;
    return paveDiv;
}

function paveLigne5()
{
    let routeLigne = document.createElement("div");
    routeLigne.classList.add("ligne_pave_5");
    routeLigne.appendChild(fabriquerPave(55));
    routeLigne.appendChild(fabriquerPave(30));
    routeLigne.appendChild(fabriquerPave(40));
    routeLigne.appendChild(fabriquerPave(50));
    routeLigne.appendChild(fabriquerPave(25));
    return routeLigne;
}

function paveLigne6()
{
    let routeLigne = document.createElement("div");
    routeLigne.classList.add("ligne_pave_6");
    routeLigne.appendChild(fabriquerPave(43));
    routeLigne.appendChild(fabriquerPave(23));
    routeLigne.appendChild(fabriquerPave(28));
    routeLigne.appendChild(fabriquerPave(40));
    routeLigne.appendChild(fabriquerPave(26));
    routeLigne.appendChild(fabriquerPave(38));
    return routeLigne;
}

function paveLigne7()
{
    let routeLigne = document.createElement("div");
    routeLigne.classList.add("ligne_pave_7");
    routeLigne.appendChild(fabriquerPave(22));
    routeLigne.appendChild(fabriquerPave(32));
    routeLigne.appendChild(fabriquerPave(20));
    routeLigne.appendChild(fabriquerPave(28));
    routeLigne.appendChild(fabriquerPave(36));
    routeLigne.appendChild(fabriquerPave(24));
    routeLigne.appendChild(fabriquerPave(34));
    return routeLigne;
}

function initialiserRoute()
{
    listeRoute = document.getElementsByClassName("route");

    for (const route of listeRoute)
    {
        if (route.classList.contains("haut") || route.classList.contains("bas"))
        {
            route.classList.add("verticale");
        }
        else if (route.classList.contains("gauche") || route.classList.contains("droite"))
        {
            route.classList.add("horizontale");
        }

        //Ajout des pavés
        for (let i = 0; i < 5; i++) {
            route.appendChild(paveLigne5());
            route.appendChild(paveLigne6());
            route.appendChild(paveLigne7());
        }
    }
}