import './homepage.css'
import './bootstrap.min.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Homepage() {
  return (
    <div className="container-fluid intro padding">
      <div className="col-lg-8 col-md-8 col-sm-12">
        <h1>BUMI'S <br />CUISINE</h1>
        <p>Welcome!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/products"> 
        <Button className='m-5'size='lg'>ORDER NOW
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage