loaded_exhibition = [
  [
    "../asset/캡스톤 멘토링.jpeg",
    "캡스톤 멘토링 첫날!",
    "식사 후 카페에서 멘토링 진행중!!",
    "exhibition/exhibition.html",
  ],
  ["img_source", "text1", "text2", "dist/index.html"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
  ["img_source", "text1", "text2", "link"],
];

let exhibition_list = document.getElementById("exhibitions");

for (let i = 0; i < loaded_exhibition.length; i++) {
  // 각 전시 정보를 가져옵니다.
  let exhibitionData = loaded_exhibition[i];

  // div 엘리먼트를 생성합니다.
  let temp = document.createElement("div");
  temp.classList.add("item_container");

  // 이미지 소스를 추가합니다.
  let img = document.createElement("img");
  img.classList.add("item_img");
  img.setAttribute("src", exhibitionData[0]);
  temp.appendChild(img);

  // text1을 추가합니다.
  let text1 = document.createElement("div");
  text1.classList.add("item_text_1");
  text1.textContent = exhibitionData[1];
  temp.appendChild(text1);

  // text2를 추가합니다.
  let text2 = document.createElement("div");
  text2.classList.add("item_text_2");
  text2.textContent = exhibitionData[2];
  temp.appendChild(text2);

  // 생성한 div 엘리먼트를 exhibitions 컨테이너에 추가합니다.

  exhibition_list.appendChild(temp);

  // 클릭 이벤트 핸들러를 추가합니다.
  temp.addEventListener("click", function () {
    // 클릭 이벤트가 발생했을 때 이벤트 핸들러 실행
    // exhibitionData 배열에서 링크 정보를 가져옵니다.
    let link = exhibitionData[3];
    if (link) {
      // 링크가 존재하면 해당 URL로 이동합니다.
      window.location.href = link;
    }
  });
}
