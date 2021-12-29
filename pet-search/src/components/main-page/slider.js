import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import dog2 from "../img/dog2.jpg";
import cat1 from "../img/cat1.jpg";
import bunny from "../img/bunny.jpg";

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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 h-128 object-cover"
              src={cat1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 h-128 object-cover"
              src={bunny}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
