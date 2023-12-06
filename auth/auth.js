let _accessToken = null;
let _nickName = null;
let _refreshToken = null;
let isLoged = false;
if (localStorage.getItem("accessToken") != null) {
  _accessToken = localStorage.getItem("accessToken");
  _nickName = localStorage.getItem("nickName");
  _refreshToken = localStorage.getItem("refreshToken");
  isLoged = true;
  alert("이미 로그인 되어있습니다.");
  window.location.href = "../index.html";
}

// const baseUrl = `https://everyware.site`;
const baseUrl = `http://13.124.153.160:8080`;
const loginEndpoint = `${baseUrl}/login`;
const signUpEndpoint = `${baseUrl}/sign-up`;

let container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);
//==================================================//
// 0 : i.bx.bxs-user      sign up username
// 1 : i.bx.bx-mail-send  sign up nickname
// 2 : i.bx.bxs-lock-alt  sign up password
// 3 : i.bx.bxs-lock-alt  sign up confrim password
// 4 : i.bx.bxs-user      sign in username
// 5 : i.bx.bxs-lock-alt  sign in password
//==================================================//
const textField = document.querySelectorAll(".input-group");
const sign_up_username = textField.item(0).children[1];
const sign_up_nickname = textField.item(1).children[1];
const sign_up_password = textField.item(2).children[1];
const sign_up_confrim_password = textField.item(3).children[1];
const sign_in_username = textField.item(4).children[1];
const sign_in_password = textField.item(5).children[1];

const btn_sign_in = document.getElementById("sign-in-btn");
btn_sign_in.addEventListener("click", function () {
  SignIn();
});

const btn_sign_up = document.getElementById("sign-up-btn");
btn_sign_up.addEventListener("click", function () {
  SignUp();
});

function SignIn() {
  const userObject = {
    email: sign_in_username.value,
    password: sign_in_password.value,
  };

  axios
    .post(loginEndpoint, userObject)
    .then((Response) => {
      switch (Response.data.state) {
        case 200: {
          alert(`${Response.data.message}`);
          _accessToken = Response.data.data.tokenInfo.accessToken;
          _refreshToken = Response.data.data.tokenInfo.refreshToken;
          //Response.data.data.tokenInfo.refreshTokenExpirationTime;
          _nickName = Response.data.data.nickName;
          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem("accessToken", _accessToken);
          localStorage.setItem("nickName", _nickName);
          localStorage.setItem("refreshToken", _refreshToken);

          window.location.href = "../index.html";
          //로그인 화면으로 리다이렉트 -> 그냥 옮기면댐
          break;
        }
        case 400: {
          let temp = "";
          for (let i = 0; i < Response.data.error.length; i++) {
            temp += Response.data.error[i].message;
            temp += "\n";
          }
          alert(temp);
          break;
        }
        default:
          let temp = "";
          for (let i = 0; i < Response.data.error.length; i++) {
            temp += Response.data.error[i].message;
            temp += "\n";
          }
          alert(temp);
          break;
      }
    })
    .catch((Error) => {
      alert("서버 오류");
    });
}

function SignUp() {
  const body = {
    email: sign_up_username.value,
    password: sign_up_password.value,
    nickname: sign_up_nickname.value,
  };

  if (sign_up_password.value != sign_up_confrim_password.value) {
    sign_up_password.value = "";
    sign_up_confrim_password.value = "";
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    return;
  }

  axios
    .post(signUpEndpoint, body)
    .then((Response) => {
      switch (Response.data.state) {
        case 200: {
          alert("회원 가입에 성공하셨습니다.");
          location.reload(true);
          //로그인 화면으로 리다이렉트 -> 그냥 옮기면댐
          break;
        }
        case 400: {
          let temp = "";
          for (let i = 0; i < Response.data.error.length; i++) {
            temp += Response.data.error[i].message;
            temp += "\n";
          }
          alert(temp);
          break;
        }
        default:
          let temp = "";
          for (let i = 0; i < Response.data.error.length; i++) {
            temp += Response.data.error[i].message;
            temp += "\n";
          }
          alert(temp);
          break;
      }
      //필드 비우기
      sign_up_username.value = "";
      sign_up_password.value = "";
      sign_up_nickname.value = "";
      sign_up_confrim_password.value = "";
    })
    .catch((Error) => {
      alert("error");
    });
}

// 저장된 토큰을 가져오는 함수
// function getJwtToken() {
//   return localStorage.getItem("jwtToken");
// }

// axios
//   .get(`${baseUrl + expoEndpoint}`)
//   .then((Response) => {
//     drawUI(Response.data);
//   })
//   .catch((Error) => {
//     console.log(Error);
//   });
