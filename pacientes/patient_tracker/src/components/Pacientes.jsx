const Pacientes = ({ paciente }) => {
  const { nombre, dueno, sintoma } = paciente
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case ">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
        <span className="font-normal normal-case ">{dueno}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case ">{sintoma}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button type="button" className="bg-indigo-600 hover:bg-indigo-700 py-2 px-10 uppercase font-bold rounded-lg" >Editar</button>
        <button type="button" className="bg-red-600 hover:bg-red-700 py-2 px-10 uppercase font-bold rounded-lg" >Eliminar</button>
      </div>
    </div>
  )
}

export default Pacientes