import {Routes, Route} from 'react-router-dom'
import './styles/App.scss'
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout"
import Films from "./pages/Films/Films"
import Film from "./pages/Film/Film"
import OneSeries from "./pages/Series/OneSeries/OneSeries"
import Series from "./pages/Series/Series"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import AdminPanel from "./pages/AdminPanel/AdminPanel"



function App() {

  return (
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={''} element={<Home/>}/>
            <Route path={'films'} element={<Films/>}/>
            <Route path={'series'} element={<Series/>}/>
            <Route path={'film/:id'} element={<Film/>}/>
            <Route path={'series/:id'} element={<OneSeries/>}/>
          </Route>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/registration'} element={<Register/>}/>
          <Route path={'/admin-panel'} element={<AdminPanel/>}/>
        </Routes>
      </div>
  )
}

export default App
