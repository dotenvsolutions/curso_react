const Pacientes = ({ paciente, setPaciente, deletePatient }) => {
  const { nombre, dueno, sintoma, id } = paciente
  const handlEliminar = () => {
    deletePatient(id)
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-400 px-4 py-6">
          <img src="https://picsum.photos/400/400" alt="Imagen descriptiva" />
        </div>
        <div className="w-full md:w-200 px-4 py-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold">Nombres {''}</h2>
          <p className="text-lg">{nombre}</p>
          <h2 className="text-2xl font-semibold mt-4">Apellidos {''}</h2>
          <p className="text-lg">{dueno}</p>
          <h2 className="text-2xl font-semibold mt-4">Sintoma {''}</h2>
          <p className="text-lg">{sintoma}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" value={paciente.id ? 'Editar paciente' : 'Agregar Paciente'} onClick={() => setPaciente(paciente)} className="bg-indigo-600 hover:bg-indigo-700 py-2 px-10 uppercase font-bold rounded-lg" ></button>
        <button type="button" onClick={handlEliminar} className="bg-red-600 hover:bg-red-700 py-2 px-10 uppercase font-bold rounded-lg" >Eliminar</button>
      </div>
    </>


  )
}

export default Pacientes