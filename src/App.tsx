import {Routes, Route} from 'react-router-dom'
import './styles/App.scss'
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout"
import Films from "./pages/Films/Films"
import Film from "./pages/Film/Film"
import Cartoons from "./pages/Cartoons/Cartoons"
import OneSeries from "./pages/OneSeries/OneSeries"
import Cartoon from "./pages/Cartoon/Cartoon"
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
            <Route path={'cartoons'} element={<Cartoons/>}/>
            <Route path={'film/:id'} element={<Film/>}/>
            <Route path={'series/:id'} element={<OneSeries/>}/>
            <Route path={'cartoons/:id'} element={<Cartoon/>}/>
          </Route>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/registration'} element={<Register/>}/>
          <Route path={'/admin-panel'} element={<AdminPanel/>}/>
        </Routes>
      </div>
  )
}

export default App
