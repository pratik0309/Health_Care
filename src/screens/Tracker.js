import React, { useState } from 'react'
import { useTracker } from '../contexts/TrackerContext'
import { Container, Row, Col, Alert } from 'react-bootstrap'

const Tracker = () => {
  const [weight, setWeight] = useState(null)
  const [blood, setBlood] = useState(null)
  const [sugar, setSugar] = useState(null)
  let [difference, setDifference] = useState('Update Data to see Changes')
  const [error, setError] = useState('')

  const { info, updateInfo } = useTracker()
  const updateHandler = () => {
    setDifference('')
    if (!weight || !blood || !sugar) return setError('Fields cannot be Empty')
    if (info.weight > weight) {
      difference += `you have loose ${info.weight - weight} kg weight,`
    } else difference += `you have gain ${weight - info.weight} kg weight,`

    if (info.blood > blood) {
      difference += ` your blood level is decreased by ${
        info.blood - blood
      } litre,`
    } else
      difference += ` your blood level is increased by ${
        blood - info.blood
      } litre and`
    if (info.sugar > sugar)
      difference += ` your sugar level is decreased by ${info.sugar - sugar} mg`
    else
      difference += ` your sugar level is  increased by ${
        sugar - info.sugar
      } mg`

    setDifference(difference)

    updateInfo(weight, blood, sugar)
    setError('')
    setWeight(0)
    setBlood(0)
    setSugar(0)
  }
  return (
    <Container fluid>
      <div className='parent-Container padding-top'>
        <Row>
          <Col xs={6}>
            <div className='first-section b-3'>
              <h4 className='text-center'>Last Data Tracked </h4>
              <div className='info'>
                <h5>Weight: {info.weight} kg</h5>
                <h5>Blood: {info.blood} litre</h5>
                <h5>Sugar: {info.sugar} mg</h5>
              </div>
            </div>
          </Col>

          <Col xs={5}>
            <div className='second-section'>
              <h4 className='text-center'>Update Data</h4>
              {error && <Alert variant='danger'>{error}</Alert>}
              <div className='m-3'>
                <label>Weight</label>
                <input
                  type='number'
                  required
                  className='form-control'
                  placeholder='Weight'
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className='m-3'>
                <label>Blood</label>
                <input
                  type='number'
                  required
                  className='form-control'
                  placeholder='Blood'
                  value={blood}
                  onChange={(e) => setBlood(e.target.value)}
                />
              </div>
              <div className='m-3'>
                <label>Sugar</label>
                <input
                  type='number'
                  required
                  className='form-control'
                  placeholder='Sugar'
                  value={sugar}
                  onChange={(e) => setSugar(e.target.value)}
                />
              </div>
              <div className='d-grid'>
                <button
                  type='button'
                  onClick={updateHandler}
                  className='btn btn-primary'
                >
                  Save
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {difference && <Alert variant='success'>{difference}</Alert>}
    </Container>
  )
}

export default Tracker
