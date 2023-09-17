/* eslint-disable*/ // warning ment 차단하는 명령어

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// 자식 컴포넌트

function App() {
  let post = "강남 우동 맛집";
  // let [a, b] = useState('남자 코트 추천')
  let [글제목, 글제목변경] = useState([
    "남자 립밤 추천",
    "광주 냉면 맛집",
    "리액트 독학",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  // useState() 괄호 안에는 상태를 표시해줄 수 있는 아무거나 써도 됨
  // false/true , 0,1, 열림,닫힘 등

  // 스위치와 기계의 관계라고 생각하면 되는데, 이곳에 만들어 놓은건 스위치!
  // useState(true) --> 모달창 출력
  // useState(false) --> 모달창 숨김
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  [1, 2, 3].map(function (a) {
    return "1233211";
  });

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>{logo}</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 립밤 추천";
          // state의 두번째 값인 변경될값을()안의 값인 copy로 바꿔주겠다
          // 근데 copy는 위에 선언한것처럼 글제목이고,
          // copy의0번째 인덱스의 값이니까 '남자 립밤 추천'을 가져와서
          // 글수정 버튼을 누르면 '여자 립밤 추천'->'남자 립밤 추천'으로 변경됨 !
          // copy함수 사용시, [...]을 붙여줘야 잘 작동이 됨 !
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      {/* <div className="list"> */}
      {/* state의 두번째 값인 '따봉변경'이라는 바꿔줄 값을 따봉 + 1로 변경해주겠다(새로운 state) */}
      {/* <h4>{글제목[0]}</h4>
        <p>9월 13일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>9월 14일 발행</p>
      </div>

      <div className="list"> */}
      {/* setModal(!modal) 이렇게 사용해도 되는데,
        !는 우측 자료를 반대로 바꿔준다는 의미임
        !true는 출력하면 false, !false는 출력하면 true니까 !modal로 한번에 표현해도 됨! */}
      {/* <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
        <p>9월 14일 발행</p>
      </div> */}

      {/* 아래의 modal class의 코드를 컴포넌트로 만들어놓으면 더 간결하게 불러서 사용할 수 있음! */}

      {/* <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p> 
        <p>상세내용</p>
      </div> */}

      {/* 근데 아래와 같이 배열이 3개만 있으면 괜찮은데, 100개 이상되면 배열을 다 나열해주기가 어려움
      -> 위에서 state로 선언한 배열의 이름을 가져와서 그 이름을 배열 자리에 넣어주면 그 배열의 길이만큼 반복 되어 출력됨
      ex) 글제목.map(function(){
              return (
                
              )
      }) */}

      {/* a는 배열의 수대로 하나씩 돌면서 값을 반환하라고 넣어준 파라미터, i는 반복문 돌 때마다 0부터 1씩 증가하는 정수 */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>9월 14일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      ></input>
      <button
        onClick={() => {
          // array나 object 형태의 state를 변경하고 싶으면 일단 copy부터 하기
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

      {/* html안에 if문을 쓰면 중괄호 문제 때문에 사용이 어렵기 때문에, 대신에 삼항연산자로 조건문을 써준다! */}

      {/* 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
            1 == 2 ? '맞음' : '아님' */}
      {/* state가 false면 <Modal>안보이게, state가 true면 <Modal>보이게 */}

      {/* 기계와 스위치의 관계에서 아래의 삼항연산자는 기계의 역할을 한다 */}
      {modal == true ? (
        <Modal color="pink" title={title} 글제목={글제목} />
      ) : null}

      <button
        onClick={() => {
          setTitle(0);
        }}
      >
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}
      >
        글제목2
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button onClick={()=>{props.글제목변경(['여자 립밤 추천', '광주 냉면 맛집', '리액트 독학'])}}>글수정</button> */}
      <button>글수정</button>
    </div>
  );
}

// 클래스 문법 (예전 문법)
// class Moda12 extends React.Componenet {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "jeng",
//       age: 27,
//     };
//   }
//   render() {
//     return (
//       <div>
//         안녕 {this.state.age}
//         <button
//           onClick={() => {
//             this.setState({ age: 21 });
//           }}
//         >
//           버튼
//         </button>
      </div>
    );
  }
}

export default App;
