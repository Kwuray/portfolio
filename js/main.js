function nombreAleatoire(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Lorsque la page est complètement chargée
document.addEventListener("DOMContentLoaded", function()
{
    initialiserRoute();
    genererDecor();
});