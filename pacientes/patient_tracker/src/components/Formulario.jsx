import { useState, useEffect } from "react"


const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState("")
  const [dueno, setDueno] = useState("")
  const [sintoma, setSintomas] = useState("")
  const getIdentify = () => {
    const fecha = Date.now().toString(36)
    const number = Math.random().toString(36).substr(2)
    return fecha + number
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const objPatient = {
      nombre,
      dueno,
      sintoma,
      id: getIdentify()
    }

    setPacientes([...pacientes, objPatient])
    setNombre('')
    setDueno('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Fomulario</h2>
      <p className="text-lg mt-5 mb-10">Añade Pacientes y {''}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Nombre Paciente: {nombre}</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del animal" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Nombre Dueño</label>
          <input type="text" value={dueno} onChange={(e) => setDueno(e.target.value)} placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea name="" value={sintoma} onChange={(e) => setSintomas(e.target.value)} className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500" />
        </div>
        <input type="submit" value="Agregar" className="w-full rounded-md bg-indigo-600 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
      </form>
    </div>
  )
}

export default Formulario