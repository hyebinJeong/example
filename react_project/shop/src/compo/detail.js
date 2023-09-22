import { useContext, useEffect, useState } from "react";
import { Col, Nav } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Context1 } from "./../App.js";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
  margin-top: 30px;
  border-radius: 20px;
  border-style: 0.1px solid grey;
`;

// let NewBtn = styled.button(YellowBtn)`
//   커스터마이징 할 내용`

let Box = styled.div`
  background: grey;
  padding: 20pxl;
`;

function Detail(props) {
  // 보관함 해체해줌
  let { 재고 } = useContext(Context1);

  let { id } = useParams();
  let 찾은상품 = props.place.find(function (x) {
    return x.id == id;
  });
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");

  //useState()안에는 숫자형, 문자형 둘다 가능하지만,
  // 3개의 탭을 0,1,2로 표현해주면 좋을 것 같아서 숫자 사용!
  let [탭, 탭변경] = useState(0);

  useEffect(() => {
    // 타이머 주는 법 : setTimeout함수는 밀리세컨드 단위
    // 1000 = 1초
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      // 이 곳은 useEffect 동작 전에 실행하고싶은 코드 작성하는 곳!
      // 보통 타이머 함수 실행 전 '기존 타이머는 깔끔하게 정리해주세요 ~'라는 의미로 사용함
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      window.alert("그러지마세요");
    }
  }, [num]);

  return (
    <div className="container">
      <Col>
        <br></br>
        {alert == true ? (
          <div className="alert alert-warning">2초 이내 구매시 할인</div>
        ) : null}
        <img
          src={"/image/img1.jpg"}
          style={{ width: "40%", marginTop: "30px" }}
        ></img>
        <div>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
            placeholder="수량입력란"
          />
          <h4>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
        </div>
      </Col>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="/link-1" onClick={() => 탭변경(0)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => 탭변경(1)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => 탭변경(2)}>
            버튼3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}></TabContent>
    </div>
  );
}

// function TabContent({ 탭 }) {
//   if (탭 == 0) {
//     return <div>내용0</div>;
//   }
//   if (탭 == 1) {
//     return <div>내용1</div>;
//   }
//   if (탭 == 2) {
//     return <div>내용2</div>;
//   }
// }

// if문 없이 쓰는 방법
function TabContent({ 탭 }) {
  // 탭이라는게 변경될 때마다 안의 코드를 실행해줌
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [탭]);

  return (
    // start 다음 띄어쓰기 꼭 해주기 (클래스명 두개 주는거니까)
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
