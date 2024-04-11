import Link from "next/link";
import coursesData from "../data/music_courses.json";
import { course } from "./FeaturedCourses";


export function FeaturedCourses() {
  const FeaturedCourses = coursesData.courses.filter((course: course) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900">

      <div>
        <div className="text-center">
          <h2 className=" text-base text-teal-600 font-semibold -tracking-wide uppercase">FEATURE COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white">learn With the Best</p>

        </div>
      </div>
      <div
        className="mt-10">

        <div className=" grid grid-col-1 sm:grid-col-2
        lg:grid-col-3 gap-8 justify-center bg-white">

        </div>


        2</div>
      <div className="mt-20 text-center text-white">
        <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Courses
        </Link>

      </div>

    </div>
  );
}
