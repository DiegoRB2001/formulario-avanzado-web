import React from "react";

function Estudiante({ estudiante, setEstudiante, setModificar }) {
  const { nombre, carrera, semestre, promedio } = estudiante;
  return (
    <div className="mt-2 mb-3 pl-3 py-10 shadow-lg bg-[#ffb3c1] rounded-md">
      <p className="font-bold uppercase">
        Nombre: <span className="font-normal ml-3 normal-case">{nombre}</span>
      </p>
      <p className="font-bold uppercase">
        Carrera: <span className="font-normal ml-3 normal-case">{carrera}</span>
      </p>
      <p className="font-bold uppercase">
        Semestre:{" "}
        <span className="font-normal ml-3 normal-case">{semestre}</span>
      </p>
      <p className="font-bold uppercase">
        Promedio:{" "}
        <span className="font-normal ml-3 normal-case">{promedio}</span>
      </p>
      <div className="flex gap-2">
        <button
          className="mt-2 p-2 hover:bg-red-600 bg-red-400 rounded-md"
          onClick={() => {
            setEstudiante(estudiante);
            setModificar(true);
          }}
        >
          Modificar
        </button>
        <button
          className="mt-2 p-2 hover:bg-red-600 bg-red-400 rounded-md"
          onClick={() => setEstudiante(estudiante)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Estudiante;
