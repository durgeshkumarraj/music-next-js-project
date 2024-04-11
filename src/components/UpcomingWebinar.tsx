// 'use client';
// import Link from "next/link"
// import { HoverEffect } from "./ui/card-hover-effect";


// function UpcomingWebinar() {


// function UpcomingWebinars(){

//  const featuredWebinars=[

//             {
//                         title:'UnderStanding Music theory',
//                         description:'Drive deep into the fundamental of music theory and enhance your musical Skills.',

//                         slug: 'Understanding -music-theory',
//                         isFeatured:true
                        

//             },

//             {

//                         title: 'The Art of SongWriting',
//                         description: 'Learn the craft of something from experienced musicians and songwriters',
//                         slug:'the -art-of-songwriting',
//                         isFeatured:true,

//             },
//             {

//                         title: 'The Art of SongWriting',
//                         description: 'Learn the craft of something from experienced musicians and songwriters',
//                         slug:'the -art-of-songwriting',
//                         isFeatured:true,

//             },
//             {

//                         title: 'The Art of SongWriting',
//                         description: 'Learn the craft of something from experienced musicians and songwriters',
//                         slug:'the -art-of-songwriting',
//                         isFeatured:true,

//             },
//             {

//                         title: 'The Art of SongWriting',
//                         description: 'Learn the craft of something from experienced musicians and songwriters',
//                         slug:'the -art-of-songwriting',
//                         isFeatured:true,

//             },
//             {

//                         title: 'The Art of SongWriting',
//                         description: 'Learn the craft of something from experienced musicians and songwriters',
//                         slug:'the -art-of-songwriting',
//                         isFeatured:true

//             },
//  ]
// }





//   return (
//     <div className="p-12 bg-gray-900">
//             <div className="max-w--7xl mx-auto px-4 sm:px-6">

//                         <div className="text-center">
//                                     <h2 className=" text-base text-white font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
//                                     <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-600 sm:text-4xl">Enhance Your Musical Journey</p>
//                         </div>


//                         <div className="mt-10">
                                    
//                         <HoverEffect items={featuredWebinars.map(webinar =>(
//                             {
//                                 title:webinar.title,
//                                 description:webinar.description,
//                                 link:'/'     
//                             }        
//                         ))} 
                        
                        
//                         />
//                                     </div>
//                         <div className="mt-10 text-center">

//                                     <Link href={"/"}
//                                     className=" px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 "
//                                     >
//                                                View All webinars 
//                                     </Link>
//                         </div>
//             </div>
//            </div>
        

    
    
//   )
// }

// export default UpcomingWebinar;





'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinar() {
  const featuredWebinars = [
    {
      title: 'Understanding Music theory',
      description: 'Drive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true
    },
    {
      title: 'The Art of Songwriting',
      description: 'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true
      

    },


    {
            title:' Mastering Yours instrument',
            description:' Advanced technologies to master musical instrument of choice',
            slug:' the-art-music',
            isFeatured:true
    },
    
    {
            title:' music production Essentialas',
            description:' Advanced technologies to master musical instrument of choice ',
            slug:' the-art-of-writing',
            isFeatured:true
    },
    
    {
            title:' Digital music Marketing',
            description:' Advanced technologies to master musical instrument of choice',
            slug:' the-art-of-singing',
            isFeatured:true
},
    
    
    {
            title:' Live Performance technology',
            description:' Advanced technologies to master musical instrument of choice',
            slug:' the-art-of-production',
            isFeatured:true
},
    
    // Add other webinar objects here
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-600 sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
          <HoverEffect 
            items={featuredWebinars.map(webinar => ({
              title: webinar.title,
              description: webinar.description,
              link: `/` // Adjust the link based on your requirements
            }))} 
          />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;

