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

class ReportLostPetPage extends Component {
  render() {
    return (
      <Row className="w-full ">
        <div className="col-md-3">
          <img src={paws} className="h-720 mt-10" />
        </div>

        <Formik>
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form as={Col} noValidate></Form>
          )}
        </Formik>

        <div className="col-md-3 flex flex-row-reverse">
          <img src={paws} className="h-720 mt-10" />
        </div>
      </Row>
    );
  }
}

export default ReportLostPetPage;
