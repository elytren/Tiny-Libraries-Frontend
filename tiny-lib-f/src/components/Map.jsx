import React from 'react';
import '@reach/combobox/styles.css'
import AddLibrary from './forms/AddLibrary';
import Libraries from './Libraries';
import {Container, Row, Col} from 'react-bootstrap'
 

const Map = ({updateLibState, libs, addLib}) => {
  return (
    <Container className='text-center'>
        <Row>
            <Col className='p-5' style={{ height: '75vh', width: '100vw'}}> 
                <Libraries updateLibState={updateLibState} libs={libs}></Libraries>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddLibrary addLib={addLib}></AddLibrary>
            </Col>
        </Row>
    </Container>
  )
}

export default Map

