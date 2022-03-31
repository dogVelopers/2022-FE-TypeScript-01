const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Dogvelopers!</h1>
`;

const content = document.querySelector<HTMLHeadingElement>(".modeState");
const changeDarkModeButton =
  document.querySelector<HTMLButtonElement>(".darkmodeButton");

// 초기 상태 off
let state = "off";
const LS_STATE = "state";

function darkModeOff() {
  if (!content) return;
  if (!changeDarkModeButton) return;

  content.style.backgroundColor = "black";
  content.style.color = "white";
  state = "off";
  content.innerHTML = "state: DarkMode ON";
  changeDarkModeButton.innerHTML = "OFF";
}

function darkModeOn() {
  if (!content) return;
  if (!changeDarkModeButton) return;

  content.style.backgroundColor = "white";
  content.style.color = "black";
  state = "on";
  content.innerHTML = "state: DarkMode OFF";
  changeDarkModeButton.innerHTML = "ON";
}

function init() {
  if (!content) return;
  if (!changeDarkModeButton) return;

  const lsState = localStorage.getItem(LS_STATE);
  const initialState = lsState ? lsState : "default";
  content.innerHTML = initialState;

  // 새로고침 후 유지
  state = initialState;

  lsState === "on" ? darkModeOn() : darkModeOff();

  changeDarkModeButton.addEventListener("click", () => {
    state === "on" ? darkModeOff() : darkModeOn();
    localStorage.setItem(LS_STATE, state);
  });
}

init();
