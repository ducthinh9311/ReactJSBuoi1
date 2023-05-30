import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AppConText } from "../context/AppConText";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BiCart } from "react-icons/bi";

export default function Nav1() {
  const { cart } = useContext(AppConText);
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/cart" className={`d-flex align-items-center`}>
              <BiCart size="2rem" />
              <div style={{ marginBottom: "15px" }}>{cart.length}</div>

              <span style={{ marginLeft: "13px" }}>Cart</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// export default function Nav () {
//     const { cart } = useContext(AppConText);
//     const { handleShow } = useContext(AppConText);
//     return(
//     <nav>
//       <Link to="/cart">
//       <Button variant="outline-primary" onClick={handleShow}>
//           <AiOutlineShoppingCart className="icon__card" />

//           <Badge className="number__card" >
//             {cart.length}
//           </Badge>
//         </Button>
//       </Link>

//       </nav>
//     )
// }
