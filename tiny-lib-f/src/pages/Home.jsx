import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Container id='about' className='text-center p-5'>
        <Row className='p-5'>
          <h1 id='about'>About</h1>
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
        <Row>
          <Col>
            <a id='start' href='https://freetradeadventures.netlify.app/adventure'><Button id='libbut' variant='outline-secondary'>Libraries Near You</Button></a>
          </Col>
        </Row>
      </Container>
      

    </>
  )
}

export default Home
