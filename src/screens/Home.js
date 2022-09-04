import React from 'react'
import { Card, ListGroup, Container, Col, Row } from 'react-bootstrap'
import CarouselSolutions from '../components/Carousel'

const Home = () => {
  return (
    <div className='wrapper'>
      <div className='home-section'>
        <div className='content'>
          <Container fluid>
            <Row>
              <Col md={6}>
                <h2 className='h2-font'>
                  Welcome To The <span>Fit Monk</span> Way Of Life
                </h2>
                <p className='mt-3'>Your Problems are our Problems</p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
      <div id='about-section' className='text-center'>
        <Container>
          <h3 className='mb-5'>Who Are We ?</h3>
          <p>
            We are India's <span>most trusted senior care brand</span> that
            gives seniors access to a healthier, hassle-free, and active life in
            the <span>comfort of their own home</span>.
          </p>
        </Container>
        <div className='achievments'>
          <Container>
            <Row>
              <Col md={4}>
                <div className='one text-center'>
                  <div className='emoji'>
                    {/* <FontAwesomeIcon icon='fa-solid fa-hospital' /> */}
                  </div>
                  <h5>500+</h5>
                  <h6>Satisfied Patients</h6>
                </div>
              </Col>
              <Col md={4}>
                <div className='one text-center'>
                  <div className='emoji'></div>
                  <h5>1000+</h5>
                  <h6>Satisfied Patients</h6>
                </div>
              </Col>
              <Col md={4}>
                <div className='one text-center'>
                  <div className='emoji'></div>
                  <h5>50+</h5>
                  <h6>Certified Doctors</h6>
                </div>
              </Col>
              <Col md={4}>
                <div className='one text-center'>
                  <div className='emoji'></div>
                  <h5>10+</h5>
                  <h6>Huge Hospitals</h6>
                </div>
              </Col>
              <Col md={4}>
                <div className='one text-center'>
                  <div className='emoji'></div>
                  <h5>5+</h5>
                  <h6>Online Domains</h6>
                </div>
              </Col>
              <Col md={4}>
                <div className='one text-center'>
                  <div className='emoji'></div>
                  <h5>50+</h5>
                  <h6>Certified Doctors</h6>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <hr></hr>
      <div id='service-section'>
        <h3 className='text-center mb-5'>Services We Provide</h3>
        <div className='service'>
          <Row>
            <Col md={4}>
              <div className='service-dabba text-center'>
                <Card className='service-card-dabba'>
                  <Card.Title as='h4' className='service-title-color mb-4'>
                    Medicine Reminder
                  </Card.Title>
                  <Card.Text>
                    We Remind you about your medicines time to time
                  </Card.Text>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className='service-dabba text-center'>
                <Card className='service-card-dabba'>
                  <Card.Title as='h4' className='service-title-color mb-4'>
                    Appointment Book
                  </Card.Title>
                  <Card.Text>
                    You can fix the appointment with the doctors
                  </Card.Text>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className='service-dabba text-center '>
                <Card className='service-card-dabba'>
                  <Card.Title as='h4' className='service-title-color mb-4'>
                    Health Information Track
                  </Card.Title>
                  <Card.Text>
                    You can track your Blood, Sugar and Weight
                  </Card.Text>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div id='solutions-section'>
        <h3 className='text-center'>Solutions</h3>
        <div className='solution'>
          <CarouselSolutions />
        </div>
      </div>
      <div className='footer'>
        <h6>© 2021 Copyright: FitMonk.com</h6>
      </div>
    </div>
  )
}

export default Home
