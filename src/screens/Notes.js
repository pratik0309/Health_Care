import React, { useEffect, useState } from 'react'
import { useNotes } from '../contexts/NotesContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { Alert } from 'react-bootstrap'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const { notes, saveNote, getNotes } = useNotes()
  const notesHandler = async () => {
    if (title === '' || description === '')
      return setError('Title and Description cannot be empty')
    try {
      setError('')
      saveNote(title, description)
      setTitle('')
      setDescription('')
    } catch (e) {
      console.log(e)
      setError('Failed to save the note')
    }
  }

  // useEffect(() => {
  //   const getBackendNotes = async () => {
  //     let res = await getNotes()
  //     res = res.docs.forEach((doc) => {
  //       console.log(doc.id, '=>', doc.data())
  //     })
  //     setNewNotes(res)
  //   }
  //   getBackendNotes()
  // }, [getNotes])

  return (
    <div className='parent-container padding-top'>
      <Container>
        <Row>
          <Col md={7}>
            <div className='first-section'>
              <Container>
                <Row>
                  {notes.map((note, index) => (
                    <Col lg={6}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{note.title}</Card.Title>
                          <Card.Text>{note.description}</Card.Text>
                          <Card.Text>13 september 2022</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={5}>
            <div className='second-section'>
              <h2 className='text-center'>Add Note</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <div className='m-3'>
                <label>Title</label>
                <input
                  type='text'
                  required
                  className='form-control'
                  placeholder='Title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='m-3'>
                <label>Description</label>
                <textarea
                  id='description'
                  name='description'
                  rows='4'
                  cols='50'
                  className='form-control'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className='d-grid'>
                <button
                  type='button'
                  onClick={notesHandler}
                  className='btn btn-primary'
                >
                  Save
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Notes
