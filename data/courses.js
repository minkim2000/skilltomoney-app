// 스킬투머니 강좌 정보
// 강좌를 추가·수정할 때는 이 파일만 고치면 화면이 따라 바뀝니다.
//
//   id     : 강좌마다 다른 번호
//   name   : 강좌 이름
//   price  : 수강료 (원)
//   seat   : 정원 (명)
//   booked : 예약 인원 (명)
//   date   : 강좌 날짜 ("YYYY-MM-DD"). 아직 정하지 않았으면 null
//   tags   : 카드에 붙는 짧은 꼬리표 목록

/**
 * @typedef {Object} Course
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {number} seat
 * @property {number} booked
 * @property {string | null} date
 * @property {string[]} tags
 */

/** @type {Course[]} */
export const courses = [
  {
    id: 1,
    name: "AI 자동화",
    price: 35000,
    seat: 8,
    booked: 8,
    date: "2026-12-12",
    tags: ["초보 환영", "2시간"],
  },
  {
    id: 2,
    name: "숏폼 편집",
    price: 45000,
    seat: 6,
    booked: 2,
    date: null, // TODO: 날짜를 정해 채워 주세요
    tags: ["캡컷", "3시간"],
  },
  {
    id: 3,
    name: "엑셀 실무",
    price: 30000,
    seat: 10,
    booked: 7,
    date: null, // TODO: 날짜를 정해 채워 주세요
    tags: ["함수 실습"],
  },
  {
    id: 4,
    name: "스마트스토어",
    price: 40000,
    seat: 6,
    booked: 5,
    date: "2026-11-28",
    tags: ["상세페이지", "창업 준비"],
  },
  {
    id: 5,
    name: "블로그 수익화",
    price: 38000,
    seat: 6,
    booked: 0,
    date: null, // TODO: 날짜를 정해 채워 주세요
    tags: ["애드센스", "글쓰기"],
  },
];
