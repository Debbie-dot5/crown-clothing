import { Routes, Route} from "react-router-dom"
import "./App.css"
import Navigation from "./components/routes/navigation"
import Home from "./components/routes/home"
import SignIn from "./components/routes/sign-in"


const Shop = () => {
  return(
    <div>
      <h1>Shop</h1>
    </div>
  )
}


const App = () => {
  return (
    <Routes>
    <Route path="/" element={ <Navigation />}>
    <Route index element={ <Home />}/>
    <Route path="shop" element={ <Shop />}/>
    <Route path="sign-in" element={ <SignIn />}/>
   
     </Route>
  
  </Routes>

  )
}

export default App;
