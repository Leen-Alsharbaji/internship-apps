import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import bookData from './bookData.js';
import BookCard from './book-card';
import Table from 'react-bootstrap/Table';

function App() {
  function btnclick(){
      ;
    }
  return (
    
    <div className="App">
              <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button variant="outline-primary">Dark mode</Button>
          </Nav>
        </Container>
      </Navbar>
        <Container className='grid'>
      
        
      
      <Row>
        {bookData.map((book) => (
          <Col key={book.id}>
            <BookCard  id={book.id} Title={book.title} description={book.description} image={book.Image} />
          </Col>
        ))}
      </Row>
          <Table striped bordered hover style={{ margin: '30px' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {bookData.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
      
    </Container>
    </div>
    
  );
}

export default App;
