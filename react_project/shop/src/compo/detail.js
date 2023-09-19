import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  let { id } = useParams();
  let 찾은상품 = props.place.find(function (x) {
    return x.id == id;
  });
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");

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
    </div>
  );
}

export default Detail;
