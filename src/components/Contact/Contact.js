import React from 'react'
import './contact.css'
import { Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className='contact col-lg-8 col-md-8 col-sm-12'>
      <div className='hero '>
        <h1 className='head-text'>Contact us</h1>
        <h2 className='text'>welcome to Bumi's Cuisine</h2>
        <p className='p'>For any inquiries send us a message via the form below and we'll get back to you as soon as possible.</p>
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTelephone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicText">
          <Form.Label>Your Message</Form.Label>
          <Form.Control type="lg" placeholder="Enter Message" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


    </div>

  )
}

export default Contact


