import "./index.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Dogvelopers!</h1>
`;

// localStorage
// setItem('key', 'value') = 항목 추가
// getItem('key') = 항목 읽기
// removeItem('key') = 항목 제거
// localStroage.clear() = 로컬 스토리지 전체 제거

// 1. 웹에서 다크모드가 활성화 되어 있는지 로컬 스토리지를 통해 getItem 시도
// 2. 활성화가 되어 있지 않다면 버튼을 누를 시 다크모드 활성화 

  const darkButton = document.querySelector<HTMLButtonElement>('.darkModeButton');
  let sayDayAndNight = document.querySelector('.sayDayAndNight');

  let darkMode = localStorage.getItem('darkMode');

  function mode(){
    // NULL이면 반환
    if(!darkButton) return;
   
    
    const turnOn = () => {
      // body에 dark 클래스 추가
      document.body.classList.add('dark');
      // 로컬스토리지에 (key=darkmode, value='on') 항목 추가
      localStorage.setItem('darkMode', 'on');
      if(!sayDayAndNight) return;
        sayDayAndNight.innerHTML=`&#9789;`;
    }
    const turnOff = () => {
      // body에 dark 클래스 제거
      document.body.classList.remove('dark');
      // 로컬스토리지에 (key=darkmode, value='') 항목 추가(value는 공백으로)
      localStorage.setItem('darkMode', '');
      if(!sayDayAndNight) return;
        sayDayAndNight.innerHTML=`&#9788;`;
    }

    // 로컬스토리지에 다크모드가 on 이라면 turnOn() 실행
    if(darkMode == 'on') turnOn();

    darkButton.addEventListener('click', ()=>{
      // 로컬스토리지에 있는 다크모드 불러오기(클릭 전 확인)
      darkMode = localStorage.getItem('darkMode');
      // 로컬스토리지에 있는 key = darkmode가 value의 값이 'on'이 아니라면
      if(darkMode != 'on'){
        turnOn();
        console.log('다크모드');
        
      // 로컬스토리지에 있는 key = darkmode가 value의 값이 'on'이 맞다면 
      } else {
        turnOff();
        console.log('다크모드 취소');
        
      }
    })

  }

  mode();

const title = document.querySelector<HTMLHeadElement>('.title');
const upButton = document.querySelector<HTMLButtonElement>('.up');

let num = 0;
const LS_NUM = "num";

function init() {
  if (!title) return;
  if (!upButton) return;

  const lsNum = localStorage.getItem(LS_NUM);
  const initalNum = lsNum ? lsNum : "0";
  title.innerHTML = initalNum;
  num = parseInt(initalNum);

  // arrow function
  upButton.addEventListener("click", () => {
    num += 1;
    title.innerHTML = num.toString();
    localStorage.setItem(LS_NUM, num.toString());
  });
}

init();