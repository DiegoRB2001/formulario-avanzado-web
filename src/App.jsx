import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {

  return (
    <div className='container mx-auto'>
    <Header/>
    <div className='mt-12 md:flex gap-1'>
      <Formulario/>
      <Listado/>
    </div>
    </div>
  )
}

export default App
