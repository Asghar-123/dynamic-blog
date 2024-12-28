
import Footer from "@/components/Footer";
import Navbar3 from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";


export default function Blog(){
    return(
        <div>
            <Navbar3/>
            
            <main>
        <section className="relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
            alt="Background image of Link cozy room with plants and shelves"
            className="w-full h-64 object-cover"
            width="1920"
            height="400"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="text-lg">Home &gt; Blog</p>
          </div>
        </section>
        </main>
            <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Blog Page</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="container mx-auto px-4 py-8 mt-11">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Blog Post 1 */}
        <div className="mb-8">
          <Image
            alt="Laptop on Link wooden table with Link notebook, pen, glass of water, and Link phone"
            className="w-full rounded-lg"
            height={400}
            src="/Rectangle 68.png"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i className="fas fa-calendar-alt mx-4"></i>
            14 Oct 2022
            <i className="fas fa-folder-open"></i>
            Wood
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Going all-in with millennial design
          </h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>
        {/* Blog Post 2 */}
        <div className="mb-8">
          <Image
            alt="Person writing on Link planner with Link hat on the table"
            className="w-full rounded-lg"
            height={400}
            src="/Rectangle 69.png"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i className="fas fa-calendar-alt mx-4"></i>
            14 Oct 2022
            <i className="fas fa-folder-open"></i>
            Handmade
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Exploring new ways of decorating
          </h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>
        {/* Blog Post 3 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/Rectangle 70.png"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            14 Oct 2022
            <i className="fas fa-folder-open"></i>
            Wood 
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Handmade pieces that took time to make
          </h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>

        {/* Blog Post 4 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/energy.jpg"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            27 Dec 2024
            
          </div>
          <h2 className="text-2xl font-bold mt-2">
           Renewable Energy
          </h2>
          <p className="text-gray-700 mt-2">
          Renewable energy is derived from natural resources that are replenished over time, such as sunlight, wind, water, and geothermal heat. Unlike fossil fuels, renewable energy sources produce little to no greenhouse gas emissions, making them essential in combating climate change and reducing environmental pollution. Technologies like solar panels, wind turbines, and hydroelectric systems harness these resources to generate electricity sustainably. As the global demand for clean energy grows, renewable energy is playing Link vital role in transitioning toward Link more sustainable and resilient energy future.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>

        {/* Blog Post 5 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/non energy.jpg"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            27 Dec 2024
            
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Non Renewable Energy
          </h2>
          <p className="text-gray-700 mt-2">
          Non-renewable energy comes from resources that cannot be replenished within Link human timescale, such as coal, oil, natural gas, and uranium. These resources are finite and take millions of years to form. While they are widely used due to their high energy output and established infrastructure, their extraction and use contribute significantly to environmental issues, including greenhouse gas emissions and pollution. As supplies diminish and environmental concerns grow, transitioning to renewable energy sources becomes increasingly important.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>

        {/* Blog Post 6 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/OIP.jpg"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            27 Dec 2024
           
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Differences Between Renewable and Non Renewable Energy
          </h2>
          <p className="text-gray-700 mt-2">
          Renewable energy comes from natural sources that replenish themselves over time, such as sunlight, wind, and water. These sources are sustainable and have minimal environmental impact. Non-renewable energy, on the other hand, is derived from finite resources like coal, oil, and natural gas. These sources take millions of years to form and can be depleted, often causing pollution and contributing to climate change when used. The key difference lies in availability and environmental impact: renewable energy is sustainable, while non-renewable energy is limited and less eco-friendly.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>

        {/* Blog Post 7 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/solar.jpg"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            27 Dec 2024
            
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Solar Energy
          </h2>
          <p className="text-gray-700 mt-2">
          Solar energy is Link renewable and sustainable source of power harnessed from the sun's rays. Through technologies like solar panels and photovoltaic cells, sunlight is converted into electricity or used for heating. It offers Link clean alternative to fossil fuels, reducing greenhouse gas emissions and promoting energy independence. Solar energy is abundant, widely accessible, and increasingly cost-effective, making it Link vital component in combating climate change and transitioning to Link greener future.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>

        {/* Blog Post 8 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/wind.jpg"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            27 Dec 2024
            
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Wind Energy
          </h2>
          <p className="text-gray-700 mt-2">
          Wind energy is Link renewable and sustainable source of power harnessed from the movement of air. Wind turbines convert kinetic energy from the wind into electricity without emitting greenhouse gases, making it an eco-friendly alternative to fossil fuels. It is widely used in both onshore and offshore settings, contributing to global efforts to combat climate change. As technology advances, wind energy continues to become more efficient and cost-effective, playing Link crucial role in the transition to cleaner energy systems.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>

        {/* Blog Post 9 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/R.jpg"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            27 Dec 2024
            
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Fossil Fuels
          </h2>
          <p className="text-gray-700 mt-2">
          Fossil fuels, including coal, oil, and natural gas, are energy sources formed over millions of years from the remains of plants and animals. These fuels are widely used for electricity generation, transportation, and industrial processes due to their high energy content and relative abundance. However, burning fossil fuels releases greenhouse gases like carbon dioxide, contributing significantly to climate change and air pollution. As Link result, there is growing interest in transitioning to renewable energy sources to reduce environmental impacts and ensure long-term energy sustainability.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>

        {/* Blog Post 10 */}
        <div className="mb-8">
          <Image
            alt="Person writing in Link notebook with Link laptop, coffee, and Link book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/nuclear.jpg"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i  className="fas fa-calendar-alt mx-4"></i>
            27 Oct 2024
            
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Nuclear Energy
          </h2>
          <p className="text-gray-700 mt-2">
          Nuclear energy is Link powerful and efficient form of energy produced through nuclear fission, where the nuclei of atoms are split to release vast amounts of energy. This process generates electricity without emitting greenhouse gases, making it Link cleaner alternative to fossil fuels. Nuclear power plants provide Link reliable energy source capable of meeting large-scale demands. However, concerns about radioactive waste management, high costs, and potential safety risks, such as nuclear accidents, highlight the need for careful regulation and innovation in the field. Despite these challenges, nuclear energy remains Link critical component of the global energy mix in the transition toward sustainable power.
          </p>
          <Link className="text-blue-500 mt-2 inline-block" href="/Read">
            Read more
          </Link>
        </div>
        
      </div>
      <div>
        {/* Search */}
        <div className="mb-8">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Search"
            type="text"
          />
        </div>
        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="text-gray-700">
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Crafts</span>
              <span>2</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Design</span>
              <span>8</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Handmade</span>
              <span>7</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Interior</span>
              <span>1</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Wood</span>
              <span>6</span>
            </li>
          </ul>
        </div>
        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <ul className="text-gray-700">
            <li className="flex items-center mb-4">
              <Image
                alt="Thumbnail of Link laptop on Link wooden table"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 71.png"
                width={60}
              />
              <div>
                <Link className="text-blue-500" href="#">
                  Going all-in with millennial design
                </Link>
                <p className="text-sm text-gray-500">01 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <Image
                alt="Thumbnail of Link person writing on Link planner"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 72.png"
                width={60}
              />
              <div>
                <Link className="text-blue-500" href="#">
                  Exploring new ways of decorating
                </Link>
                <p className="text-sm text-gray-500">31 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <Image
                alt="Thumbnail of Link person writing in Link notebook"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 73.png"
                width={60}
              />
              <div>
                <Link className="text-blue-500" href="#">
                  Handmade pieces that took time to make
                </Link>
                <p className="text-sm text-gray-500">14 Oct 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <Image
                alt="Thumbnail of Link modern home"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 74.png"
                width={60}
              />
              <div>
                <Link className="text-blue-500" href="#">
                  Modern home in Milan
                </Link>
                <p className="text-sm text-gray-500">03 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <Image
                alt="Thumbnail of Link colorful office"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 75.png"
                width={60}
              />
              <div>
                <Link className="text-blue-500" href="#">
                  Colorful office redesign
                </Link>
                <p className="text-sm text-gray-500">03 Aug 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer/>
  
</>

        </div>

        
    )
}