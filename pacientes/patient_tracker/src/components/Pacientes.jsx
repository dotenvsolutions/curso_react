const Pacientes = ({ paciente }) => {
  const { nombre, dueno, sintoma } = paciente
  return (
    <>
      <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="w-full md:w-400 px-4 py-6">
          <img src="https://picsum.photos/400/400" alt="Imagen descriptiva" />
        </div>
        <div class="w-full md:w-200 px-4 py-6 mt-6 md:mt-0">
          <h2 class="text-2xl font-semibold">Nombres {''}</h2>
          <p class="text-lg">{nombre}</p>
          <h2 class="text-2xl font-semibold mt-4">Apellidos {''}</h2>
          <p class="text-lg">{dueno}</p>
          <h2 class="text-2xl font-semibold mt-4">Sintoma {''}</h2>
          <p class="text-lg">{sintoma}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" className="bg-indigo-600 hover:bg-indigo-700 py-2 px-10 uppercase font-bold rounded-lg" >Editar</button>
        <button type="button" className="bg-red-600 hover:bg-red-700 py-2 px-10 uppercase font-bold rounded-lg" >Eliminar</button>
      </div>
    </>


  )
}

export default Pacientes