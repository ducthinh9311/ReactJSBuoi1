// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./OurHappy.css";
import o1 from "../../../assett/images/ourhappyfaces/o1.png";
import o2 from "../../../assett/images/ourhappyfaces/o2.png";
import o3 from "../../../assett/images/ourhappyfaces/o3.png";
import o4 from "../../../assett/images/ourhappyfaces/o4.png";
import o5 from "../../../assett/images/ourhappyfaces/o5.png";
import o6 from "../../../assett/images/ourhappyfaces/o6.png";
import o7 from "../../../assett/images/ourhappyfaces/o7.png";
import o8 from "../../../assett/images/ourhappyfaces/o8.png";

export default function OurHappyFaces() {
  return (
    <>
      <h2 className="title">Our Happy Faces</h2>
      <div
        className="ourhappy"
        data-aos="fade-up"
      >
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o1} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o2} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              Happy 4th Of July Dog With Flag - Personalized T-Shirt, 4th Of
              July T-Shirt, Gift For Dog Lovers{" "}
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o3} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              Happy 4th Of July Dog With Flag - Personalized T-Shirt, 4th Of
              July T-Shirt, Gift For Dog Lovers{" "}
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o4} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              Pool Rules What Happens Here Stays Here - Personalized Wood Sign,
              Pool Sign{" "}
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
      <div
        className="ourhappy"
        data-aos="fade-up"
      >
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o5} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o6} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o7} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              All American Teacher Patriotic Gnome Teacher - Personalized
              T-shirt, Independence Day Gift For Teachers, Fourth of July Gift
              {""}
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="our_card">
          <Card.Img variant="top" src={o8} className="ourhappy_card" />
          <Card.Body>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>45.99$</Card.Title>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
