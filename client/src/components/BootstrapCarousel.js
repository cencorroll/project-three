import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src="https://media.istockphoto.com/photos/eiffel-tower-in-paris-skyline-at-dawn-picture-id1280246120?b=1&k=20&m=1280246120&s=170667a&w=0&h=9g8hb-FTp7TfrN6gItpxDFKG0wPjwvnZQlNHZaxyeeI="
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            // style={{ height: 700 }}
            src="https://media.istockphoto.com/photos/eiffel-tower-aerial-view-paris-picture-id1145422105?k=20&m=1145422105&s=612x612&w=0&h=IVTtz9ao9ywd5AltRNbr_K64LeuHeJ68J9ivjpztbEs="
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://kkhotels-ce53.kxcdn.com/wp-content/uploads/2020/01/Paris-City-Eiffeltower-View.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
