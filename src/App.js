import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Products/Home/index.tsx"
import Product from './Pages/Products/Details/index.jsx';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<Product/>}/>
         </Routes> 
        </div>
    </BrowserRouter>
   
  );
}

export default App;
