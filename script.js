document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments importants
    const slides = document.querySelectorAll(".slide");
    const btnPrecedent = document.getElementById("btn-precedent");
    const btnSuivant = document.getElementById("btn-suivant");
    const compteur = document.getElementById("compteur");
    
    let indexActuel = 0;
    const totalSlides = slides.length;

    // Fonction pour mettre à jour l'affichage
    function afficherSlide(index) {
        // Enlever la classe active de toutes les diapos
        slides.forEach(slide => slide.classList.remove("active"));
        
        // L'ajouter sur la diapo demandée
        slides[index].classList.add("active");
        
        // Mettre à jour le texte du compteur (ex: 2 / 8)
        compteur.innerText = `${index + 1} / ${totalSlides}`;
    }

    // Événement clic sur le bouton Suivant
    btnSuivant.addEventListener("click", () => {
        if (indexActuel < totalSlides - 1) {
            indexActuel++; // Va à la diapo suivante
        } else {
            indexActuel = 0; // Revient au début si on est à la fin
        }
        afficherSlide(indexActuel);
    });

    // Événement clic sur le bouton Précédent
    btnPrecedent.addEventListener("click", () => {
        if (indexActuel > 0) {
            indexActuel--; // Recule d'une diapo
        } else {
            indexActuel = totalSlides - 1; // Va à la fin si on recule depuis le début
        }
        afficherSlide(indexActuel);
    });

    // Initialisation du compteur au premier chargement
    afficherSlide(indexActuel);
});
