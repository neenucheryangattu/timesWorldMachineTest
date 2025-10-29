import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, loadMore } from "../store/slices/countriesSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { countries, visibleCount, loading, error } = useSelector(
    (state) => state.countries
  );
  const [region, setRegion] = useState("All");
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

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
          <Navbar.Brand className=" fs-4 text-dark">Countries</Navbar.Brand>

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
                  active
                  className="text-muted"
                  onClick={() => setRegion("All")}
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
          <Col>
            <h1 className="fw-bold text-dark mb-0">WELCOME</h1>
          </Col>
        </Row>
        <Row>
          {filteredCountries.slice(0, visibleCount).map((country, index) => (
            <Col xs={6} md={6} key={index} className="mb-3">
              <Card
                className="h-100 border-secondary shadow-sm country-card"
                style={{ height: "80px" }}
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
      </Container>
    </div>
  );
}

export default HomePage;
