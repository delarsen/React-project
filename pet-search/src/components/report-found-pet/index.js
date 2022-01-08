import { Component, useState } from "react";
import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import paws from "../../images/paws.png";
import { Formik } from "formik";
import * as yup from "yup";
import ImageUploader from "../image-uploader";

let schema = yup.object().shape({
  age: yup.number().min(0).required(),
});

const breeds = {
  cat: ["black", "yellow"],
  dog: ["corgi", "ovcharka"],
  bunny: ["red", "black"],
  dontknow: [],
};

class ReportFoundPetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedList: breeds.cat,
    };
  }

  onChangePet = (e) => {
    const pet = e.target.value;
    this.setState({ breedList: breeds[pet] });
  };

  renderBreedsOptions = () => {
    const options = this.state.breedList.map((breed) => {
      const value = breed.replaceAll(" ", "");
      return (
        <option value={value} key={value}>
          {breed}
        </option>
      );
    });

    options.push(
      <option value="dontknow" key="dontknow">
        Don't know
      </option>
    );

    return options;
  };

  render() {
    return (
      <Row className="w-full ">
        <div className="col-md-3">
          <img src={paws} className="h-720 mt-10" />
        </div>

        <Formik
          initialValues={{
            typeOfPet: "",
            age: "",
            breed: "",
            gender: "",
            neutered: "",
            color: "",
            description: "",
            date: "",
          }}
          validationSchema={schema}
        >
          {({
            handleSubmit,
            handleChange,
            setFieldValue,
            values,
            errors,
            onChange,
          }) => (
            <Form as={Col} noValidate>
              <Form.Group as={Col} className="mt-20">
                <Form.Label>Type of pet</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    placeholder="Type of pet"
                    value={values.typeOfPet || ""}
                    onChange={(e) => {
                      this.onChangePet(e);
                      handleChange("typeOfPet");
                      setFieldValue("typeOfPet", e.target.value);
                    }}
                    isInvalid={!!errors.typeOfPet}
                  >
                    <option value="cat" key="cat">
                      Cat
                    </option>
                    <option value="dog" key="dog">
                      Dog
                    </option>
                    <option value="bunny" key="bunny">
                      Bunny
                    </option>
                    <option value="dontknow" key="dontknow">
                      Don't know
                    </option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.typeOfPet}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} className="mt-3">
                <Form.Label>Animal breed</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    placeholder="Animal breed"
                    value={values.breed || ""}
                    onChange={handleChange("breed")}
                    isInvalid={!!errors.breed}
                  >
                    {this.renderBreedsOptions()}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.breed}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <div className="max-w-full flex mt-3">
                <Form.Group as={Col} className="mr-3">
                  <Form.Label>What sex is the pet?</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Select
                      placeholder="Gender"
                      value={values.gender || ""}
                      onChange={handleChange("gender")}
                      isInvalid={!!errors.gender}
                    >
                      <option value="male" key="male">
                        Male
                      </option>
                      <option value="female" key="female">
                        Female
                      </option>
                      <option value="dontknow" key="dontknow">
                        Don't know
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.gender}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} className="mr-3">
                  <Form.Label>Age (years)</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="number"
                      placeholder="Age"
                      value={values.age || ""}
                      name="Age"
                      onChange={handleChange("age")}
                      isInvalid={!!errors.age}
                      step={0.1}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.age}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Is the pet neutered?</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Select
                      placeholder="Neutered"
                      value={values.neutered || ""}
                      onChange={handleChange("neutered")}
                      isInvalid={!!errors.neutered}
                    >
                      <option value="yes" key="yes">
                        Yes
                      </option>
                      <option value="no" key="no">
                        No
                      </option>
                      <option value="dontknow" key="dontknow">
                        Don't know
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.neutered}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </div>
              <Form.Group as={Col} className="mt-3">
                <Form.Label>Color</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    placeholder="Color"
                    value={values.color || ""}
                    onChange={handleChange("color")}
                    isInvalid={!!errors.color}
                  >
                    <option className="bg-red-400" value="red" key="red">
                      Red
                    </option>
                    <option value="black" key="black">
                      Black
                    </option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.color}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} className="mt-3">
                <Form.Label>Description</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Description"
                    value={values.description || ""}
                    name="Description"
                    onChange={handleChange("description")}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} className="mt-3">
                <Form.Label>When the pet was found?</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="date"
                    placeholder="Date"
                    value={values.date || ""}
                    name="Date"
                    onChange={handleChange("date")}
                    isInvalid={!!errors.date}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.date}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <ImageUploader></ImageUploader>
              <div className="mt-10">
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
