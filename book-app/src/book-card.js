import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const BookCard = ({id , Title,description,image}) => {
    return ( 

    <Card style={{ width: '18rem' ,margin: '30px',height: '40rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>

     );
}
 
export default BookCard;
