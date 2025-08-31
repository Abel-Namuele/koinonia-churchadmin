import { Dashboard } from '@renderer/components/Dashboard'
import { Layout } from '@renderer/components/Layout'
import { Login } from '@renderer/components/Login'
import { Escalas } from '@renderer/pages/escalas/Escalas'
import { Departamentos } from '@renderer/pages/gruposDepartamento/Departamentos'
import { Membros } from '@renderer/pages/membros/Membros'
import { MembrosRegister } from '@renderer/pages/membros/MembrosRegister'
import { Settings } from '@renderer/pages/settings/Settings'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function Approutes(): React.JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/membros" element={<Membros />} />
            <Route path="/membrosregister" element={<MembrosRegister />} />
            <Route path="/departamentos" element={<Departamentos />} />
            <Route path="/escalas" element={<Escalas />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default Approutes
