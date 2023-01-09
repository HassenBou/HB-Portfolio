import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import deved from "../public/logohb.svg";
import { IconButton } from "@material-tailwind/react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>HB Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-sky-500">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <a
              className="animate-bounce cursor-pointer dark:bg-white rounded-full p-1"
              href="../"
            >
              <Image src={deved} width="30%" height="30%" />
            </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-sky-500 dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-sky-500 text-white px-4 py-2 rounded-md ml-8 dark:bg-white dark:text-sky-500"
                  href="#"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h3 className="text-2xl py-2 md:text-3xl">VideoFolio</h3>
            <IconButton>
              {" "}
              <i className="fas fa-heart" />{" "}
            </IconButton>
            <p className="text-md py-1 leading-8 mb-1 text-gray-700 md:text-xl max-w-lg mx-auto">
              No need to hire a full team animators, by me! Just talk about your business and express your needs even by simple expressions and ideas, witch makes me able to use my imagination, inspirations and brand thinking methologies, to create cool addvertising video for your business.
            </p>
          </div>
        </section>
        <section className="lg:flex-auto columns-2 mt-5 mb-5 ">
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted ><source src="../src/videos/fiabilityAddSpot.mp4"/></video>
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/lookAddSpot.mp4"/></video> 
        </section>
        <section className="lg:flex-auto columns-3 mt-5 mb-5 ">
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/alibabaAddSpot1.mp4"/></video>
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/alibabaAddSpot2.mp4"/></video>
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/alibabaAddSpot3.mp4"/></video>  
        </section>
        <section className="lg:flex-auto columns-2 mt-5 mb-5 ">
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/AoAddSpot1.mp4"/></video>
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/monrestoAddSpot.mp4"/></video> 
        </section>   
            
        <section className="lg:flex-auto columns-3 mt-5 mb-10 ">
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/meninAddSpot.mp4"/></video> 
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/ftseAddSpot.mp4"/></video>
            <video className="bg-gray-200 gap-3 mb-1 p-1 rounded-md " controls autoPlay muted><source src="../src/videos/affanAddSpot.mp4"/></video>
        </section>
        <section>
          <div></div>
        </section>
      </main>
      <footer className="bg-sky-500 dark:bg-white">  
        <div className="p-10  flex justify-center gap-20 text-white dark:text-sky-500">
          <h3>© 2022 Hassen Bouzidi | All Rights reserved</h3>
        </div>
      </footer>
    </div>
  );
}
