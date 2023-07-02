import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import "./Header.css";
import logo from "../../assett/images/logo.png";
import { useContext } from "react";
import { AppContext } from "../AppContext";
export default function Header() {
  const { cart } = useContext(AppContext);
  return (
    <div className="nav_container2">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img src={logo} className="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/bestsellers">
                <Nav.Link href="#bestsellers">BEST SELLERS</Nav.Link>
              </Link>
              <Link to="/newarrival">
                <Nav.Link href="#recipients">NEW ARRIVAL</Nav.Link>
              </Link>
              <Link to="/occasions">
                <Nav.Link href="#occasions">OCCASIONS</Nav.Link>
              </Link>
              <Link to="/contactus">
                <Nav.Link href="#contactus">CONTACT US</Nav.Link>
              </Link>
              <Link to="/review">
                <Nav.Link href="#review">REVIEW</Nav.Link>
              </Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Link to="/cart" className={`d-flex align-items-center`}>
                <BiCart size="2rem" style={{ marginLeft: "15px" }} />
                <div style={{ marginBottom: "15px" }}>{cart.length}</div>

                {/* <span style={{ marginLeft: "13px" }}>Cart</span> */}
              </Link>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
