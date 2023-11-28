import { useState,useEffect } from "react"


const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Fomulario</h2>
      <p className="text-lg mt-5 mb-10">Añade Pacientes y {''}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Nombre Paciente</label>
          <input type="text" placeholder="Nombre del animal" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Nombre Dueño</label>
          <input type="text" placeholder="Nombre del animal" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea name="" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500" />
        </div>
        <input type="submit" value="Agregar" className="w-full rounded-md bg-indigo-600 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
      </form>
    </div>
  )
}

export default Formulario