import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Image,
  Carousel,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, loadMore } from "../store/slices/countriesSlice";
import Button from "../components/Button";
import SocialMediaIcon from "../components/SocialMediaIcon";

function HomePage() {
  const dispatch = useDispatch();
  const { countries, visibleCount, loading, error } = useSelector(
    (state) => state.countries
  );
  const [region, setRegion] = useState("All");
   const [carouselIndex, setCarouselIndex] = useState(0);

   const carouselSlides = ["slide1", "slide2", "slide3", "slide4"];
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleCarouselSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };
const handlePrevious = () => {
    const prevIndex = carouselIndex === 0 ? carouselSlides.length - 1 : carouselIndex - 1;
    setCarouselIndex(prevIndex);
  };
  
  const handleNext = () => {
    const nextIndex = carouselIndex === carouselSlides.length - 1 ? 0 : carouselIndex + 1;
    setCarouselIndex(nextIndex);
  };
  
  const handleIndicatorClick = (index) => {
    setCarouselIndex(index);
  };
  const handleLoadMore = () => {
    dispatch(loadMore());
  };
  const filteredCountries =
    region === "All"
      ? countries
      : countries.filter((country) => country.region === region);
  console.log(filteredCountries);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <h4>Loading countries...</h4>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <h4 className="text-danger">{error}</h4>
      </Container>
    );
  }
  return (
    <div className="bg-light min-vh-100">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className=" fs-4 text-dark fw-semibold">Countries</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"
              activeKey={region}
              variant="underline"
              onSelect={(key) => setRegion(key)}
            >
              <Nav.Item>
                <Nav.Link
                  onClick={() => setRegion("All")}
                  className={`text-muted ${
                    region === "All"
                      ? "border-bottom border-2 border-dark fw-semibold"
                      : ""
                  }`}
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-muted"
                  onClick={() => setRegion("Asia")}
                >
                  Asia
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-muted"
                  onClick={() => setRegion("Europe")}
                >
                  Europe
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col className="d-flex justify-content-center position-relative">
            <div className="position-relative d-inline-block text-center">
              <div
                className="d-none d-md-block"
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "-170px",
                  width: "150px",
                  height: "2px",
                  backgroundColor: "#333",
                }}
              ></div>
              <div
                className="d-md-none"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "150px",
                  height: "2px",
                  backgroundColor: "#333",
                }}
              ></div>

              <h1 className="display-6 fw-semibold  text-dark mb-0">WELCOME</h1>
              <div
                className="d-none d-md-block"
                style={{
                  position: "absolute",
                  bottom: "15px",
                  right: "-170px",
                  width: "150px",
                  height: "2px",
                  backgroundColor: "#333",
                }}
              ></div>

              <div
                className="d-md-none"
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "150px",
                  height: "2px",
                  backgroundColor: "#333",
                }}
              ></div>
            </div>
          </Col>
        </Row>

         <Row className="mb-5">
                  {/* Right Sidebar/Frame - First on mobile, second on desktop */}
                  <Col xs={12} md={4} className="order-1 order-md-2 mb-3 mb-md-0">
                    <div 
                      className="bg-light border d-flex align-items-center justify-content-center sidebar-frame"
                      style={{
                        backgroundColor: "#f8f9fa"
                      }}
                    >
                      <div className="text-muted text-center">
                        <div style={{ fontSize: "48px", marginBottom: "10px" }}>
                          ◢ ◣ ◤
                        </div>
                        <div style={{ fontSize: "0.9rem", opacity: 0.7 }}>Frame</div>
                      </div>
                    </div>
                  </Col>
                  
                  {/* Main Carousel Section - Second on mobile, first on desktop */}
                  <Col xs={12} md={8} className="order-2 order-md-1">
                    <div className="mb-3" style={{ position: "relative" }}>
                      <Carousel 
                        indicators={false}
                        controls={false}
                        interval={null}
                        activeIndex={carouselIndex}
                        onSelect={handleCarouselSelect}
                        style={{
                          height: "400px"
                        }}
                      >
                        {carouselSlides.map((slideText, index) => (
                          <Carousel.Item key={index}>
                            <div 
                              className="d-flex align-items-center justify-content-center"
                              style={{
                                height: "400px",
                                backgroundColor: "#adb5bd",
                                border: "1px solid #dee2e6"
                              }}
                            >
                              <h2 className="text-dark">{slideText}</h2>
                            </div>
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      
                      {/* Custom Navigation Controls - Fixed position, stays in place */}
                      <div 
                        className="d-flex align-items-center justify-content-center gap-3"
                        style={{
                          position: "absolute",
                          bottom: "15px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 15,
                          pointerEvents: "auto",
                          width: "100%"
                        }}
                      >
                        <button
                          onClick={handlePrevious}
                          className="btn btn-link text-dark p-0"
                          style={{
                            border: "none",
                            background: "none",
                            fontSize: "24px",
                            textDecoration: "none",
                            cursor: "pointer",
                            lineHeight: "1",
                            color: "#000"
                          }}
                        >
                          ←
                        </button>
                        
                        <div className="d-flex gap-2 align-items-center">
                          {carouselSlides.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleIndicatorClick(idx)}
                              className="btn p-0"
                              style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                border: "1px solid #000",
                                backgroundColor: idx === carouselIndex ? "#000" : "#fff",
                                padding: "0",
                                cursor: "pointer"
                              }}
                            />
                          ))}
                        </div>
                        
                        <button
                          onClick={handleNext}
                          className="btn btn-link text-dark p-0"
                          style={{
                            border: "none",
                            background: "none",
                            fontSize: "24px",
                            textDecoration: "none",
                            cursor: "pointer",
                            lineHeight: "1",
                            color: "#000"
                          }}
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>

        <Row>
          {filteredCountries.slice(0, visibleCount).map((country, index) => (
            <Col xs={12} md={6} key={index} className="mb-3">
              <Card
                className="h-100 border-secondary  country-card  rounded-0"
                style={{
                  height: "80px",
                  boxShadow: "6px 6px 0 rgba(214, 214, 214, 1)",
                }}
              >
                <Card.Body className="d-flex align-items-center gap-3">
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Card.Title className="fs-6 fw-semibold">
                      {country.name}
                    </Card.Title>
                    <Card.Text
                      className="text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {country.region}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {visibleCount < countries.length && (
          <Row className="mt-5">
            <Col className="text-center">
              <Button
                onClick={handleLoadMore}
                variant="dark"
                size="lg"
                className="px-4"
              >
                Load More
              </Button>
            </Col>
          </Row>
        )}
        <Row className="mt-5 pt-5">
          <Col className="text-center">
            <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
              <SocialMediaIcon
                provider="facebook"
                variant="outlined"
                size={56}
              />
              <SocialMediaIcon
                provider="twitter"
                variant="outlined"
                size={56}
              />
              <SocialMediaIcon
                provider="linkedin"
                variant="outlined"
                size={56}
              />
              <SocialMediaIcon
                provider="youtube"
                variant="outlined"
                size={56}
              />
            </div>
            <div className="mb-3">
              <span className="text-muted">Example@email.com</span>
            </div>
            <div>
              <span className="text-muted">
                Copyright © 2020 Name. All rights reserved.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
