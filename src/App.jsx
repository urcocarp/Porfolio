import './App.css'
import NavBar from './componentes/Navbar/Navbar'
import Hero from './componentes/Hero/Hero'
import Skills from './componentes/Skills/Skills'
import WorkExperiencie from './componentes/WorkExperiencie/WorkExperiencie'
import ContacMe from './componentes/ContacMe/ContacMe'
import Footer from './componentes/Footer/Footer'

function App() {


  return (
    
    <div>
      <NavBar/>
        <div className='conteiner'>
        <Hero/>
        <Skills/>
        <WorkExperiencie/>
        <ContacMe/>
        </div>
        <Footer/>
    </div>
      
  
  )
}

export default App
