import Register from './layouts/auth/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css"
function App() {
  return (


    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="#">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
 
   

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </>
   
    
   
  );
}

export default App;
