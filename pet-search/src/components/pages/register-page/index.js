import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import paws from "../../../images/paws.png";
import { Formik } from "formik";
import * as yup from "yup";
import * as userService from "../../../services/user-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const phoneRegExp = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(
      phoneRegExp,
      "Phone number should match format: +375(29,33,44,25)......."
    ),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match.")
    .required(),
});

function RegisterPage() {
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const registerUser = (values) => {
    userService.getUsers().then((users) => {
      const user = users.find((user) => user.email === values.email);
      if (user) {
        setErrorMessage("User with this email already exists");
        return;
      }

      userService
        .addUser({
          name: values.name,
          surname: values.surname,
          email: values.email,
          phone: values.phone,
          password: values.password,
        })
        .then(() => {
          userService.getUsers().then((users) => {
            const user = users.find((user) => user.email === values.email);

            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem(
              "user",
              JSON.stringify({
                email: user.email,
                name: user.name,
                surname: user.surname,
                id: user.id,
                phone: user.phone,
              })
            );
            setTimeout(() => navigate("/account"), 1000);
          });
        });
    });
  };

  return (
    <Row className="w-full">
      <div className="col-md-3">
        <img src={paws} alt="" className="h-720 mt-10 hidden md:block" />
      </div>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(formValues) => registerUser(formValues)}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form as={Col} noValidate className="ml-4 md:ml-0">
            <div className="max-w-full flex mt-20">
              <Form.Group as={Col} controlId="validationName" className="mr-5">
                <Form.Label>Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={values.name || ""}
                    name="Name"
                    onChange={handleChange("name")}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} controlId="validationSurname">
                <Form.Label>Surname</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Surname"
                    value={values.surname || ""}
                    name="Surname"
                    onChange={handleChange("surname")}
                    isInvalid={!!errors.surname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.surname}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </div>
            <Form.Group as={Col} controlId="validationEmail" className="mt-6">
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
            <Form.Group as={Col} controlId="validationPhone" className="mt-6">
              <Form.Label>Phone</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="tel"
                  placeholder="Phone"
                  value={values.phone || ""}
                  name="Phone"
                  onChange={handleChange("phone")}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
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
                  value={values.password || ""}
                  name="Password"
                  onChange={handleChange("password")}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="validationConfirmPassword"
              className="mt-6"
            >
              <Form.Label>Confirm password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={values.confirmPassword || ""}
                  onChange={handleChange("confirmPassword")}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div className="text-red-600 mt-2">{errorMessage}</div>
            <div className="max-w-full flex items-center">
              <Form.Group as={Col} md="8">
                <div>
                  Have an account? <a href="/React-project/login">Log in</a>
                </div>
              </Form.Group>
              <Form.Group as={Col} md="4" className="text-right">
                <Button type="submit" onClick={handleSubmit}>
                  Register
                </Button>
              </Form.Group>
            </div>
          </Form>
        )}
      </Formik>
      <div className="col-md-3 flex flex-row-reverse">
        <img src={paws} alt="" className="h-720 mt-10 hidden md:block" />
      </div>
    </Row>
  );
}

export default RegisterPage;
