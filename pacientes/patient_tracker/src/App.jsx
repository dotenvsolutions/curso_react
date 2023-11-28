
import Formulario from './components/formulario'
import Header from './components/Header'
import Listado from './components/Listado'

function App() {

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 flex'>
        <Formulario />
        <Listado />
      </div>
            
    </div>
  )
}

export default App
