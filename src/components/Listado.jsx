import React from "react";
import Estudiante from "./Estudiante";

function Listado({ estudiantes, setEstudiante, setModificar }) {
  return (
    <div className="p-[20px] md:w-1/2 lg:w-3/5 bg-[#e56b6f] rounded-md h-screen md:overflow-y-scroll">
      <h1 className="text-xl font-bold text-center">Listado de estudiantes</h1>
      <h2 className="font-bold text-center">Administra Estudiantes</h2>

      {estudiantes.map((estudiante) => (
        <Estudiante
          key={estudiante.id}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
          setModificar={setModificar}
        />
      ))}
    </div>
  );
}

export default Listado;
