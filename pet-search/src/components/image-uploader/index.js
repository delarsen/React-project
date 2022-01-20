import React, { Component, useRef } from "react";
import {
  Button,
  CloseButton,
  Col,
  Form,
  Image,
  InputGroup,
} from "react-bootstrap";

export default class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      errorMessage: "",
    };

    this.inputRef = React.createRef();
  }

  handleUpload = () => {
    this.inputRef.current?.click();
  };

  handleDisplayFileDetails = () => {
    if (this.state.images.length === 3) {
      this.setState({ errorMessage: "Cannot upload more than 3 images" });
      return;
    }

    this.setState({ errorMessage: "" });
    const reader = new FileReader();
    const file = this.inputRef.current?.files[0];

    reader.onloadend = () => {
      this.setState({ images: [...this.state.images, reader.result] });
      this.props.handleImages(this.state.images);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  renderImages = () => {
    return this.state.images.map((image, index) => {
      return (
        <Image
          src={image}
          key={index}
          thumbnail
          className="w-32 m-auto object-cover"
        />
      );
    });
  };

  render() {
    return (
      <div className="max-w-full flex hidden-input mt-3">
        <Form as={Col} noValidate>
          <Form.Group className="inline-flex">
            <Form.Label className="mr-2">Choose file:</Form.Label>
            <InputGroup>
              <Form.Control
                type="file"
                onChange={this.handleDisplayFileDetails}
                ref={this.inputRef}
                accept=".png, .jpg, .jpeg"
              />
            </InputGroup>
          </Form.Group>
          <Button variant="dark" as={Col} onClick={this.handleUpload}>
            Upload images
          </Button>

          <div className="text-red-600 mt-2">{this.state.errorMessage}</div>
        </Form>
        <div className="img-preview inline-flex">{this.renderImages()}</div>
      </div>
    );
  }
}
