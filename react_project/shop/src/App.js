import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import "./compo/detail";

function Card(props) {
  return (
    <Col>
      <img
        // *** 왜 안되는지 질문하기
        // src={"/img" + (props.i + 1) + ".jpg"}
        // 이렇게 아래 처럼 적으면 이미지가 뜨는데 왜 위처럼 적으면 안되는지?
        src={img1}
        style={{ width: "80%" }}
      ></img>
      <h4>{props.place.title}</h4>
      <p>{props.place.content}</p>
    </Col>
  );
}

function App() {
  let [place] = useState(data);

  return (
    <div className="App">
      <Navbar data-bs-theme="dark" className="main-nav">
        <Container>
          <Navbar.Brand href="#home">HB SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#info">Info</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link className="link" to="/">
        홈
      </Link>
      <Link className="link" to="/detail">
        상세페이지
      </Link>
      <Link className="link" to="/about">
        어바웃페이지
      </Link>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {place.map((a, i) => {
                    return <Card place={place[i]} i={i}></Card>;
                  })}
                </Row>
              </Container>
            </div>
          }
        ></Route>
        <Route path="/detail" element={<div>상세페이지</div>}></Route>
        <Route path="/about" element={<div>어바웃페이지</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
