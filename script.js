document.getElementById("shareButton").addEventListener("click", () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Coordonnées de DBIA",
          text: "Voici les coordonnées de DBIA - Digital Business International Academy à Abomey-Calavi.",
          url: "mailto:learnatdbia@gmail.com",
        })
        .then(() => console.log("Partage réussi"))
        .catch((error) => console.error("Erreur lors du partage :", error));
    } else {
      // Désactive le bouton si le partage n'est pas supporté
      document.getElementById("shareButton").disabled = true;
    }
  });
  

  document.getElementById('addContactButton').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Contenu de la vCard
    const vCardData = `
  BEGIN:VCARD
  VERSION:3.0
  FN:Digital Business International Academy
  TEL:+2290141202282
  EMAIL:learnatdbia@gmail.com
  ORG:Digital Business International Academy
  ADR:Abomey-Calavi
  END:VCARD
    `;
  
    // Création d'un fichier Blob
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
  
    // Création d'un lien pour télécharger le fichier
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DBIA_Contact.vcf'; // Nom du fichier téléchargé
    document.body.appendChild(a);
    a.click();
  
    // Nettoyage
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  
  