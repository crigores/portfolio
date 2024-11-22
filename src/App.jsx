import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Barbershop, Dashboard, Login, Register } from "./pages/barbershop";



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='barbershop' element={<Barbershop />} />
        <Route path='barbershop/panel' element={<Dashboard />} />
        <Route path='barbershop/auth/login' element={<Login />} />
        <Route path='barbershop/auth/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
