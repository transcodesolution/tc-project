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
import { useState } from "react";
interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('webdevelopment');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <main className="flex items-center justify-center ">
      <div>
        <div className="relative">
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
        <div className="p-4">
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
            {/* <div className="">
            <h3 className="text-3xl font-extrabold mb-10"><span className="text-blue">OUR TECHNOLOGY</span> EXPERTISE</h3>
            <div className="flex">
              <div className="flex-1">
                <Link href="/webdevelopment">
                  <span className="hover:underline text-3xl font-medium text-blue">Web Development</span>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="/mobiledevelopment">
                  <span className="hover:underline text-3xl font-medium text-black">Mobile Development</span>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="/database">
                  <span className="hover:underline text-3xl font-medium text-black">Database</span>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="/design">
                  <span className="hover:underline text-3xl font-medium text-black">UI/UX Design</span>
                </Link>
              </div>
            </div>            
          </div> */}
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap text-sm font-medium text-center  justify-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                  {/* <button className="inline-block p-4 border-b-2 rounded-t-lg text-2xl" id="webdevelopment-tab" data-tabs-target="#webdevelopment" type="button" role="tab" aria-controls="webdevelopment" aria-selected="false">
                    Web Development
                  </button> */}
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'webdevelopment' ? 'border-blue-500' : 'border-transparent'}`}
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
                  {/* <button className="inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="mobiledevelopment-tab" data-tabs-target="#mobiledevelopment" type="button" role="tab" aria-controls="mobiledevelopment" aria-selected="false">
                    Mobile Development
                  </button> */}
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'mobiledevelopment' ? 'border-blue-500' : 'border-transparent'}`}
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
                  {/* <button className="inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="database-tab" data-tabs-target="#database" type="button" role="tab" aria-controls="database" aria-selected="false">
                    Database
                  </button> */}
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'database' ? 'border-blue-500' : 'border-transparent'}`}
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
                  {/* <button className="inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="design-tab" data-tabs-target="#design" type="button" role="tab" aria-controls="design" aria-selected="false">
                    UI/UX Design
                  </button> */}
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl ${activeTab === 'UI/UX Design' ? 'border-blue-500' : 'border-transparent'}`}
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
            </div>     
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

