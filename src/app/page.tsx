import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grids-white/[0.0] ">
     

      <HeroSection  />
      <FeaturedCourses/>
      <WhyChooseUs/>
      
      < MusicSchoolTestimonials/>
      <UpcomingWebinar/> 

     <Instructors/>
     <Footer/>
    
    </main>
  );
}
