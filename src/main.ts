const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Dogvelopers!</h1>
`;

// 타입 추론
// number, string, boolean, [], {}, undefined, null
// any, unknown, never
// 변수 type

// let numbers: number[] | string[] = [1, 2, 3];
// numbers = ["1", "2"];
// 타입[]

// 배열 type

// interface Person {
//   name: string;
//   age: number;
// }

// const p1: Person = { name: "ohs", age: 123 };

// type Person = { name: string; age: number };
// const p2: Person = { name: "ohs", age: 123 };

// type ColorType = string | null;
// let color: ColorType = "asdf";
// color = null;
// color = 123;

// interface Person {
//   name: string;
// }

// // 인터페이스 확장방법
// // 인터페이스는 확장 결과를 캐싱한다 === 성능적 이점이 있다
// interface SuwonPerson extends Person {
//   addr: string;
// }

// const p2: SuwonPerson = {};

// 타입 확장 방법
// 확장을 계산할 때 재귀적으로 탐색하면서 확장한다 === 인터페이스와 비교시 성능적으로 부족하다
// type Person = { name: string };
// type SuwonPerson = { name: number } & Person;

// interface, type

// h1 생성, querySelector

// generic
// const title = document.querySelector<HTMLHeadingElement>(".title");
// console.log(title);

// if (title) {
//   title.innerHTML = "asdf";
// }

const title = document.querySelector<HTMLHeadingElement>(".title");
// camelCase
const upButton = document.querySelector<HTMLButtonElement>(".up");

let num = 0;

const LS_NUM = "num";

// localStorage.getItem
// localStorage.setItem

function init() {
  if (!title) return;
  if (!upButton) return;

  const lsNum = localStorage.getItem(LS_NUM);
  const initialNum = lsNum ? lsNum : "0";
  title.innerHTML = initialNum;
  num = parseInt(initialNum);

  // arrow function
  upButton.addEventListener("click", () => {
    num += 1;
    title.innerHTML = num.toString();
    localStorage.setItem(LS_NUM, num.toString());
  });
}

init();

// 다음주까지 과제
// 해당 레포를 이용해 버튼을 누르면 배경색 black, 폰트색 white로 하기
