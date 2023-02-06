import Register from './layouts/auth/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
