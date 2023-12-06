let _accessToken = null;
let _nickName = null;
let _refreshToken = null;
let isLoged = false;
if (localStorage.getItem("accessToken") != null) {
  _accessToken = localStorage.getItem("accessToken");
  _nickName = localStorage.getItem("nickname");
  _refreshToken = localStorage.getItem("refreshToken");
  isLoged = true;
}
