
import './App.css';
import origamiBird from "./images/origami_bird_icon.svg";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Container className="App">
     <Navbar bg="light" expand="lg">
     <img
        src={origamiBird}
        width="50"
        height="50"
      />
       The Nest
       </Navbar>
    </Container>
  );
}

export default App;
