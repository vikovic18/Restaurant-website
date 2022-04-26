import products from './productsData'
import './products.css';
import { Row, Col, Card } from 'react-bootstrap'

function Products() {
  return (
    <div className='container'>
      <h2 className='mt-3 menu'>MENU</h2>
            <Row>
              {products.map(product => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Card className='my-3 p-3 rounded'>
                  <Card.Img src={product.image}/>
                  <Card.Body>
                    <Card.Title as='div' className='productName'>
                      <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='h5' className='productName'>
                    &#8358;{product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
            )}
            </Row>         
        

    </div>
  )
}

export default Products