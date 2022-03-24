## TypeScript
2022.03.24

타입스크립트는 자바스크립트를 포함하는 범위다.


타입스크립트에서는 타입추론이 이루어진다.
타입추론이란? 타입을 따로 지정하지 않아도 타입이 무엇인지 정의해준다.


### 변수의 type

number, string, boolean, [], {}, undefined, null
any, unknown, never


- any는 무슨 값이든 된다. (문자열, 배열, boolean 등)

- unknown은 무슨 값이 들어오는지 모를 때 사용한다. (any와 동작 방식은 똑같다.)

- never은 절대 어떠한 값도 할당할 수 없다는 뜻이다. (즉, 비어있어야 한다.)


any, unknown, never 세 타입은 잘 사용되지 않는다.


### 배열의 type

타입[] 으로 선언한다.

```typescript
let numbers: number[] | string[] = [1, 2, 3];

interface Person {
    name: string;
    age: number;
}

const p1: Person = {name: "한슬희", age: 123 };

```

interface는 객체만 할당이 가능하다.
Person에 선언한 타입에 맞게 사용하야한다.

```typescript
type Person = {name: string; age: number};
```
type에는 객체 형태만이 아닌 다른 형태도 사용이 가능하다.


```typescript
type ColorType = string | null;
let color: ColorType = "blue";
color = null;
color= 123 // error 발생
```

어떤 값에 대해 type을 선언하고 싶다면 위와 같이 하면 된다.


### interface 확장방법

interface는 확장 결과를 캐싱한다. 즉, 성능적 이점이 있다.

```typescript
interface Person {
    name: string;
}


interface SuwonPerson extends Person{
    addr: string;
}
```
SuwonPerson에는 name이 기본적으로 들어가있다.


### type의 확장 방법

확장을 계산할 때 재귀적으로 탐색하면서 확장한다. 
즉, 인터페이스와 비교 시 성능적으로 부족하다.

```typescript
type Person = {name: string};
type SuwonPerson ={name: number} & Person;
```


### h1 생성, querySelector

```html
<h1 class="title">한슬희</h1>
```

```typescript
const title = document.querySelector(".title");
console.log(title);
```

querySelector는 요소를 가져오는 방식으로 동작을 한다. .title은 class, title은 태그, #title은 id를 뜻한다.


### generic

```typescript
const title = document.querySelector<HTMLHeadingElement>(".title");
console.log(title);

if(title) {
  title.innerHTML = "슬희";
}
```


### button 생성, querySelector, addEventListener

```typescript
const title = document.querySelector<HTMLHeadingElement>(".title");
// camelCase
const upButton = document.querySelector<HTMLButtonElement>(".up");

let num = 0;

// title과 upButton 모두 null일 경우가 없다.
function init() {
  if (!title) return;
  if (!upButton) return;

  // arrow function
  upButton.addEventListener("click", () => {
    num += 1;
    title.innerHTML = num.toString();
  });
}

init();
```

num은 타입추론을 통해 number이라는 타입이 지정되어 있지만 innerHTML은 문자열이기 떄문에 에러가 발생한다. 따라서 toString을 이용해 해결하였다.


### localStorage, get, set


휘발되지 않기 위해 localStorage를 사용한다.
localStorage에는 getItem, setItem이 있다.


```typescript
// title과 upButton모두 null일 경우가 없다.
function init() {
  if (!title) return;
  if (!upButton) return;

  // localStorage에 있는 값을 저장한다. 문자열이거나 값이 없을 수도 있다.
  const lsNum = localStorage.getItem(LS_NUM);

  // localStorage에 값이 있다면 값을 반환하지만 없다면 0을 반환한다.
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
```

---

### 과제
2022.03.31

<b>문제</b>


해당 레포를 이용해 버튼을 누르면 배경색이 black, 폰트색은 white로 하기


<b>제출방법</b>

```terminal
git add .
git commit -m "과제 완료"
git push origin main
```

pull request


title: 과제 완료 - 이름명

