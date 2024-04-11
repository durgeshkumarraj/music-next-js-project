import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";



function HeroSection() {
  return (
    <div
    className=" h-auto md:-[40rem] w-full rounded-md flex flex-col items-center 
     justify-center  relative overflow-hidden mx-auto py-10 md:py-0"
    >

<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />  
      <div className=" p-4 relative z-10 w-full text-center">

       <h1 className="mt-20 md:mt-80 text-4txl md:text-7xl
       font-bold bg-clip-text text-transparent
       bg-gradient-to-b from-neutral-50 to-neutral-500"> Master the art of music </h1>

        <p 
        className=" mt-4 font-normal text-base md:text-lg
         text-natural=300 max-w-lg mx-auto text-white"> drive into our comprehensive music courses and 
          transform your  musical journey today . whether you're 
          begginer or looking to refine your skills , join us to unlock your true potential
        </p>
        <div className="mt-4">
        <Link href={"/courses"}>
          <Button borderRadius="1.75rem" className=" bg-white
          dark:bg-black text-black dark:text-white
          border-neutral-200 dark:border-slate-800">
          Explore courses       
          </Button>
          </Link>
        </div>
        </div>
      </div> 
           
  ) 
}

export default HeroSection












