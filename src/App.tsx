import { Route, Routes } from 'react-router-dom'

import { Error } from './pages/Error'
import { Home } from './pages/Home'
import { Create } from './pages/Create'

import './styles/global.scss'

function App() {

  return <>
    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='create' element={<Create />} />

      <Route path='*' element={<Error />} />

    </Routes>
  </>
}

export default App
