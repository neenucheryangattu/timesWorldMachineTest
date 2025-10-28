import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Button from "../components/Button";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {};

  const handleSubmit = async (e) => {};

  return (
    <div
      className="login-page"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <Container fluid className="h-100" style={{ minHeight: '100vh' }}>
        <Row className="h-100">
          <Col
            xs={12}
            lg={4}
            className="d-flex align-items-center justify-content-center p-5"
          >
            <div
              className="login-form-container"
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <div className="mb-4">
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#333",
                    margin: 0,
                    marginBottom: "0.5rem",
                  }}
                >
                  Sign In
                </h1>
                <p style={{ color: "#666", fontSize: "1rem", margin: 0 }}>
                  New user?{" "}
                  <span style={{ color: "#007bff", cursor: "pointer" }}>
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
                    // disabled={loading}
                    style={{
                      border: "1px solid #333",
                      borderRadius: "4px",
                      padding: "12px 16px",
                      fontSize: "1rem",
                      backgroundColor: "#fff",
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
                    // disabled={loading}
                    style={{
                      border: "1px solid #333",
                      borderRadius: "4px",
                      padding: "12px 16px",
                      fontSize: "1rem",
                      backgroundColor: "#fff",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="keepSignedIn"
                    checked={formData.keepSignedIn}
                    onChange={handleInputChange}
                    label="Keep me signed in"
                    style={{ fontSize: "0.9rem", color: "#666" }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 mb-4"
                  //   disabled={loading}
                  style={{ width: "100%" }}
                >
                  {/* {loading ? 'Signing In...' : 'Sign In'} */} sign In
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
                      borderTop: "1px solid #ddd",
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
                  <SocialMediaIcon provider="Google" />
                  <SocialMediaIcon provider="Facebook" />
                  <SocialMediaIcon provider="LinkedIn" />
                  <SocialMediaIcon provider="Twitter" />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            lg={8}
            className="d-flex align-items-center justify-content-center p-5"
          >
            <div
              className="illustration-container"
              style={{
                position: "relative",
                backgroundImage: "url('/assets/login-illustration.png')",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
