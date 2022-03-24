const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Dogvelopers!</h1>
`;

//타입 추론
//유니온타입 |을 사용해서 두개 다 가능하게 하는거
//변수타입
// number, string, boolean, [], {}, undefined, null
//any, unknown, never 있어 근데 잘 사용하지 않아...

// 배열타입 []
//numbers,

//인터페이스 타입
// 인터페이스 확장방법
//  인터페이스는 확장 결과를 캐싱한다 === 성능적 이점이 있다
// interface Person {
//   name: string;
//   age: number;
// }
// const p1: Person = {
//   name: "string",
//   age: 23,
// };
// 타입 확장 방법
// 확장을 계산할 때 재귀적으로 탐색하면서 확정한다 === 인터페이스와 비교시 성능적으로 부족하다
// console.log(title);

// if (title) {
//   title.innerHTML = "asdf";
// }

//generic
const title = document.querySelector<HTMLHeadingElement>(".title");

const body = document.querySelector("body");
const colorButton = document.querySelector<HTMLButtonElement>(".colorChange");
const LS_COLOR = "color";
let color = "white";
function whiteToDark() {
  if (!body) return;
  if (!colorButton) return;
  body.style.backgroundColor = "black";
  body.style.color = "white";
  color = "dark";
  colorButton.innerHTML = "changeToWhiteMode";
}
function darkToWhite() {
  if (!body) return;
  if (!colorButton) return;
  body.style.backgroundColor = "white";
  body.style.color = "black";
  color = "white";
  colorButton.innerHTML = "changeToDarkMode";
}
function init() {
  if (!title) return;
  if (!colorButton) return;

  const lsColor = localStorage.getItem(LS_COLOR);
  lsColor === "dark" ? whiteToDark() : darkToWhite();
  colorButton.addEventListener("click", () => {
    color === "dark" ? darkToWhite() : whiteToDark();
    localStorage.setItem(LS_COLOR, color);
  });
}
init();
//한가지 함수에서 한가지 역할만 하기
