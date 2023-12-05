
import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 flex'>
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} />
        <Listado pacientes={pacientes} setPaciente={setPaciente} />
      </div>

    </div>
  )
}

export default App
