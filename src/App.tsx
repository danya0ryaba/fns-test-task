import { Route, Routes } from 'react-router-dom'

import { Error } from './pages/Error'
import { Home } from './pages/Home'
import { Create } from './pages/Create'

import './styles/global.scss'
import { Header } from './components/Header'
import { Edit } from './pages/Edit'

function App() {

  return <>
    <Header />
    <main className='container'>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='create' element={<Create />} />
        <Route path='edit/:id' element={<Edit />} />

        <Route path='*' element={<Error />} />

      </Routes>
    </main>
  </>
}

export default App
