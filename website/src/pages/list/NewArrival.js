import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./NewArrival.css";
import n1 from "../../assett/images/newarrival/n1.png";
import n2 from "../../assett/images/newarrival/n2.png";
import n3 from "../../assett/images/newarrival/n3.png";
import n4 from "../../assett/images/newarrival/n4.png";
import n5 from "../../assett/images/newarrival/n5.png";
import n6 from "../../assett/images/newarrival/n6.png";
import n7 from "../../assett/images/newarrival/n7.png";
import n8 from "../../assett/images/newarrival/n8.png";
import { Link } from "react-router-dom";
export default function NewArrival() {
  return (
    <div>
      <h2 className="title">New Arrival</h2>
      <div className="newarrival" data-aos="fade-up">
        <CardGroup className="new">
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n1} className="newarrival_card" />
              </Link>
              <Card.Text>
              All American Teacher Patriotic Gnome Teacher - Personalized T-shirt, Independence Day Gift For Teachers, Fourth of July Gift
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n2} className="newarrival_card" />
              </Link>
              <Card.Text>
              Butterflies Grandma Flowers With Grandkid Names - Personalized T-shirt, Independence Day Gift For Grandma
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n3} className="newarrival_card" />
              </Link>
              <Card.Text>
              Happy 4th Of July Dog With Flag - Personalized T-Shirt, 4th Of July T-Shirt, Gift For Dog Lovers
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n4} className="newarrival_card" />
              </Link>
              <Card.Text>
              Husband And Wife Travel Partners For Life - Personalized T-Shirt, Summer Travel Gift, Couple Gift
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </div>
      <div className="newarrival" data-aos="fade-up" data-aos-duration="3000">
        <CardGroup className="new">
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n5} className="newarrival_card" />
              </Link>
              <Card.Text>
              No Matter How Big We Get We Will Always Reach For You - Personalized Canvas, Gift For Father's Day
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n6} className="newarrival_card" />
              </Link>
              <Card.Text>
              Pawty In The USA Patriotic Dog - Personalized Garden Flag, Independence Day Gift For Dog Mom Dog Dad Dog Lovers
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n7} className="newarrival_card" />
              </Link>
              <Card.Text>
              Pool Rules What Happens Here Stays Here - Personalized Wood Sign, Pool Sign
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="new_card">
            <Card.Body>
            <Link to="/newarrival">
              <Card.Img variant="top" src={n8} className="newarrival_card" />
              </Link>
              <Card.Text>
              We're Not Alcoholics They Go To Meetings - Personalized Camping Wood Sign, Gift For Camping Lovers
              </Card.Text>
              <Card.Title>45.99$</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
