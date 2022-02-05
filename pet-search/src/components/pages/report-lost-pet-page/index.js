import { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import paws from "../../../images/paws.png";
import { Formik } from "formik";
import * as yup from "yup";
import ImageUploader from "../../common/image-uploader";
import * as dayjs from "dayjs";
import * as petService from "../../../services/pet-service";

let schema = yup.object().shape({
  age: yup.number().min(0).required(),
});

const breeds = {
  cat: [
    "Siamese",
    "Persian",
    "Maine Coon",
    "Ragdoll",
    "Bengal",
    "Abyssinian",
    "Birman",
    "Oriental Shorthair",
    "Sphynx",
    "Devon Rex",
    "Himalayan",
    "American Shorthair",
  ],
  dog: [
    "Bulldog",
    "Retriever",
    "Poodles ",
    "Beagles",
    "Rottweiler",
    "Yorkshire Terrier",
    "Shetland Sheepdog",
    "Corgi",
    "Chihuahua",
  ],
  bunny: [
    "Holland Lop",
    "Mini Lop",
    "Dutch",
    "Lionhead",
    "French Lop",
    "Californian",
    "Dwarf Papillon",
    "Mini Rex",
  ],
  dontknow: [],
};

class ReportLostPetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedList: breeds.cat,
      images: [],
    };
  }

  handleImages = (images) => {
    this.setState({ images: images });
  };

  onSubmitPet = (values) => {
    const pet = {
      type: values.typeOfPet,
      breed:
        !values.breed || values.breed === ""
          ? breeds[values.typeOfPet].shift()
          : values.breed,
      gemder: values.gender,
      age: values.age,
      neutered: values.neutered,
      color: values.color,
      description: values.description,
      date: values.date,
      images: this.state.images,
    };

    petService.addLostPet(pet).then(() => {
      window.location.href = "/React-project/";
    });
  };

  onChangePet = (e) => {
    const pet = e.target.value;
    this.setState({ breedList: breeds[pet] });
  };

  renderBreedsOptions = () => {
    const options = this.state.breedList.map((breed, index) => {
      const value = breed.replaceAll(" ", "");
      if (index === 0) {
        return (
          <option value={value} key={value}>
            {breed}
          </option>
        );
      }
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

  componentDidMount() {
    if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "/React-project/loginrequired";
    }
  }

  render() {
    return (
      <Row className="w-full ">
        <div className="w-full h-48 bg-amber-400 text-center pt-20 md:pt-12 text-3xl text-white font-light sm:text-5xl md:text-7xl">
          Report pet As Lost
        </div>

        <div className="col-md-3 hidden lg:grid">
          <img src={paws} alt="" className="h-720 mt-10" />
        </div>
        <Formik
          initialValues={{
            typeOfPet: "cat",
            age: "",
            breed: "",
            gender: "male",
            neutered: "yes",
            color: "red",
            description: "",
            date: dayjs().format("YYYY-MM-DD"),
          }}
          validationSchema={schema}
          onSubmit={this.onSubmitPet}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
            <Form as={Col} noValidate className="ml-4 md:ml-0">
              <div className="text-base font-light mt-5 ml-6 md:ml-0 md:text-lg">
                If you have lost your pet, fill out the form below, and caring
                volunteers will help you bring your pet back home.
              </div>
              <Form.Group as={Col} className="mt-10">
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
                  <Form.Label>Age (Approximately)</Form.Label>
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
              <ImageUploader handleImages={this.handleImages}></ImageUploader>
              <div className="mt-10">
                <div className="float-right">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="mb-20"
                  >
                    Report pet
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="col-md-3 flex flex-row-reverse hidden lg:grid">
          <img src={paws} alt="" className="h-720 mt-10" />
        </div>
      </Row>
    );
  }
}

export default ReportLostPetPage;
