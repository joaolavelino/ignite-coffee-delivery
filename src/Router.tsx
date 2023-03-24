import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Checkout } from './pages/Checkout'
import { Confirmation } from './pages/Confirmation'
import { History } from './pages/History'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/checkout'} element={<Checkout />} />
        <Route path={'/confirmation'} element={<Confirmation />} />
        <Route path={'/history'} element={<History />} />
      </Route>
    </Routes>
  )
}
