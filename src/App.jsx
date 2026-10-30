import img1 from "./assets/iheb.jpg";
import img2 from "./assets/ka7la.webp";
import img3 from "./assets/ka7loucha.jpg";
import image from "./assets/etudiant.avif"
import { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      nom: "Iheb belhuichet",
      email: "ihebbelhuichet@gmail.com",
      tel: "+216 56610766",
      filiere: "Génie logiciel et systèmes d'information",
      annee: "2026/2027",
      groupe: "GLSI2B",
      ville: "Mahdia",
      image: img1,
    },
    {
      id: 2,
      nom: "Slim Boubaker",
      email: "slim.boubaker@example.com",
      tel: "+216 20 111 222",
      filiere: "Informatique",
      annee: "2026/2027",
      groupe: "GLSI2B",
      ville: "Mahdia",
      image: img2,
    },
    {
      id: 3,
      nom: "Sarra Trabelsi",
      email: "sarra.trabelsi@example.com",
      tel: "+216 21 333 444",
      filiere: "Génie logiciel",
      annee: "2026/2027",
      groupe: "GLSI2B",
      ville: "Sousse",
      image: img3,
    },
  ]);

  const [filtre, setFiltre] = useState("");

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      nom: "Yassine Ben Salem",
      email: "yassine.bensalem@gmail.com",
      tel: "+216 44 444 444",
      filiere: "Génie logiciel et systèmes d'information",
      annee: "2026/2027",
      groupe: "GLSI1",
      ville: "Sfax",
      image: image,
    };
    setStudents([...students, nouvelEtudiant]);
  }

  function supprimerEtudiant(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  function modifierNom(id, nouveauNom) {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, nom: nouveauNom } : student
      )
    );
  }

  const studentsFiltres = students.filter((student) =>
    student.filiere.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h2 className="section-title">Liste des étudiants</h2>

        <p className="section-description">
          Année universitaire 2026/2027 — GLSI 2
        </p>

        <div className="actions">
          <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>

          <input
            type="text"
            placeholder="Filtrer par filière..."
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
          />
        </div>

        <section className="students-list">
          {studentsFiltres.length === 0 ? (
            <p>Aucun étudiant trouvé.</p>
          ) : (
            studentsFiltres.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                nom={student.nom}
                email={student.email}
                tel={student.tel}
                filiere={student.filiere}
                annee={student.annee}
                groupe={student.groupe}
                ville={student.ville}
                image={student.image}
                onSupprimer={supprimerEtudiant}
                onModifier={modifierNom}
              />
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;