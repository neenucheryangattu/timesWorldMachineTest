import React, { useState } from "react";
import { Container, Row, Col, Form, Alert, Image } from "react-bootstrap";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../store/slices/authSlice";
import loginImage from "../assets/loginImage.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = ["Password is required"];
    } else {
      const password = formData.password;
      const passwordErrors = [];

      if (password.length < 8) {
        passwordErrors.push("At least 8 characters long");
      }
      if (!/[A-Z]/.test(password)) {
        passwordErrors.push("At least one uppercase letter");
      }
      if (!/\d/.test(password)) {
        passwordErrors.push("At least one number");
      }
      if (!/[@$!%*?&]/.test(password)) {
        passwordErrors.push(
          "At least one special character (@, $, !, %, *, ?, &)"
        );
      }

      if (passwordErrors.length > 0) {
        newErrors.password = passwordErrors;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(loginStart());

      setTimeout(() => {
        dispatch(loginSuccess(formData));
        localStorage.setItem("user", JSON.stringify(formData));
        navigate("/home");
      }, 1500);
    } else {
      dispatch(loginFailure("Invalid email or password"));
    }
  };

  return (
    <div
      className="login-page"
      style={{
        minHeight: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container fluid className="h-100 d-flex " style={{ minHeight: "100vh" }}>
        <Row className="h-100 w-100">
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex align-items-center justify-content-center justify-content-md-end p-md-0 pr-md-5"
          >
            <div
              className="login-form-container"
              style={{ width: "100%", maxWidth: "400px", padding: "20px" }}
            >
              <div className="mb-4 text-center text-md-start">
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#333",
                    margin: 0,
                    marginBottom: "0.5rem",
                  }}
                >
                  Sign In
                </h1>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    margin: 0,
                    fontWeight: "600",
                  }}
                >
                  New user?{" "}
                  <span
                    style={{
                      color: "#007bff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Create an account
                  </span>
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Username or email"
                    isInvalid={!!errors.email}
                    disabled={loading}
                    style={{
                      border: "1px solid #333",
                      borderRadius: "4px",
                      padding: "12px 16px",
                      fontWeight: "600",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    isInvalid={!!errors.password}
                    disabled={loading}
                    style={{
                      border: "1px solid #333",
                      borderRadius: "4px",
                      padding: "12px 16px",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password && Array.isArray(errors.password) && (
                      <ul
                        style={{
                          color: "red",
                          marginTop: "5px",
                          paddingLeft: "20px",
                        }}
                      >
                        {errors.password.map((err, index) => (
                          <li key={index}>{err}</li>
                        ))}
                      </ul>
                    )}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="keepSignedIn"
                    checked={formData.keepSignedIn}
                    onChange={handleInputChange}
                    label="Keep me signed in"
                    className="custom-checkbox"
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      fontWeight: "600",
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 mb-4"
                  disabled={loading}
                  style={{ width: "100%" }}
                  fontWeight="700"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </Form>
              <div className="text-center">
                <div
                  style={{
                    position: "relative",
                    margin: "20px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <hr
                    style={{
                      width: "100%",
                      border: "none",
                      borderTop: "2px solid #000",
                      margin: 0,
                    }}
                  />
                  <span
                    style={{
                      backgroundColor: "#f5f5f5",
                      padding: "0 15px",
                      color: "#666",
                      fontSize: "0.9rem",
                      position: "absolute",
                    }}
                  >
                    Or Sign In With
                  </span>
                </div>

                <div className="d-flex justify-content-center gap-3">
                  <SocialMediaIcon provider="google" size={56} />
                  <SocialMediaIcon provider="facebook" size={56} />
                  <SocialMediaIcon provider="linkedIn" size={56} />
                  <SocialMediaIcon provider="twitter" size={56} />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={8}
            className="d-none d-md-flex align-items-center justify-content-start p-md-0 pl-md-5"
          >
            <div
              className="login-image-container"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={loginImage}
                alt="Login Illustration"
                fluid
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
