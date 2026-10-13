import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import { LazyPage1 } from '../pages/LazyPage1'
import { LazyPage2 } from '../pages/LazyPage2'
import { LazyPage3 } from '../pages/LazyPage3'
import { LazyPage4 } from '../pages/LazyPage4'

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy Page 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy Page 3</NavLink>
            </li>
            <li>
              <NavLink to="/lazy4" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy Page 4</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} />
          <Route path="/lazy4" element={<LazyPage4 />} />
          <Route path="/*" element={<LazyPage1 />} />
        </Routes>
      </div>
    </Router>
  )
}
