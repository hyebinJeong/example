// set initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const styles = e.currentTarget.classList;
    // styles.contains는 stayles안에 contains(포함)되어있니? 라는 뜻
    if (styles.contains("decrease")){
      count--;
    }else if(styles.contains("increse")){
      // count = count + 1;
      count++;
    }else{
      count = 0;
    }

    if(count > 0){
      value.style.color = "green";
    }
    if(count < 0){
      value.style.color = "red";
    }
    if(count === 0){
      value.style.color = "black";
    }
    // textContent(텍스트의 내용)을 바꾼다!
    value.textContent = count;
    

  })
})