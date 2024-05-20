import React, { Component } from "react";
import "../components/Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImageIndex: 0 };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    this.setState((prevState) => ({
      currentImageIndex:
        prevState.currentImageIndex === images.length - 1
          ? 0
          : prevState.currentImageIndex + 1,
    }));
  }

  handlePrev() {
    this.setState((prevState) => ({
      currentImageIndex:
        prevState.currentImageIndex === 0
          ? images.length - 1
          : prevState.currentImageIndex - 1,
    }));
  }

  render() {
    const { currentImageIndex } = this.state;
    return (
      <div className="carousel-container">
        <button className="prev-btn" onClick={this.handlePrev}>
          <ArrowBackIosIcon />
        </button>
        <div className="image-container">
          <img
            className="carousel-image"
            src={images[currentImageIndex].img}
            alt={images[currentImageIndex].title}
          />
          <div className="image-text title">
            <h2>{images[currentImageIndex].title}</h2>
          </div>
          <div className="image-text subtitle">
            <p>{images[currentImageIndex].subtitle}</p>
          </div>
        </div>
        <button className="next-btn" onClick={this.handleNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    );
  }
}

export default Carousel;
