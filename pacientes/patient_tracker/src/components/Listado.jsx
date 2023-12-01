import Pacientes from "./Pacientes"

const Listado = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screem overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes </h2>
      <p className="text-xl mt-5 mb-10">Lista</p>
      {pacientes.map(pat => (
        <Pacientes key={pat.id} paciente={pat}/>
      ))}


    </div>
  )
}

export default Listado