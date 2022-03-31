// 2022.03.31 까지 과제
// 해당 레포를 이용해 버튼을 누르면 배경색 black, 폰트색 white로 하기

import "./index.css";

const body = document.querySelector("body")!; // 느낌표로 타입을 보장한다.
const THEME_LS = "theme";

const LIGHT_THEME = "brightMode";
const DARK_THEME = "darkMode";

const CHANGE_BUTTON = ".changeButton";


function getLSTheme() {
  const currentTheme = localStorage.getItem(THEME_LS);

  // 만약 currentTheme이 LIGHT_THEME도 아니고 DARK_THEME도 아니라면
  if (currentTheme !== LIGHT_THEME && currentTheme !== DARK_THEME) { 
    localStorage.setItem(THEME_LS, LIGHT_THEME); // LIGHT_THEME을 THEME_LS에 저장하고 반환한다.
    return LIGHT_THEME;
  }
  return currentTheme; // currentTheme이 LIGHT_THEME이거나 DARK_THEME라면 currentTheme을 반환한다.
}

function changeTheme() {
  const currentTheme = getLSTheme();
  const nextTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME; // 현재 theme이 LIGHT_THEME라면 DARK_THEME를, 아니라면 LIGHT_THEME

  body.classList.remove(currentTheme); // 현재의 theme을 삭제한다.
  body.classList.add(nextTheme); // nextTheme을 추가한다.

  localStorage.setItem(THEME_LS, nextTheme); // nextTheme을 THEME_LS에 저장한다.
}

function init() {
  const currentTheme = getLSTheme();
  body.classList.add(currentTheme);

  const themeBtn = document.querySelector<HTMLButtonElement>(CHANGE_BUTTON); // changeButton 가져온다.
  themeBtn?.addEventListener("click", changeTheme); // themeBtn을 클릭 시 changeTheme 실행
}

init();
