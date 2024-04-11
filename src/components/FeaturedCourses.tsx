


'use client';
import coursesData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"


interface Course{
  id:number,
  tittle: string,
  slug:string,
  descriptions:string,
  price:number,
  "instructor":string,
  isFeatured:boolean,
  

}

function FeaturedCourses(){
   const FeaturedCourses=  coursesData.courses.filter((course:Course) =>course.isFeatured)
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

        <div className=" grid grid-col-1 sm:grid-cols-2
        lg:grid-cols-3 gap-8 justify-center"> 
         {FeaturedCourses.map((course:Course)=>(
          <div  key={course.id} className="flex justify-center"> 
          <BackgroundGradient className=" flex flex-col rounded-[22px] bg-white
          dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
            <div className="p-4 sm:p-6 flex flex-col items-center
            text-center flex-grow">
              <p className=" trxt-lg sm:text-xl text-black mt-4
              mb-2 dark:text-neutral-200"> {course.tittle}</p>
              <p
              className=" text-sm text-neutral-600
              dark:text-neutral-400">{ course.descriptions}</p>
              <Link href={`/courses/$course.slug`}>
                   learn More
              </Link>
            </div>
          </BackgroundGradient>
          </div>
         ))}
        </div>

 
        2</div>
       <div className="mt-20 text-center text-white">
        <Link href ={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Courses
        </Link>

      </div>     
     
    </div>
  )
}

export default FeaturedCourses
