function nombreAleatoire(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let personnage;
let messageModel;

//Lorsque la page est complètement chargée
document.addEventListener("DOMContentLoaded", function()
{
    messageModel = document.getElementById("modele").getElementsByClassName("bulle_habbo_root")[0];
    personnage =
        {
            nom : "Nicolas",
            listeMessageRoot : document.getElementById("habbo_personnage").getElementsByClassName("message_liste")[0],
            parler : function (message)
            {
                let messageElement = messageModel.cloneNode(true);
                //messageElement.getElementsByClassName("message")[0].getElementsByTagName("span")[0].textContent = this.nom + ": ";
                messageElement.getElementsByClassName("message")[0].getElementsByTagName("p")[0].innerHTML = "<span>" + this.nom + ": " + "</span>" +  message;
                //On arrête l'animation de la dernière bulle
                let listeMessage = this.listeMessageRoot.getElementsByClassName("bulle_habbo_root");
                if (listeMessage.length > 0)
                {
                    let dernierMessage = listeMessage[listeMessage.length - 1];
                    dernierMessage.style.animationPlayState = "paused";
                    dernierMessage.style.paddingBottom = getComputedStyle(dernierMessage).paddingBottom;
                }
                this.listeMessageRoot.appendChild(messageElement);
                //Gestion de l'incrémentation du padding
                messageElement.addEventListener("animationiteration", function ()
                {
                    let iterationCourante = Number(getComputedStyle(messageElement).getPropertyValue('--total-iteration'));
                    iterationCourante++;
                    let paddingDebut = iterationCourante * 40;
                    let paddingFin = paddingDebut + 40;
                    messageElement.style.setProperty('--padding-debut', paddingDebut + "px");
                    messageElement.style.setProperty('--padding-fin', paddingFin + "px");
                    messageElement.style.setProperty('--total-iteration', "" + iterationCourante);
                });
            }
        }
    initialiserRoute();
    genererDecor();
});