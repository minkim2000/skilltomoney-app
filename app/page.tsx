// 강좌 정보는 data/courses.js에, 카드 목록과 체크 상자는 app/CourseList.tsx에 있습니다.
import { courses } from "@/data/courses";
import CourseList from "./CourseList";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          스킬투머니
        </h1>
        <p className="mt-4 text-lg text-white/85 break-keep sm:text-xl">
          배운 기술이 돈이 되는 원데이 클래스
        </p>
      </header>

      <CourseList courses={courses} />
    </main>
  );
}
