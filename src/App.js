import Register from './views/auth/register';
import Charts from './views/charts/charts'
import AddEntry from './views/entries/addEntry';
import ListEntries from './views/entries/listEntries';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
import HomePage from "./views/Homepage";
import SigninForm from './components/SigninForm';
import RegisterForm from './components/RegisterForm';
import "./App.css"
function App() {
  return (

    <>
   
      <Provider store={store}>
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element={<RegisterForm/>}/>
          <Route path='/login' element={<SigninForm/>}/>
          <Route path='/new' element={<AddEntry/>}/>
          <Route path='/entries' element={<ListEntries/>}/>
          <Route path='/charts' element={<Charts/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
   
  </>
   
  );
}

export default App;
