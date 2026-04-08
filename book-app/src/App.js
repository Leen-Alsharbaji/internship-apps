import React, { useState, useEffect } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="App">
      <Navbar bg={isDarkMode ? 'dark' : 'light'} data-bs-theme={isDarkMode ? 'dark' : 'light'}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Button
            variant={isDarkMode ? 'outline-light' : 'outline-primary'}
            onClick={toggleTheme}
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? 'Light mode' : 'Dark mode'}
          </Button>
        </Container>
      </Navbar>

      <Container className="grid">
        <Row>
          {bookData.map((book) => (
            <Col key={book.id}>
              <BookCard id={book.id} Title={book.title} description={book.description} image={book.Image} />
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
