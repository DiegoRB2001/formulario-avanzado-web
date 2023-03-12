import React, { useState, useEffect } from "react";

const Formulario = ({ setEstudiantes, estudiantes, estudiante }) => {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [promedio, setPromedio] = useState("");

  const generarID = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return random + fecha;
  };

  useEffect(() => {
    if (Object.keys(estudiante).length > 0) {
      setNombre(estudiante.nombre);
      setCarrera(estudiante.carrera);
      setSemestre(estudiante.semestre);
      setPromedio(estudiante.promedio);
    }
  }, [estudiante]);

  const [error, setError] = useState(false);

  const manejadorSubmit = (e) => {
    e.preventDefault();
    console.log("Énviando datos");
    if (
      [
        nombre.trim(),
        carrera.trim(),
        semestre.trim(),
        promedio.trim(),
      ].includes("")
    ) {
      console.log("No se permiten vacios");
      setError(true);
      return;
    }
    const objetoEstudiante = {
      nombre,
      carrera,
      semestre,
      promedio,
    };
    if (estudiante.id) {
      objetoEstudiante.id = estudiante.id;
      const estudiantesActualizados = estudiantes.map((estudianteState) =>
        estudianteState.id === estudiante.id
          ? objetoEstudiante
          : estudianteState
      );
      setEstudiantes(estudiantesActualizados);
    } else {
      objetoEstudiante.id = generarID();
      setEstudiantes([...estudiantes, objetoEstudiante]);
    }
    setError(false);
    limpiar();
  };

  const limpiar = () => {
    setNombre("");
    setCarrera("");
    setPromedio("");
    setSemestre("");
  };

  return (
    <div className="p-[20px] md:w-1/2 lg:w-2/5 bg-[#e56b6f] rounded-md">
      <h1 className="font-bold text-center text-xl">Registrar estudiantes</h1>
      <h2 className="font-bold text-center ">Agrega y administra</h2>
      <form onSubmit={manejadorSubmit}>
        {error && (
          <div className="bg-red-800 font-bold rounded-md text-center mt-10">
            <p>Llenar todos los campos</p>
          </div>
        )}
        <div className="">
          <label htmlFor="" className="block mb-2 mt-10">
            Nombre Estudiante
          </label>
          <input
            type="text"
            placeholder="Nombre Completo"
            className="border-2 w-full rounded-md mb-4"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
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
            value={carrera}
            onChange={(e) => {
              setCarrera(e.target.value);
            }}
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
            value={semestre}
            onChange={(e) => {
              setSemestre(e.target.value);
            }}
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
            value={promedio}
            onChange={(e) => {
              setPromedio(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            value={estudiante.id ? "Modificar" : "Agregar"}
            className="bg-[#d00000] w-full rounded-md p-2 uppercase hover:bg-[#9d0208] cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
