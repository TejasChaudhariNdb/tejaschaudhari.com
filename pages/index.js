import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [showMenu, setMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Tejas Chaudahri</title>
      </Head>
      <div class="h-screen p-6 bg-gradient-to-r from-gray-800 to-gray-900  grid justify-items-center">
        <div className="first " class={showMenu ? 'hidden ' : 'visible transition-all ease-in-out duration-1000 transform translate-x-0'}>
          <div className="max-w-screen-sm w-80 ">
            <figure class="bg-gradient-to-r from-gray-700 to-gray-800  rounded-xl p-8 shadow-2xl">
              <svg
                onClick={() => setMenu(true)}
                class="h-6 w-6 text-white"
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
              <img
                class="relative w-32 h-32 rounded mx-auto"
                src="https://via.placeholder.com/300/300"
                alt=""
              />
              <div class="pt-6 space-y-4">
                <p class="text-3xl text-white font-semibold">Hi ! I'm Tejas</p>
                <figcaption class="font-medium">
                  <div class="text-white">
                    Self-taught Programmer , Traveler from Nandurbar IN. an
                    adaptable, curious and passionate persoan. who has the
                    ability to transform thougts into valuable and delightfull
                    user-centerd product. Combining uears of programming
                    experince and the love for traveling it complements just
                    that.
                  </div>
                  <div class="mt-3 text-gray-300 text-center">
                    CEO - <a href="https:neardish.in">NearDish LLP</a>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        <div className="second hidden" class={showMenu ? 'visible transition-all ease-in-out duration-1000 transform translate-x-0 ' : 'hidden'}>
          <div className="max-w-screen-sm w-80 ">
            <figure class="bg-gradient-to-r from-gray-700 to-gray-800  rounded-xl p-8 shadow-2xl">
              <svg
                onClick={() => setMenu(false)}
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white float-right"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <div class="pt-12 space-y-6 ">
<div class="grid grid-cols-2 gap-12 text-1xl">
                <g >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-9 w-9 text-blue-500 "
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
                  <small class="text-blue-500 ">Home</small>
                </g>

                <g>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-9 w-9 text-gray-300 hover:text-blue-500"
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
                <small class="text-white ">Work</small>
             
</g>


<g>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-9 w-9 text-gray-400"
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
                <small class="text-white ">Work</small>
         
</g>

<g class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-9 w-9 text-gray-300"
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
                <small class=" text-white ">Work 2</small>
         
</g>
</div>

                <div class="mt-3 text-gray-300 text-center">
                  CEO - <a href="https:neardish.in">NearDish LLP</a>
                </div>

                <div class="mt-3 text-gray-300 text-center">
                  CEO - <a href="https:neardish.in">NearDish LLP</a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
