"use client";

// 강좌 카드 목록. 체크 상자를 누르면 바로 화면이 바뀌어야 해서 브라우저에서 동작하는 컴포넌트로 만들었습니다.
import { useState } from "react";
import type { Course } from "@/data/courses";

// "2026-11-28" → "11월 28일 (토)"
function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  const weekday = "일월화수목금토"[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  return `${month}월 ${day}일 (${weekday})`;
}

export default function CourseList({ courses }: { courses: Course[] }) {
  // 체크 상자 상태: true면 예약 가능한 강좌만 보기
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // 실습실 코드와 같은 규칙: 체크했고(only_open) 남은 자리가 0이면 건너뜀(continue), 아니면 보여 줌
  const shownCourses = courses.filter((course) => {
    const left = course.seat - course.booked;
    if (onlyAvailable && left === 0) return false;
    return true;
  });

  return (
    <section className="mt-12">
      <label className="inline-flex cursor-pointer items-center gap-2.5 select-none">
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(e) => setOnlyAvailable(e.target.checked)}
          className="h-5 w-5 cursor-pointer accent-gold"
        />
        <span className="text-base font-medium">예약 가능한 강좌만 보기</span>
      </label>

      <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* 반복문: 보여 줄 강좌를 하나씩 꺼내 카드 하나씩 그립니다. */}
        {shownCourses.map((course) => {
          // 남은 좌석 = 정원 - 예약
          const remaining = course.seat - course.booked;
          const isClosed = remaining <= 0; // 0석이면 마감
          const isAlmostClosed = remaining === 1 || remaining === 2; // 1~2석이면 마감 임박

          return (
            <li
              key={course.id}
              className="flex flex-col rounded-2xl border border-gold/40 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold">{course.name}</h2>
                {isClosed && (
                  <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white/70">
                    마감
                  </span>
                )}
                {isAlmostClosed && (
                  <span className="shrink-0 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    마감 임박
                  </span>
                )}
              </div>
              {course.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gold/50 px-2.5 py-0.5 text-xs font-semibold text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {course.date && (
                <p className="mt-3 text-sm text-white/85">
                  {formatDate(course.date)}
                </p>
              )}
              <p className="mt-2 text-2xl font-extrabold text-gold">
                {course.price.toLocaleString("ko-KR")}원
              </p>
              <p className="mt-3 text-sm text-white/85">
                남은 좌석 {remaining}석 / 정원 {course.seat}명
              </p>
              {isClosed ? (
                <button
                  type="button"
                  disabled
                  className="mt-6 cursor-not-allowed rounded-xl bg-gray-500/60 px-5 py-3 font-semibold text-white/70"
                >
                  예약 마감
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-6 rounded-xl bg-gold px-5 py-3 font-semibold text-background transition hover:brightness-110 active:scale-95"
                >
                  예약하기
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {shownCourses.length === 0 && (
        <p className="mt-5 rounded-2xl border border-dashed border-white/20 p-8 text-center text-white/70">
          지금 예약할 수 있는 강좌가 없습니다.
        </p>
      )}
    </section>
  );
}
