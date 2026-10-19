import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


const student={
  nom:'iheb belhuichet',
  Email:'ihebbelhuichet@gmail.com',
  téléphone:'+21656610766',
  filière:"génie logiciel et systèmes d'information",
  Année :'2026/2027',
  Groupe:'GLSI2D',
  ville:'Moknine',
  img: 'https://scontent.ftun5-1.fna.fbcdn.net/v/t39.30808-6/805763625_1858076958701160_3499970050518098222_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZJo0awbBStMQ7kNvwH_UHAt&_nc_oc=AdoVbuH6mvxdDsgU5okTJ26FFdigF7e6NtCLhZUQXFrpVPjApUDwpKPz2G1F1vKzcRznbQ4ZHLJA7VPn5mqU2sLB&_nc_zt=23&_nc_ht=scontent.ftun5-1.fna&_nc_gid=fdu7PtCkQEBKIt4pOyPY3g&_nc_ss=782a8&oh=00_AQMGxESehBOkEtikuZuWXJGIQJ987WJc3sz3I4sNS5bf8Q&oe=6ACAF6A0'

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fiche Etudiant</h1>
      <img src={student.img} alt="" />
      <p><strong>Nom et prénom : </strong>{student.nom} </p>
      <p><strong>Email:</strong>{student.Email}</p>
      <p><strong>téléphone:</strong>{student.téléphone}</p>
      <p><strong>filière:</strong>{student.filière}</p>
      <p><strong>Année d'étude:</strong>{student.Année}</p>
      <p><strong>Groupe:</strong>{student.Groupe}</p>
      <p><strong>Ville:</strong>{student.ville}</p>
      <a href="mailto:ihebbelhuichet@gmail.com">
        <button>contactez</button>
      </a>
    </div>
  )
}

export default App
