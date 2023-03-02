import React from "react";

function Formulario() {
  return (
    <div className="p-[20px] md:w-1/2 lg:w-2/5 bg-[#e56b6f] rounded-md">
      <h1 className="font-bold text-center text-xl">Registrar estudiantes</h1>
      <h2 className="font-bold text-center ">Agrega y administra</h2>
      <form action="">
        <div className="">
          <label htmlFor="" className="block mb-2 mt-10">
            Nombre Estudiante
          </label>
          <input
            type="text"
            placeholder="Nombre Completo"
            className="border-2 w-full rounded-md mb-4"
          />
        </div>
        <div className="">
          <label htmlFor="" className="block mb-2">
            Carrera
          </label>
          <input
            type="text"
            placeholder="Carrera"
            className="border-2 w-full rounded-md mb-4"
          />
        </div>
        <div className="">
          <label htmlFor="" className="block mb-2">
            Semestre
          </label>
          <input
            type="text"
            placeholder="Semestre"
            className="border-2 w-full rounded-md mb-4"
          />
        </div>
        <div className="">
          <label htmlFor="" className="block mb-2">
            Promedio
          </label>
          <input
            type="text"
            placeholder="Promedio"
            className="border-2 w-full rounded-md mb-4"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Enviar"
            className="bg-[#d00000] w-full rounded-md p-2 uppercase hover:bg-[#9d0208] cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
