let _accessToken = null;
let _nickName = null;
let _refreshToken = null;
let isLoged = false;
if (localStorage.getItem("accessToken") != null) {
  _accessToken = localStorage.getItem("accessToken");
  _nickName = localStorage.getItem("nickName");
  _refreshToken = localStorage.getItem("refreshToken");
  isLoged = true;
}

const authBtn = document.getElementById("auth_btn");
const authBtnContent = document.createElement("div");
authBtnContent.classList.add("nav_button");
if (isLoged) {
  authBtnContent.textContent = "로그아웃";
} else {
  authBtnContent.textContent = "로그인";
}

authBtn.appendChild(authBtnContent);
authBtnContent.addEventListener("click", function () {
  if (isLoged) {
    // 링크가 존재하면 해당 URL로 이동합니다.
    localStorage.removeItem("accessToken");
    localStorage.removeItem("nickName");
    localStorage.removeItem("refreshToken");
    location.reload(true);
  } else {
    window.location.href = "auth/auth.html";
  }
});

const buttons = document.querySelectorAll(".crs-btn");
const prevBtn = buttons.item(0);
const nextBtn = buttons.item(1);
const backgroundWrapper = document.querySelector(".background-wrapper");
let idx = 0;

prevBtn.addEventListener("click", () => {
  PrevCRS(idx);
});

nextBtn.addEventListener("click", () => {
  NextCRS(idx);
});

// 1000 밀리초(1초)마다 logMessage 함수를 호출
let intervalId = setInterval(iterIndex, 3000);

function NextCRS() {
  idx++;
  if (idx > 3) {
    idx = 3;
    return false;
  }
  backgroundWrapper.style.transform = `translate(-${25 * idx}%)`;
  clearInterval(intervalId);
  intervalId = setInterval(iterIndex, 3000);

  return true;
}

function PrevCRS() {
  idx--;
  if (idx < 0) {
    idx = 0;
    return true;
  }
  backgroundWrapper.style.transform = `translate(-${25 * idx}%)`;
  clearInterval(intervalId);
  intervalId = setInterval(iterIndex, 3000);

  return false;
}

let next = true;
function iterIndex() {
  idx % 4;
  if (next) {
    next = NextCRS();
  } else {
    next = PrevCRS();
  }
}
