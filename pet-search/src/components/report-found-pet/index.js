import { Component, useState } from "react";
import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import paws from "../../images/paws.png";
import { Formik } from "formik";
import * as yup from "yup";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

let schema = yup.object().shape({
  age: yup.number().min(0).required(),
});

class ReportFoundPetPage extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <Row className="w-full ">
        <div className="col-md-3">
          <img src={paws} className="h-720 mt-10" />
        </div>

        <Formik
          initialValues={{
            age: "",
          }}
          validationSchema={schema}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form as={Col} noValidate>
              <div className="mt-10">
                <Form.Select>
                  <option>Type of pet</option>
                  <option value="1">Cat</option>
                  <option value="2">Dog</option>
                  <option value="3">Bunny</option>
                </Form.Select>
              </div>
              <div>
                <Form.Select>
                  <option>Animal breed</option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3">No matches</option>
                </Form.Select>
              </div>
              <div className="mt-10">
                <label className="ml-7">Gender</label>
                <label className="ml-32">Age</label>
                <label className="ml-24">Castrated?</label>
                <label className="ml-24">Main color of pet</label>
                <div className="flex inline">
                  <div className="flex inline-block">
                    <Form.Check
                      type="checkbox"
                      label="male"
                      className="mr-4 "
                    />
                    <Form.Check type="checkbox" label="female" />
                  </div>
                  <InputGroup hasValidation>
                    <div className="w-16 flex inline-block ml-12">
                      <Form.Control
                        type="number"
                        placeholder="Age"
                        min="0"
                        isInvalid={!!errors.password}
                      />
                    </div>
                    <Form.Control.Feedback type="invalid">
                      {errors.age}
                    </Form.Control.Feedback>
                  </InputGroup>

                  <div className="flex inline-block  ">
                    <Form.Check type="checkbox" label="yes" className="mr-4 " />
                    <Form.Check type="checkbox" label="no" />
                  </div>
                  <div className=" ml-32">
                    <div style={styles.swatch} onClick={this.handleClick}>
                      <div style={styles.color} />
                    </div>
                    {this.state.displayColorPicker ? (
                      <div style={styles.popover}>
                        <div style={styles.cover} onClick={this.handleClose} />
                        <SketchPicker
                          color={this.state.color}
                          onChange={this.handleChange}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                </div>
                <div className="float-right">
                  <Button type="submit">Report pet</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        <div className="col-md-3 flex flex-row-reverse">
          <img src={paws} className="h-720 mt-10" />
        </div>
      </Row>
    );
  }
}

export default ReportFoundPetPage;
