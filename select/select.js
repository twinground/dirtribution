// const baseUrl = `https://everyware.site`;
const baseUrl = `http://13.124.153.160:8080`;
const expoEndpoint = "/api/expos";

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
    localStorage.removeItem("nickname");
    localStorage.removeItem("refreshToken");
    location.reload(true);
  } else {
    window.location.href = "../auth/auth.html";
  }
});

const expoPageURL = [
  "dist/index.html",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
];

function drawUI(loaded_exhibition) {
  let exhibition_list = document.getElementById("exhibitions");
  for (let i = 0; i < loaded_exhibition.content.length; i++) {
    // 각 전시 정보를 가져옵니다.
    let exhibitionData = loaded_exhibition.content[i];

    // div 엘리먼트를 생성합니다.
    let temp = document.createElement("div");
    temp.classList.add("item_container");

    // 이미지 소스를 추가합니다.
    let img = document.createElement("img");
    img.classList.add("item_img");
    img.setAttribute("src", exhibitionData.expoImageUrl);
    temp.appendChild(img);

    // text1을 추가합니다.
    let text1 = document.createElement("div");
    text1.classList.add("item_text_1");
    text1.textContent = exhibitionData.title;
    temp.appendChild(text1);

    // text2를 추가합니다.
    let text2 = document.createElement("div");
    text2.classList.add("item_text_2");
    text2.textContent = exhibitionData.introduction;
    temp.appendChild(text2);

    // 생성한 div 엘리먼트를 exhibitions 컨테이너에 추가합니다.

    exhibition_list.appendChild(temp);

    // 클릭 이벤트 핸들러를 추가합니다.
    temp.addEventListener("click", function () {
      // 클릭 이벤트가 발생했을 때 이벤트 핸들러 실행
      // exhibitionData 배열에서 링크 정보를 가져옵니다.
      let link = expoPageURL[i];
      if (link) {
        // 링크가 존재하면 해당 URL로 이동합니다.
        window.location.href = link;
      }
    });
  }
}

axios
  .get(`${baseUrl + expoEndpoint}`)
  .then((Response) => {
    drawUI(Response.data);
  })
  .catch((Error) => {});

// //no server
// const data = {
//   content: [
//     {
//       id: 1,
//       expoImageUrl: "www.naver.com",
//       title: "Capstone2",
//       introduction: "mycapstone",
//     },
//     {
//       id: 2,
//       expoImageUrl: "www.naver.com",
//       title: "Capstone2",
//       introduction: "mycapstone",
//     },
//   ],
//   pageable: {
//     sort: {
//       empty: true,
//       sorted: false,
//       unsorted: true,
//     },
//     offset: 0,
//     pageNumber: 0,
//     pageSize: 8,
//     paged: true,
//     unpaged: false,
//   },
//   last: true,
//   totalPages: 1,
//   totalElements: 2,
//   number: 0,
//   first: true,
//   sort: {
//     empty: true,
//     sorted: false,
//     unsorted: true,
//   },
//   size: 8,
//   numberOfElements: 2,
//   empty: false,
// };
// drawUI(data);
