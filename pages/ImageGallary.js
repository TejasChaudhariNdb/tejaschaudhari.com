import React from 'react'
import Head from "next/head";
import Image from "next/image";
function ImageGallary() {
    return (
        <>
            <Head>
        <title>Photos of Tejas Chaudhari | WebDeveloper | Nandurbar India</title>
    
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hello! I'm Tejas Chaudhari, Full-Stack Developer and Freelancer. I help SaaS startups by building best-in-class software products. View my work. Hire Me"/>
        <meta name="keywords" content="Tejas Chaudhari , Tejas Sanjay Chaudhari , Nandurbar,Tejas , Nandurbar , Tejas Freelancer , Tushar , Tushar Chaudhari " />
  <meta name="author" content="Tejas Chaudhari" />
  <meta name="robots" content="noindex,follow" />
<meta name="googlebot" content="noindex,follow" />
        </Head>

        <div className="bg-blue-600 p-4 text-center  text-white">Tejas Chaudhari</div>

<div class="container mt-10">

      <Image
        src="/tejas.jpg"
        alt="Picture of Tejas "
        width={400}
        height={500}
className="image_tejas"
      />

      <Image
        src="/tejas2.jpg"
        alt="Picture of Tejas "
        width={600}
        height={500}
        className="image_tejas"
      />
   

      <Image
        src="/tejas3.jpg"
        alt="Picture of Tejas "
        width={400}
        height={500}
        className="image_tejas "
      />

      <Image
        src="/tejassparesh.jpg"
        alt="Tejas And Paresh"
        width={400}
        height={500}
className="image_tejas"
      />
   
    </div>

        </>
    )
}

export default ImageGallary
