import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Container id='about' className='text-center p-5'>
        <Row className='p-5'>
          <h1 id='abouttitle'>About</h1>
          <br/>
          <br/>
          <p id='aboutpar'>Free Trade Adventures is an app that allows you to locate tiny libraries in Portland, OR. What are tiny libraries? They are home shaped boxes usually placed outside of someones residence. These libraries allow people to get rid of books or items they no longer want and take a new book or item for free. 
            <br/>
            <br/>
          See the video below for a demonstration on how this works!</p>
        </Row>
        <Row>
          <Col className='align-self-center'>
            <video autoPlay loop muted src='/about.mp4' type='video/mp4'></video>
          </Col>
        </Row>
        <Row className='p-5'>
          <Col id='start'>
            <h1 id='getstartedtitle'>How it Works</h1>
            <p>Tiny Libraries are added to the app by users. Once added a home item will pop up on our google maps. Click on the pins in the map for more information on each tiny library including directions from any location. Click the button below to check out libraries near you!</p>
            <a  href='https://freetradeadventures.netlify.app/adventure'><Button id='libbut' variant='outline-secondary'>Libraries Near You</Button></a>
          </Col>
        </Row>
        <Row className='p-5'>
          <Col id='contact'>
            <h1 id='contactustitle'>Contact Us</h1>
            <p>Have suggestions, you accidentally deleted a library, or a library's info needs updating, send us an email!</p>
            <a href='mailto:freetradeadventures@gmail.com'><img id='emaillogo' src='/gmail.png' alt='gmail'/></a>
          </Col>
        </Row>
      </Container>
      

    </>
  )
}

export default Home
