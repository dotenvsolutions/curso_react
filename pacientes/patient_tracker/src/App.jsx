
import { useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(()=> {
    const obstenetLocal = () => {
      const ptlocal = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(ptlocal)
    }

    obstenetLocal()
  },[])//Se ejecuta una sola vez la llamada

  useEffect(()=> {
    localStorage.setItem('pacientes', json.stringify(pacientes))
  }, [pacientes])//el watch esta a la escucha de cambios 

  const deletePatient = id => {
    const pacientesAct = pacientes.filter(pt => pt.id !== id)
    setPacientes(pacientesAct)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 flex'>
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
        <Listado pacientes={pacientes} setPaciente={setPaciente} deletePatient={deletePatient}/>
      </div>

    </div>
  )
}

export default App
