import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AreaChartPage from './pages/AreaChartPage'
import BarChartPage from './pages/BarChartPage'
import DashboardPage from './pages/DashboardPage'
import Home from './pages/Home'
import LineChartPage from './pages/LineChartPage'
import PieChartPage from './pages/PieChartPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="line" element={<LineChartPage />} />
          <Route path="bar" element={<BarChartPage />} />
          <Route path="area" element={<AreaChartPage />} />
          <Route path="pie" element={<PieChartPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
