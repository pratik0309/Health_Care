import Carousel from 'react-bootstrap/Carousel'
import src from '../assests/106119559-15…2484iwatch.webp'

function CarouselSolutions() {
  return (
    <Carousel>
      <Carousel.Item className='item'>
        <img
          className='d-block w-100'
          style={{
            marginLeft: '100px',
            opacity: '0.6',
            height: '300px',
            width: '300px',
          }}
          src={src}
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3 style={{ color: 'yellow', fontSize: '2rem' }}>
            Activity Tracker
          </h3>
          <p style={{ color: 'black', marginLeft: '50px' }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className='d-block w-100'
          style={{
            marginLeft: '100px',
            opacity: '0.6',
            height: '300px',
            width: '300px',
          }}
          src={src}
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3 style={{ color: 'yellow', fontSize: '2rem' }}>
            Activity Tracker
          </h3>
          <p style={{ color: 'black', marginLeft: '50px' }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className='d-block w-100'
          style={{
            marginLeft: '100px',
            opacity: '0.6',
            height: '300px',
            width: '300px',
          }}
          src={src}
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3 style={{ color: 'yellow', fontSize: '2rem' }}>
            Activity Tracker
          </h3>
          <p style={{ color: 'black', marginLeft: '50px' }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselSolutions
