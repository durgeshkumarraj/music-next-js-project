'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const MusicSchoolTestimonials = [
  {
    quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
    name: 'Alex Johnson',
    title: 'Guitar student'
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
    name: 'Emma Smith',
    title: 'Piano student'
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
    name: 'Michael Brown',
    title: 'Drum student'
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
    name: 'Michael Brown',
    title: 'Drum student'
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
    name: 'Michael Brown',
    title: 'Drum student'
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
    name: 'Michael Brown',
    title: 'Drum student'
  }
  // Add more testimonials as needed
];

function MusicSchoolTestCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.3] relative flex-col items-center justify-center overflow-hidden] ">
    <h2 className=" text-3xl font-bold text-center mb-8 z-10 text-white">Here Our Harmony:Voice of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
      <InfiniteMovingCards
          items={MusicSchoolTestimonials}
          direction="right"
          speed="slow"
      />
      </div>
    </div>   
    </div>
  )
}

export default MusicSchoolTestCard;
