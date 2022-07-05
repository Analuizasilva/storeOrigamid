import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Products/Home/index.tsx"
import ProductDetail from './Pages/Products/Details/index.tsx';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
         <Route path='/Detail' element={<ProductDetail/>}/>
         </Routes> 
        </div>
    </BrowserRouter>
   
  );
}

export default App;
