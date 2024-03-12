"use client"

import Image from "next/image";
import people from "../../public/Assets/people.png"
import CardWrapper from "./components/CardWrapper";
import cardData from "./utils/cardData";
import Link from "next/link";
import vector from "../../public/Assets/vector.png"
import style from "./styles.module.scss"
import NextJsIcon from "../../public/Assets/nextJsIcon.png"
import ReactJsIcon from "../../public/Assets/reactJsIcon.png"
import NodeJsIcon from "../../public/Assets/NodeJsIcon.png"
import PhpIcon from "../../public/Assets/phpIcon.png"
import workProcess from "../../public/Assets/workProcess.png"
import images3 from "../../public/Assets/images3.jpg"
import blogItems from "./components/BlogCard";
import Process from "../../public/Assets/Process.png"
import { useState } from "react";
import cx from "clsx"
import PortFolioImages from "./utils/PortFolioImages";
import Portfolio from "./components/PortFolio ";
import artistMain from "../../public/Assets/artistMain.png";
import agency_main from "../../public/Assets/agency_main.png";
import zwift_main_img from "../../public/Assets/zwift_main_img.png";
import sephora_main_img from "../../public/Assets/sephora_main_img.png";
import harbal_main_img from "../../public/Assets/harbal_main_img.png";
import yougig_main from "../../public/Assets/yougig_main.png";
import tradyl_main from "../../public/Assets/tradyl_main.png";
import cosmeticchoice_main from "../../public/Assets/cosmeticchoice_main.png";
import skillzcafe_main from "../../public/Assets/skillzcafe_main.png";
import fitness_main from "../../public/Assets/fitness_main.png";
import synergy_main from "../../public/Assets/synergy_main.png";
import ethosenergy_main from "../../public/Assets/ethosenergy_main.png";
import Zymeal_main from "../../public/Assets/Zymeal_main.png";
interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('webdevelopment');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // const PortFolioImages = [
  //   artistMain,
  //   agency_main,
  //   zwift_main_img,
  //   sephora_main_img,
  //   harbal_main_img,
  //   yougig_main,
  //   tradyl_main,
  //   cosmeticchoice_main,
  //   skillzcafe_main,
  //   fitness_main,
  //   synergy_main,
  //   ethosenergy_main,
  //   Zymeal_main,
  // ];

  return (
    <main>
      <div>
        <div className="relative mb-10">
          <div className={style.websiteBgImage}>
            <div className="container mx-auto flex flex-col justify-center pt-44">
              <h3 className="text-headertext  text-2xl font-extrabold text-left mb-4">YOUR PREMIER</h3>
              <h4 className="text-black  text-2xl font-extrabold text-left mb-3">Destination for</h4>
              <h4 className="text-headertext  text-2xl font-extrabold text-left mb-3">Website & Mobile App</h4>
              <h4 className="text-black  text-2xl font-extrabold text-left mb-5">Innovation</h4>
              <p className="text-black text-2xl font-medium text-left mb-3 w-6/12">Our team offers expert design, development,
                andstrategy services customized to your specific
                requirements.</p>
              <div className="flex gap-7">
                <button className="bg-blue px-4 py-2 rounded-md text-white">Discover More</button>
                <button className="bg-white px-4 py-2 rounded-md text-black">How It Works</button>
              </div>
              <div className="absolute right-1/4 bottom-6">
                <Image
                  src={vector}
                  alt="Your Name"
                  className="object-contain"
                />
              </div>
            </div>
          </div >
        </div>
        <div className="">
          <div className="container mx-auto gap-20 flex items-center justify-between">
            <div className="flex gap-5">
              <div className="flex-1 h-700 w-470 bg-gray py-10 px-6">
                <h2 className="text-3xl">Who <span className="text-blue">We Are</span></h2>
                <div className="w-36 h-1 bg-blue mb-4"></div>
                <h3 className="leading-10 text-2xl pb-5">MORE THEN 10+ YEARS
                  PROVIDE IT SOLUTION</h3>
                <p className="pb-5 text-lg">Our focus is primarily on software development,
                  crafting custom solutions that align with our
                  clients unique requirements.</p>
                <p className="pb-5 text-lg">Our team of experienced developers works
                  closely with each client to their business goals and objectives.</p>
                <button className="bg-blue leading-7 text-lg rounded-md text-white p-2">
                  Our Service
                </button>
              </div>
              <div className="flex-1">
                <Image
                  src={people}
                  height={700}
                  width={470}
                  alt="Your Name"
                  className="pb-4"
                />
              </div>
              <div className="flex-1 h-700 w-470 bg-gray py-10 px-6">
                <h2 className="text-3xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
                <div className="w-36 h-1 bg-blue mb-4"></div>
                <p className="pb-5 text-lg">Welcome to Transcode Solutions– where
                  innovation meets excellence.</p>
                <p className="text-lg">
                  Transcode Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each clients specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable,and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto gap-20 mt-10 text-center">
            <h3 className="font-bold text-3xl mb-6">Driving rapid change with software solutions for enhanced <span className="text-blue">flexibility and expansion, focusing on scalability and fostering growth.</span></h3>
            <p className="text-lg mb-6">Utilizing cutting-edge software solutions, we are driving rapid transformation to enhance flexibility and accommodate expansion within our organization. Our primary focus lies in scalability, ensuring that oursystems can easily handle increased demand and growth</p>
            <div className="flex text-center ">
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    5+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Years of Experience</h3>
              </div>
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    70+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Talented IT Professionals</h3>
              </div>
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    100+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Successful Projects</h3>
              </div>
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    30+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Countries Served</h3>
              </div>
            </div>
            <div className="mt-14">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold mb-4">What <span className="text-blue">We Do</span></h3>
                <p className="text-3xl text-gray">OUR SPECIALIZED SERVICES ARE TAILORED EXCLUSIVELY FOR YOUR BUSINESS NEEDS.</p>
              </div>
              <div className="container mx-auto pt-24">
                <div className="flex flex-wrap justify-center gap-9 mb-4">
                  {cardData.map((data, index) => (
                    <CardWrapper key={index} {...data} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap text-sm font-medium text-center  justify-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'webdevelopment' ? 'border-blue' : 'border-transparent'}`}
                    id="webdevelopment-tab"
                    data-tabs-target="#webdevelopment"
                    type="button"
                    role="tab"
                    aria-controls="webdevelopment"
                    aria-selected={activeTab === 'webdevelopment'}
                    onClick={() => handleTabClick('webdevelopment')}
                  >
                    Web Development
                  </button>
                </li>
                <li className="me-2" role="presentation">
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'mobiledevelopment' ? 'border-blue' : 'border-transparent'}`}
                      id="mobiledevelopment-tab"
                      data-tabs-target="#mobiledevelopment"
                      type="button"
                      role="tab"
                      aria-controls="mobiledevelopment"
                      aria-selected={activeTab === 'mobiledevelopment'}
                      onClick={() => handleTabClick('mobiledevelopment')}
                    >
                      Mobile Development
                    </button>
                  </li>
                </li>
                <li className="me-2" role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'database' ? 'border-blue' : 'border-transparent'}`}
                    id="database-tab"
                    data-tabs-target="#database"
                    type="button"
                    role="tab"
                    aria-controls="Database"
                    aria-selected={activeTab === 'database'}
                    onClick={() => handleTabClick('database')}
                  >
                    Database
                  </button>
                </li>
                <li role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'UI/UX Design' ? 'border-blue' : 'border-transparent'}`}
                    id="UI/UX Design-tab"
                    data-tabs-target="#UI/UX Design"
                    type="button"
                    role="tab"
                    aria-controls="UI/UX Design"
                    aria-selected={activeTab === 'UI/UX Design'}
                    onClick={() => handleTabClick('UI/UX Design')}
                  >
                    UI/UX Design
                  </button>
                </li>
              </ul>
            </div>
            <div className="container mx-auto pt-10" id="default-tab-content">
              <div className="flex flex-wrap justify-center" >
                <div className="mb-10 bg-gray p-4 m-4 relative -z-10 w-2/12 h-345 rounded-3xl">
                  <div className="flex justify-center h-48">
                    <Image
                      src={NextJsIcon}
                      alt="Your Name"
                      className="absolute top-16 mx-auto z-10"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">React JS</h2>
                </div>
                <div className="mb-10 bg-gray p-4 m-4 relative -z-10 w-2/12 h-345 rounded-3xl">
                  <div className="flex justify-center h-48">
                    <Image
                      src={ReactJsIcon}
                      alt="Your Name"
                      className="absolute top-16 mx-auto z-10"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Node JS</h2>
                </div>
                <div className="mb-10 bg-gray p-4 m-4 relative -z-10 w-2/12 h-345 rounded-3xl">
                  <div className="flex justify-center h-48">
                    <Image
                      src={NodeJsIcon}
                      alt="Your Name"
                      className="absolute top-16 mx-auto z-10"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">PHP</h2>
                </div>
                <div className="mb-10 bg-gray p-4 m-4 relative -z-10 w-2/12 h-345 rounded-3xl">
                  <div className="flex justify-center h-48">
                    <Image
                      src={PhpIcon}
                      alt="Your Name"
                      className="absolute top-16 mx-auto z-10"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Next JS</h2>
                </div>
              </div>
              <div className="bg-gray mb-16">
                <h3 className="text-3xl font-extrabold mb-4"><span className="text-blue">Our work</span> Process</h3>
                <p className="text-3xl font-semibold text-center text-gray">Transcode Solution an exclusive approach for building modern, secure solutions tailored to each of its
                  clients individual requirements. </p>
                <div className="flex">
                  <div className="flex-1">
                    <Image src={workProcess} alt="workProcess" width={880} height={552} />
                  </div>
                  <div className="">
                    <Image src={Process} alt="Process" width={556} height={556} />
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="text-3xl font-extrabold mb-4"><span className="text-blue">Client</span> Testimonials</h3>
                <p className="text-3xl font-semibold text-center text-gray">Feedback and Statistics</p>
                <div className="flex space-x-16 mt-32 text-left ">
                  <div className="rounded-3xl border-2 border-blue p-4 w-[470px] h-[376px] relative">
                    <div className="border-4 border-blue w-[150px] h-[150px] absolute -top-[86px] left-14 rotate-[39deg] overflow-hidden">
                      {/* <div className={style.diamond_bgImage}></div> */}
                      <Image
                        src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600" // Remove the query string
                        alt="Image 1"
                        width={150}
                        height={150}
                        className={style.diamond_Image}
                      // className="w-[150px] h-[150px] -rotate-[40deg]"
                      />
                    </div>
                    <p className="text-gray text-base mt-28 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>
                    <h3 className="text-blue font-semibold text-xl pb-4">mst. sadia akter</h3>
                    <p className="text-black text-base ">dhaka</p>
                  </div>
                  <div className="rounded-lg border-2 border-blue p-4 w-[470px] h-[376px] relative">
                    <div className="border-4 border-blue w-[150px] h-[150px] absolute -top-[86px] left-14 rotate-[39deg] overflow-hidden">
                      <Image
                        src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600" // Remove the query string
                        alt="Image 1"
                        width={180}
                        height={180}
                        className=" w-full h-[150px] -rotate-[40deg]"
                      />
                    </div>
                    <p className="text-gray text-base mt-28 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>
                    <h3 className="text-blue font-semibold text-xl pb-4">Mizanur islam</h3>
                    <p className="text-black text-base">khulna</p>
                  </div>
                  <div className="rounded-lg border-2 border-blue p-4 w-[470px] h-[376px] relative">
                    <div className="border-4 border-blue w-[150px] h-[150px] absolute -top-[86px] left-14 rotate-[39deg] overflow-hidden">
                      <Image
                        src={images3} // Remove the query string
                        alt="Image 1"
                        width={180}
                        height={180}
                        className=" w-full h-[150px] -rotate-[40deg]"
                      />
                    </div>
                    <p className="text-gray text-base mt-28 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>
                    <h3 className="text-blue font-semibold text-xl pb-4">md. mahim miya</h3>
                    <p className="text-black text-base">Chittagong</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky mb-12">
            <div className="container mx-auto gap-20 mt-10 text-center">
              <div className=" mt-20 pb-12">
                <div className="container mx-auto">
                  <h3 className="text-3xl font-extrabold mb-4 pt-6"><span className="text-blue">Our</span> Portfolio</h3>                  
                  <Portfolio images={PortFolioImages} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray mb-12">
            <div className="container mx-auto gap-20 mt-10 text-center">
              <div className=" mt-20 pb-12">
                <div className="container mx-auto">
                  <h3 className="text-3xl font-extrabold mb-4 pt-6"><span className="text-blue">Our</span> Blog</h3>
                  <p className="text-3xl font-semibold text-center text-gray mb-4">Trending Custom Software Development Blog</p>
                  <div className="container mx-auto">
                    <div className="grid grid-cols-3 justify-items-center gap-5">
                      {blogItems.map((blog, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <div className="p-2">
                            <a href={blog.link}>
                              <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300} />
                            </a>
                          </div>
                          <div className="p-5 text-left">
                            <a href={blog.link}>
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                            <a href={blog.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              See Full Article
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="bg-blue text-white text-center mb-12 pb-4 pt-4">
              <h3 className="pb-6 font-extrabold">Get IN TOUCH</h3>
              <p className="pb-6">Let’s collaborate and work something amazing together. Let’s discuss
                and build something unforgettable together.</p>
              <button className="bg-white px-4 py-2 rounded-md text-black text-lg">Start Conversation</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

