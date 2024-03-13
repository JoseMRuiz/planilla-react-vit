import { useState } from 'react'

import Dashboard from './componentes/contenedor'
import SideMenu from './componentes/SideMenu'
import Plantilla from './componentes/ContenedorDatos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex  h-screen   bg-slate-600 '>
      <SideMenu  />

      <Plantilla/>
    </div>

  
    
  )
}

export default App
