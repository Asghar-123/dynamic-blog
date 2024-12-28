import Navbar3 from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar3 />
      <main>
        <section className="relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
            alt="Background image of Link cozy room with plants and shelves"
            className="w-full h-64 object-cover"
            width="1920"
            height="400"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 md:px-12">
            <h1 className="text-4xl font-bold">Home</h1>
            <p className="text-lg">Home &gt; Home</p>
          </div>
        </section>
      </main>

      <div className="px-4 sm:px-8 md:px-12">
        <h1 className="mt-5 font-extrabold text-4xl text-center bg-amber-100">What is Blog?</h1>
        <p className="text-2xl mt-5 bg-amber-50 p-4 sm:p-6 md:p-8">
          A blog is a regularly updated website or web page where individuals or organizations share content in the form of posts. Blogs are typically informal and cover a wide range of topics such as personal experiences, opinions, advice, tutorials, news, or niche subjects like technology, fashion, travel, food, or business.
        </p>
        <h1 className="font-semibold text-4xl mt-5 text-center bg-amber-100">Key Characteristics of Blog</h1>
        <div className="mt-5 text-2xl">
          <ol>
            <div className="mb-5 bg-amber-50 p-4 sm:p-6 md:p-8">
              <li>
                <h1 className="font-semibold">Content Focus:</h1>
                <p>Posts are usually centered around a specific theme or topic.</p>
              </li>
              <li>
                <h1 className="font-semibold">Reverse Chronological Order:</h1>
                <p>Most recent posts appear first.</p>
              </li>
              <li>
                <h1 className="font-semibold">Personal or Professional:</h1>
                <p>Blogs can be personal (like an online diary) or professional (used for branding, marketing, or thought leadership).</p>
              </li>
              <li>
                <h1 className="font-semibold">Interactive:</h1>
                <p>Readers can often leave comments or engage with the content, making it a two-way communication platform.</p>
              </li>
              <li>
                <h1 className="font-semibold">Visual Elements:</h1>
                <p>Blogs often include images, videos, infographics, and other media to make the content engaging.</p>
              </li>
            </div>
          </ol>
        </div>

        <h1 className="font-semibold text-4xl mt-5 text-center bg-amber-100">Types of Blog</h1>
        <div className="mt-5 text-2xl">
          <ul>
            <div className="mb-5 bg-amber-50 p-4 sm:p-6 md:p-8">
              <li>
                <h1 className="font-semibold">Personal Blogs:</h1>
                <p>Focused on the blogger's personal life or interests.</p>
              </li>

              <li>
                <h1 className="font-semibold">Business Blogs:</h1>
                <p>Used by companies to promote their products or services and provide value to their audience.</p>
              </li>

              <li>
                <h1 className="font-semibold">Niche Blogs:</h1>
                <p>Focus on specific topics, such as fitness, photography, or parenting.</p>
              </li>

              <li>
                <h1 className="font-semibold">News Blogs:</h1>
                <p>Cover current events and updates in various industries.</p>
              </li>
            </div>
          </ul>
        </div>

        <h1 className="font-semibold text-4xl mt-5 text-center bg-amber-100">Purpose of Blogging</h1>

        <div className="mt-5 text-2xl">
          <ul>
            <div className="mb-5 bg-amber-50 p-4 sm:p-6 md:p-8">
              <li>
                <p>Share knowledge or expertise.</p>
              </li>

              <li>
                <p>Build an online presence or personal brand.</p>
              </li>

              <li>
                <p>Connect with like-minded individuals or communities.</p>
              </li>

              <li>
                <p>Drive traffic to a website for business or monetization.</p>
              </li>
            </div>
          </ul>
        </div>

        <div className="text-center mt-5">
          <h2 className="font-semibold text-4xl bg-amber-100">See our blogs by clicking below</h2>
          <Link href="/blog">
            <button className="bg-amber-50 font-semibold text-2xl mt-5 p-3 sm:p-4 md:p-5 mx-auto block">
              Click Here
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// import Navbar3 from "@/components/navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <Navbar3/>
//       <main>
//         <section className="relative">
//           <img
//             src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
//             alt="Background image of Link cozy room with plants and shelves"
//             className="w-full h-64 object-cover"
//             width="1920"
//             height="400"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
//             <h1 className="text-4xl font-bold">Home</h1>
//             <p className="text-lg">Home &gt; Home</p>
//           </div>
//         </section>
//         </main>
//         <div>
//         <h1 className="mt-5 font-extrabold text-4xl text-center bg-amber-100">What is Blog?</h1>
//         <p className="text-2xl mt-5 ml-8 mr-8 bg-amber-50">A blog is a regularly updated website or web page where individuals or organizations share content in the form of posts. Blogs are typically informal and cover a wide range of topics such as personal experiences, opinions, advice, tutorials, news, or niche subjects like technology, fashion, travel, food, or business.</p>
//         <h1 className="font-semibold text-4xl mt-5 text-center bg-amber-100">Key Characteristics of Blog</h1>
//         <div className="mt-5 text-2xl ml-8 mr-8">
//         <ol>
//           <div className="mb-5 bg-amber-50">
//           <li>
//             <h1 className="font-semibold" >Content Focus:</h1><p>Posts are usually centered around a specific theme or topic.</p>
//           </li>
//           <li>
//             <h1 className="font-semibold" >Reverse Chronological Order:</h1><p>Most recent posts appear first.</p>
//           </li>
//           <li>
//             <h1 className="font-semibold" >Personal or Professional:</h1><p>Blogs can be personal (like an online diary) or professional (used for branding, marketing, or thought leadership)..</p>
//           </li>
//           <li>
//             <h1 className="font-semibold" >Interactive:</h1><p> Readers can often leave comments or engage with the content, making it a two-way communication platform.</p>
//           </li>
//           <li>
//             <h1 className="font-semibold" >Visual Elements:</h1><p>Blogs often include images, videos, infographics, and other media to make the content engaging.</p>
//           </li>
//           </div>
//         </ol>
//         </div>

