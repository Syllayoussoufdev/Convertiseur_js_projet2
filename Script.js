    // Fonction pour effectuer la conversion de température
    function convertTemp() {
        // Récupération des valeurs saisies
        let value = document.getElementById('tempValue').value;
        let type = document.getElementById('conversionType').value;
        let resultElement = document.getElementById('result');

        // Vérification si une valeur a été saisie
        if (value === "") {
            resultElement.innerHTML = "Veuillez entrer une valeur.";
            return;
        }

        // Conversion de la chaîne en nombre
        value = parseFloat(value);
        let result;

        // Calcul de la conversion selon le type choisi
        if (type === "CtoF") {
            result = (value * 9/5) + 32;
            resultElement.innerHTML = `${value}°C = ${result.toFixed(2)}°F`;
        } else {
            result = (value - 32) * 5/9;
            resultElement.innerHTML = `${value}°F = ${result.toFixed(2)}°C`;
        }
    }