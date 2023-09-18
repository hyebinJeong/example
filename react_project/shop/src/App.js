import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
// import img1 from "/image/img1.jpg";
// import img2 from "/image/img2.jpg";
// import img3 from "/image/img3.jpg";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import "./compo/Detail";
import Detail from "./compo/Detail";

function Card(props) {
  return (
    <Col>
      <img
        src={"/image/img" + (props.i + 1) + ".jpg"}
        style={{ width: "80%" }}
      ></img>
      <h4>{props.place.title}</h4>
      <p>{props.place.content}</p>
    </Col>
  );
}

function App() {
  let [place] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar data-bs-theme="dark" className="main-nav">
        <Container>
          <Navbar.Brand href="#home">HB SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
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
        <Route path="/detail/:id" element={<Detail place={place} />}></Route>

        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/about/member" element={<About />}></Route>
        <Route path="/about/location" element={<About />}></Route> */}

        {/* 위 코드를 아래 코드처럼 표현 가능함 -> Nested Routes방식 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버소개란입니다</div>}></Route>
          <Route path="location" element={<About />}></Route>
        </Route>

        {/* <Route path="*" element={<div>없는 페이지입니다</div>}></Route> */}

        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 스틱커피 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <br></br>
      <h4>회사 정보 입니다</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <br></br>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
