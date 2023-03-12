import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState({});

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex gap-1">
        <Formulario
          setEstudiantes={setEstudiantes}
          estudiantes={estudiantes}
          estudiante={estudiante}
        />
        <Listado estudiantes={estudiantes} setEstudiante={setEstudiante} />
      </div>
    </div>
  );
}

export default App;
