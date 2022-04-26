import products from './productsData'
import { Row, Col, Card } from 'react-bootstrap'

function Products() {
  return (
    <div className='container-fluid'>
      <h2 className='mt-3'>MENU</h2>
            <Row>
              {products.map(product => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Card className='my-3 p-3 rounded'>
                  <Card.Img src={product.image}/>
                  <Card.Body>
                    <Card.Title as='div'>
                      <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='h5'>
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