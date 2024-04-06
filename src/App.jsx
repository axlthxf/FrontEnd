import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-[url('https://static3.bigstockphoto.com/8/1/1/large1500/118121435.jpg')}  min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

        </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App
