import { useState } from "react";
import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import paws from "../../images/paws.png";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function LoginPage() {
  const [setValidated] = useState(false);

  const handleLoginSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Row className="w-full">
      <div className="col-md-3">
        <img src={paws} className="h-720 mt-10" />
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form as={Col} noValidate>
            <Form.Group as={Col} controlId="validationEmail" className="mt-20">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  value={values.email || ""}
                  name="Email"
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="validationPassword"
              className="mt-6"
            >
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="Password"
                  value={values.password || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div className="max-w-full flex mt-2 items-center">
              <Form.Group as={Col} md="8">
                <div>
                  Don't have an account? <a href="/register">Register</a>
                </div>
              </Form.Group>
              <Form.Group as={Col} md="4" className="text-right">
                <Button type="submit" onClick={handleSubmit}>
                  Log in
                </Button>
              </Form.Group>
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

export default LoginPage;
