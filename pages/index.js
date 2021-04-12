import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showMenu, setMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Tejas Chaudhari | WebDeveloper | Nandurbar India</title>
    
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hello! I'm Tejas Chaudhari, Full-Stack Developer and Freelancer. I help SaaS startups by building best-in-class software products. View my work. Hire Me"/>
        <meta name="keywords" content="Tejas Chaudhari , Tejas Sanjay Chaudhari , Nandurbar,Tejas , Nandurbar , Tejas Freelancer , Tushar , Tushar Chaudhari " />
  <meta name="author" content="Tejas Chaudhari" />
  <meta name="google-site-verification" content="UbAZP55SxhwKX_P2Flr8OQFHOaf7fv1g7xBUPbkTfW0" />
  <meta name="robots" content="index,follow" />
<meta name="googlebot" content="index,follow" />
     

<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hello! I'm Tejas Chaudhari, Full-Stack Developer and Freelancer. I help SaaS startups by building best-in-class software products. View my work. Hire Me"/>
        <meta name="keywords" content="Tejas Chaudhari , Tejas Sanjay Chaudhari , Nandurbar,Tejas , Nandurbar , Tejas Freelancer , Tushar , Tushar Chaudhari " />
  <meta name="author" content="Tejas Chaudhari" />
  <meta name="google-site-verification" content="UbAZP55SxhwKX_P2Flr8OQFHOaf7fv1g7xBUPbkTfW0" />
  <meta name="robots" content="index,follow" />
<meta name="googlebot" content="index,follow" />
 
     {
{
  "@context": "https://schema.org/",
  "@type": "Course",
  "courseCode": "F300",
  "name": "Learn HTML and CSS JS ",
  "description": "Learn Stepwise for newbie \r\n to Advanced     .",

  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Tejas Codes",
    "url": {"@id": "/provider/324/university-of-bristol"}
  }
}



     }

        </Head>
     
      <div className="h-screen p-6 bg-gradient-to-r from-gray-800 to-gray-900  grid justify-items-center">
        <div className={showMenu ? "close_drawer " : "first open_drawer"}>
          <div className="max-w-screen-sm w-80 ">
            <figure className="bg-gradient-to-r from-gray-700 to-gray-800  rounded-xl p-8 shadow-2xl">
              <svg
                onClick={() => setMenu(true)}
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>

              <Image
                className=" relative w-32 h-32 rounded mx-auto hero-img"
                src="/tejas.png"
                alt="Tejas Chaudhari Developer"
                width={250}
                height={250}
              />

              {/* <img
                className="relative w-32 h-32 rounded mx-auto"
                src="https://via.placeholder.com/300/300"
                alt=""
              /> */}

              <div className=" space-y-4">
                <p className="text-3xl hero-text font-semibold">
                  Hi ! I'm Tejas
                </p>
                <figcaption className="font-medium">
                  <div className="text-sm" style={{ color: "#9fa2a5" }}>
                    Self-taught Programmer , Traveler from Nandurbar IN. an
                    adaptable, curious and passionate persoan. who has the
                    ability to transform thougts into valuable and delightfull
                    user-centerd product. Combining uears of programming
                    experince and the love for traveling it complements just
                    that.
                  </div>
                  <div className="mt-3 text-gray-300 text-center">
                    CEO - <a href="https:neardish.in">NearDish LLP</a>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        <div
          className={showMenu ? "second absolute open_drawer" : "close_drawer"}
        >
          <div className="max-w-screen-sm w-80 ">
            <figure className="bg-gradient-to-r from-gray-700 to-gray-800  rounded-xl p-8 shadow-2xl">
              <svg
                onClick={() => setMenu(false)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white float-right"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <div className="pt-12 mt-2 space-y-6 ">
                <div className="grid grid-cols-2 gap-12  text-1xl">
                  <g class="col-start-1 col-end-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-500 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <small className="text-blue-500 ">Home</small>
                  </g>

                  <g class="col-end-7 col-span-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9 text-gray-300 hover:text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <small className="text-white ">Work</small>
                  </g>

                  <g className="col-start-1 col-end-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    <small className="text-white ">PROCESS</small>
                  </g>

                  <g className="col-end-7 col-span-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <small className=" text-white ">TALK</small>
                  </g>
                </div>
                <br />
                <hr />
                <div className="flex justify-between">
                  <a href="https://instagram.com/tejas_s_chaudhari">
                    <svg
                      height="17pt"
                      viewBox="0 0 511 511.9"
                      width="17pt"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#696c70"
                      stroke="currentColor"
                    >
                      <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
                      <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
                      <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
                    </svg>
                  </a>

                  <a href="https://www.linkedin.com/in/tejaschaudhari038/">
                    <svg
                      height="17pt"
                      viewBox="-21 -35 682.66669 682"
                      width="17pt"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#696c70"
                  
                  >
                      <path d="m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0" />
                      <path d="m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0" />
                      <path d="m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0" />
                    </svg>
                  </a>

                  <a href="https://www.facebook.com/tejas.chaudhari.108/">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#696c70"
                      height="17pt"
                      width="17pt"
                  
                  >
                      <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0" />
                    </svg>
                  </a>

                  <a href="https://twitter.com/tejas038">

                  <svg xmlns="http://www.w3.org/2000/svg" width="17pt" height="17pt"     fill="#696c70" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>

                  </a>

                  <a href="https://wa.me/919158110065?text=How%20are%20you%20?">
                    <svg
                      height="17pt"
                      viewBox="-23 -21 682 682.66669"
                      width="17pt"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#696c70"
                  
                  >
                      <path
                        d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                
                <div className="pt-5 mt-4 text-gray-300 text-center">
               Made By Tejas Chaudhari
              <br/>
               NextJS
                </div>


 </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
