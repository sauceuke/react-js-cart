import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Nav } from 'react-bootstrap';

//localhost:3000 -> Home
//localhost:3000/success -> Success

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element=(<Store />) />
          <Route path="success" element=(<Success />) />
          <Route path="cancel" element=(<Cancel />) />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
