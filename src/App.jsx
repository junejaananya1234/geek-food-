
import './App.css'
import Header from './Components/Header/Header'
import Food from './Components/Food/Food'
import Cusine from './Components/Cusine/Cusine'
import ReactDom from 'react-dom'
import FoodItems  from './Components/FoodItems/FoodItems'
import { BrowserRouter as Router, Route, Routes, Outlet  } from 'react-router-dom'
function App() {
 

  return (
    <>
     {/* <Header></Header>
    <Food></Food>
   <Cusine></Cusine> */}
   <Router>
    <Header/>
    <Food></Food>
    <Cusine></Cusine>
    <Routes>
    
      <Route path ="/FoodItems/:categoryName" element = {<FoodItems></FoodItems>}></Route>
    </Routes>
   </Router>
    
     
    </>
  )
}

export default App;
