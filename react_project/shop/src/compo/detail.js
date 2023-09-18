import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();

  return (
    <div className="container">
      <Col>
        <img
          src={"/image/img1.jpg"}
          style={{ width: "40%", marginTop: "30px" }}
        ></img>
        <h4>{props.place[id].title}</h4>
        <p>{props.place[id].content}</p>
      </Col>
    </div>
  );
}

export default Detail;
