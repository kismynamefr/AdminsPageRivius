import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Calendar extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <footer className="footer pt-0">
            <Row className="align-items-center justify-content-lg-between">
              <Col lg="6">
                <div className="copyright text-center text-lg-left text-muted">
                  © {new Date().getFullYear()}{" "}
                  <a
                    className="font-weight-bold ml-1"
                    href="https://codev.vn/"
                    target="_blank"
                  >
                    Codev
                  </a>
                </div>
              </Col>
              <Col lg="6">
                <Nav className="nav-footer justify-content-center justify-content-lg-end">
                  <NavItem>
                    <NavLink href="https://codev.vn/" target="_blank">
                      Codev
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://codev.vn/"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=adpr-admin-footer"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com/license?ref=adpr-admin-footer"
                      target="_blank"
                    >
                      License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </footer>
        </Container>
      </>
    );
  }
}

export default Calendar;
