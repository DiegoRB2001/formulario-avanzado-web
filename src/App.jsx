import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { useState, useEffect } from "react";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState({});
  const [modificar, setModificar] = useState(false);

  useEffect(() => {
    if (!modificar && Object.keys(estudiante).length > 0) {
      const estudiantesActualizados = estudiantes.filter(
        (estudianteState) => estudianteState.id !== estudiante.id
      );
      setEstudiantes(estudiantesActualizados);
      setEstudiante({});
    }
  }, [estudiante]);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex gap-1">
        <Formulario
          setEstudiantes={setEstudiantes}
          estudiantes={estudiantes}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
          modificar={modificar}
          setModificar={setModificar}
        />
        <Listado
          estudiantes={estudiantes}
          setEstudiante={setEstudiante}
          setModificar={setModificar}
        />
      </div>
    </div>
  );
}

export default App;
