function afficherPopup() {
            const maintenant = new Date();
            const heure = maintenant.getHours();
            let message = "N'oubliez pas de nous donner votre avis ! ";

            if (heure >= 6 && heure < 13) {
                message += "Bonne journée.";
            } else if (heure >= 13 && heure < 18) {
                message += "Bonne après-midi.";
            } else if (heure >= 18 && heure < 22) {
                message += "Bonne soirée.";
            } else {
                message += "Bonne nuit.";
            }

            alert(message);
        }

        // Appeler la fonction pour afficher le pop-up dès que la page est chargée
        window.onload = afficherPopup;

