import Register from './layouts/auth/register';
import Login from './layouts/auth/login'
import AddEntry from './layouts/logs/addEntry';
import { Provider } from "react-redux";
import store from "../src/redux/store/store" 
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
        <Navbar.Brand href="#home">Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/new' element={<AddEntry/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
   
  );
}

export default App;
