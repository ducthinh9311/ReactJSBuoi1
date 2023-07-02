import "./List.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import tshirt from "../../assett/images/tshirt.png";
import mug from "../../assett/images/mug.jpg";
import canvas1 from "../../assett/images/canvas1.jpg";
import shoe from "../../assett/images/shoe.jpg";
import blanket from "../../assett/images/blanket.jpg";
import necklace from "../../assett/images/necklace.jpg";
export default function GroupExample() {
  return (
    <div className="list_container">
      <h2 className="title">Shop by Categories</h2>
      <CardGroup data-aos="fade-up">
        <Card className="card_1">
          <Card.Img variant="top" src={tshirt} className="card_circle" />
          <Card.Body>
            <Card.Title>Apparel</Card.Title>
            <Card.Text>
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </Card.Footer>
        </Card>
        <Card className="card_1">
          <Card.Img variant="top" src={mug} className="card_circle" />
          <Card.Body>
            <Card.Title>Mug</Card.Title>
            <Card.Text>
              {/* This card has supporting text below as a natural lead-in to
              additional content.{" "} */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </Card.Footer>
        </Card>
        <Card className="card_1">
          <Card.Img variant="top" src={canvas1} className="card_circle" />
          <Card.Body>
            <Card.Title>Canvas</Card.Title>
            {/* <Card.Text>Alaskan Malamute Dog Coffee Company Poster</Card.Text> */}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card className="card_1">
          <Card.Img variant="top" src={shoe} className="card_circle" />
          <Card.Body>
            <Card.Title>Shoes</Card.Title>
            <Card.Text>
              {/* Goku God Jordan Sneakers Dragon Ball Anime Shoes Fan */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card className="card_1">
          <Card.Img variant="top" src={blanket} className="card_circle" />
          <Card.Body>
            <Card.Title>Blanket</Card.Title>
            <Card.Text>
              {/* To My Mom Blanket Gift From Daughter You Gave Me Love Wolf Blanket
              Mother Day Gift */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card className="card_1">
          <Card.Img variant="top" src={necklace} className="card_circle" />
          <Card.Body>
            <Card.Title>Necklace</Card.Title>
            <Card.Text>
              {/* Love From Your Heart Precious Child To My Mom Necklace */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
