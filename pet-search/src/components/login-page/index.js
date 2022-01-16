import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import paws from "../../images/paws.png";
import { Formik } from "formik";
import * as yup from "yup";
import * as userService from "../../services/user-service";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = (values) => {
    userService.getUsers().then((users) => {
      const user = users.find((user) => user.email === values.email);
      if (!user) {
        setErrorMessage("User not found");
        return;
      }

      if (user.password !== values.password) {
        setErrorMessage("Incorrect password");
        return;
      }

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          name: user.name,
          surname: user.surname,
        })
      );
      window.location.href = "/React-project/";
    });
  };

  return (
    <Row className="w-full">
      <div className="col-md-3 col-sm-2">
        <img src={paws} className="h-720 mt-10 hidden md:block" />
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(formValues) => loginUser(formValues)}
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
                  onChange={handleChange("email")}
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
                  onChange={handleChange("password")}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div className="text-red-600 mt-2">{errorMessage}</div>
            <div className="max-w-full flex items-center">
              <Form.Group as={Col} md="8">
                <div>
                  Don't have an account?{" "}
                  <a href="/React-project/register">Register</a>
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
      <div className="col-md-3 col-sm-2 flex flex-row-reverse">
        <img src={paws} className="h-720 mt-10 hidden md:block" />
      </div>
    </Row>
  );
}

export default LoginPage;
