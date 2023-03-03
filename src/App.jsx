import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { useEffect, useState } from 'react'

function App() {

  const [estudiantes, setEstudiantes] = useState([])

  return (
    <div className='container mx-auto'>
    <Header/>
    <div className='mt-12 md:flex gap-1'>
      <Formulario
        setEstudiantes = {setEstudiantes}
        estudiantes = {estudiantes}
      />
      <Listado/>
    </div>
    </div>
  )
}

export default App