//         <h1 className="font-semibold text-4xl mt-5 text-center bg-amber-100">Types of Blog</h1>
//         <div className="mt-5 text-2xl ml-8 mr-8">
//           <ul>
//             <div className="mb-5 bg-amber-50">
//             <li>
//               <h1 className="font-semibold">Personal Blogs:</h1><p>Focused on the blogger's personal life or interests.</p>
//             </li>

//             <li>
//               <h1 className="font-semibold">Business Blogs:</h1><p>Used by companies to promote their products or services and provide value to their audience.</p>
//             </li>

//             <li>
//               <h1 className="font-semibold">Niche Blogs:</h1><p>Focus on specific topics, such as fitness, photography, or parenting.</p>
//             </li>

//             <li>
//               <h1 className="font-semibold">News Blogs:</h1><p>Cover current events and updates in various industries.</p>
//             </li>
//             </div>
//           </ul>
//           </div>

//           <h1 className="font-semibold text-4xl mt-5 text-center bg-amber-100">Purpose of Blogging</h1>

//           <div className="mt-5 text-2xl ml-8 mr-8">
//             <ul>
//               <div className="mb-5 bg-amber-50">
//                 <li>
//                   <p>Share knowledge or expertise.</p>
//                 </li>

//                 <li>
//                   <p>Build an online presence or personal brand.</p>
//                 </li>

//                 <li>
//                   <p>Connect with like-minded individuals or communities.</p>
//                 </li>

//                 <li>
//                   <p>Drive traffic to a website for business or monetization.</p>
//                 </li>

//               </div>
//             </ul>
//           </div>

//           <div>
//             <h2 className="font-semibold text-4xl mt-5 text-center bg-amber-100">See our blogs by clicking below</h2>
//             <Link href="/blog"><button className="bg-amber-50 font-semibold text-2xl mt-5 text-center ml-[700px] mb-5">
//               Click Here
//             </button>
//             </Link>
//             </div>

//           <Footer/>


//         </div>
//     </div>
//   );
// }
