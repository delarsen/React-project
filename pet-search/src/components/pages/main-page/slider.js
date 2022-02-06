import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import dog2 from "../../../images/dog2.jpg";
import cat1 from "../../../images/cat1.jpg";
import bunny from "../../../images/bunny.jpg";

export default class MainPageSlider extends Component {
  render() {
    return (
      <div className="mb-14">
        <Carousel variant="dark">
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 h-128 object-cover"
              src={dog2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>We help to return pets</h3>
              <p>Help owners find their pets by posting an ad on our site.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 h-128 object-cover"
              src={cat1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Our website is completely free</h3>
              <p>
                The most advanced, free online missing pet matching service in
                Belarus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 h-128 object-cover"
              src={bunny}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>We can help locate any kind of pet</h3>
              <p>
                From dogs and cats to ferrets and birds, whether they are lost
                or stolen.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
