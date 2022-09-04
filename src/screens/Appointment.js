import React, { useState } from 'react'
import src from '../assests/woman-booking-appointment-calendar_23-2148562875.jpg'
import Select from 'react-select'
import { Card, Container, Row, Col, Alert } from 'react-bootstrap'
import { useTracker } from '../contexts/AppointmentContext'

const doctors = [
  {
    value: 'Dr Awasthi',
    label: 'Dr Awasthi',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
  {
    value: 'Dr Sharma',
    label: 'Dr Sharma',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
  {
    value: 'Dr Jakate',
    label: 'Dr Jakate',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
  {
    value: 'Dr Kohli',
    label: 'Dr Kohli',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
  {
    value: 'Dr Pandya',
    label: 'Dr Pandya',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
  {
    value: 'Dr Dhoni',
    label: 'Dr Dhoni',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
  {
    value: 'Dr Dhawan',
    label: 'Dr Dhawan',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
  {
    value: 'Dr Yadav',
    label: 'Dr Yadav',
    disease: [
      { label: 'Head', value: 'Head' },
      { label: 'Eyes', value: 'Eyes' },
      { label: 'Sugar', value: 'Sugar' },
    ],
  },
]
const allDiseases = [
  // { disease: ['Head', 'Eyes', 'Sugar'], doctor: 'Dr Awasthi' },
  // { disease: ['Ear', 'Nose', 'Blood'], doctor: 'Dr Sharma' },
  // { disease: ['Skin', 'Hair', 'Eyebrow'], doctor: 'Dr Jakate' },
  // { disease: ['Neck', 'Bones', 'Shoulder'], doctor: 'Dr Kohli' },
  // { disease: ['Hand', 'Stomach', 'Arm'], doctor: 'Dr Pandya' },
  // { disease: ['Leg', 'Hips', 'Obesity'], doctor: 'Dr Dhoni' },
  // { disease: ['Palm', 'Back', 'Bicep'], doctor: 'Dr Dhawan' },
  // { disease: ['Bp', 'Heart Attack', 'Sugar'], doctor: 'Dr Yadav' },
]
const Appointment = () => {
  const [info, setInfo] = useState(null)
  const [doctor, setDoctor] = useState('')
  const [discription, setDiscription] = useState('')
  const [error, setError] = useState('')

  const updateHandler = () => {
    if (doctor === '' || discription === '')
      return setError('Fields Cannot be Empty')
    setInfo({ doctor, discription })
    setDiscription('')
    setDoctor('')
  }

  return (
    <Container fluid>
      <div className='parent-Container padding-top'>
        <Row>
          <Col xs={6}>
            <div className='first-section common b-3  text-center'>
              <h3>Appointment</h3>
              {info ? (
                <Card className='pt-3'>
                  <Card.Img variant='top' height='100' src={src} />

                  <Card.Body>
                    <Card.Title>
                      Appointment Booked with {info.doctor}
                    </Card.Title>
                    <Card.Text>We are with you</Card.Text>
                    <Card.Footer>{info.discription}</Card.Footer>
                  </Card.Body>
                </Card>
              ) : (
                <h4 className='mt-5'>no oppointments</h4>
              )}
            </div>
          </Col>

          <Col xs={5}>
            <div className='second-section common'>
              <h3 className='text-center mb-5'>Book a Appointment</h3>
              {error && <Alert variant='danger'>{error}</Alert>}
              <div className='m-3'>
                <Select
                  value={doctor}
                  options={doctors}
                  onChange={(e) => {
                    setDoctor(e.value)
                  }}
                />
              </div>
            </div>
            <div>
              <input
                type='text'
                required
                className='form-control'
                placeholder='Description'
                onChange={(e) => {
                  setDiscription(e.target.value)
                }}
              />
            </div>
            <div className='d-grid mt-5'>
              <button
                type='button'
                onClick={updateHandler}
                className='btn btn-primary'
              >
                Book
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Appointment
