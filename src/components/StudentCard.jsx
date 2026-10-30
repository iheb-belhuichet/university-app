import { useState } from "react";

function StudentCard({
  id,
  nom,
  email,
  tel,
  filiere,
  annee,
  groupe,
  ville,
  image,
  onSupprimer,
  onModifier,
}) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);
  const [enEdition, setEnEdition] = useState(false);
  const [nouveauNom, setNouveauNom] = useState(nom);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  function enregistrer() {
    if (nouveauNom.trim() === "") return;
    onModifier(id, nouveauNom.trim());
    setEnEdition(false);
  }

  return (
    <div className="student-card">
      <img src={image} alt={nom} className="student-img" />
      <h3>Fiche étudiant</h3>

      {enEdition ? (
        <p>
          <input
            value={nouveauNom}
            onChange={(e) => setNouveauNom(e.target.value)}
          />
          <button onClick={enregistrer}>Enregistrer</button>
          <button onClick={() => setEnEdition(false)}>Annuler</button>
        </p>
      ) : (
        <p>Nom &amp; Prénom : {nom}</p>
      )}

      {coordonneesVisibles && (
        <>
          <p>Email : {email}</p>
          <p>Téléphone : {tel}</p>
        </>
      )}

      <p>Filière : {filiere}</p>
      <p>Année : {annee}</p>
      <p>Groupe : {groupe}</p>
      <p>Ville : {ville}</p>

      <button onClick={basculerCoordonnees}>
        {coordonneesVisibles
          ? "Masquer les coordonnées"
          : "Afficher les coordonnées"}
      </button>

      <button onClick={() => setEnEdition(true)}>Modifier</button>
      <button onClick={() => onSupprimer(id)}>Supprimer</button>
    </div>
  );
}

export default StudentCard;